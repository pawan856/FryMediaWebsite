import { NextResponse } from "next/server";
import { contactRateLimiter } from "@/lib/contact/rateLimit";
import { validateContactPayload } from "@/lib/contact/validation";
import { getLeadSource, inferReferrer, leadService } from "@/lib/leads/service";
import { leadNotificationService } from "@/lib/leads/notifications";
import { leadWebhook } from "@/lib/leads/webhook";
import { leadDuplicateGuard } from "@/lib/leads/dedupe";
import { primaryMarket } from "@/lib/markets/config";

function parseTouch(value: string | undefined, fallbackPage: string) {
  if (!value) return { landingPage: fallbackPage };
  try {
    const parsed = JSON.parse(value) as Record<string, unknown>;
    return { source: typeof parsed.source === "string" ? parsed.source : undefined, medium: typeof parsed.medium === "string" ? parsed.medium : undefined, campaign: typeof parsed.campaign === "string" ? parsed.campaign : undefined, term: typeof parsed.term === "string" ? parsed.term : undefined, content: typeof parsed.content === "string" ? parsed.content : undefined, landingPage: typeof parsed.landingPage === "string" ? parsed.landingPage.slice(0, 300) : fallbackPage };
  } catch { return { landingPage: fallbackPage }; }
}

export const runtime = "nodejs";

export async function POST(request: Request) {
  const contentType = request.headers.get("content-type") || "";
  if (!contentType.toLowerCase().startsWith("application/json")) {
    return NextResponse.json({ success: false, message: "Please submit the form again." }, { status: 415 });
  }

  const contentLength = Number(request.headers.get("content-length") || 0);
  if (Number.isFinite(contentLength) && contentLength > 20_000) {
    return NextResponse.json({ success: false, message: "Please submit a smaller message." }, { status: 400 });
  }

  const identifier = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  const rate = await contactRateLimiter.check(identifier);
  if (!rate.allowed) {
    return NextResponse.json({ success: false, message: "Please try again later." }, { status: 429 });
  }

  let body: unknown;
  try {
    const rawBody = await request.text();
    if (rawBody.length > 20_000) {
      return NextResponse.json({ success: false, message: "Please submit a smaller message." }, { status: 400 });
    }
    body = JSON.parse(rawBody) as unknown;
  } catch {
    return NextResponse.json({ success: false, message: "Please submit the form again." }, { status: 400 });
  }

  const result = validateContactPayload(body);
  if (!result.success) {
    if (typeof body === "object" && body !== null && "website_confirm" in body && body.website_confirm) {
      return NextResponse.json({ success: false, message: "Please submit the form again." }, { status: 400 });
    }
    return NextResponse.json({ success: false, message: "Please check the highlighted fields.", errors: result.errors }, { status: 400 });
  }

  if (typeof body === "object" && body !== null && "website_confirm" in body && body.website_confirm) {
    return NextResponse.json({ success: false, message: "Please submit the form again." }, { status: 400 });
  }

  const emailRate = await contactRateLimiter.checkEmail(result.data.email);
  if (!emailRate.allowed) return NextResponse.json({ success: false, message: "Please try again later." }, { status: 429 });
  if (await leadDuplicateGuard.isRecentDuplicate(result.data)) {
    return NextResponse.json({ success: false, message: "Please try again later." }, { status: 409 });
  }

  let lead;
  try {
    lead = await leadService.createLead({
      ...result.data,
      market: primaryMarket.code,
      attribution: {
        source: getLeadSource(parseTouch(result.data.firstTouch, result.data.landingPage || "/contact").landingPage),
        firstTouch: parseTouch(result.data.firstTouch, result.data.landingPage || "/contact"),
        lastTouch: parseTouch(result.data.lastTouch, result.data.landingPage || "/contact"),
        referrer: inferReferrer(result.data.referrer),
      },
    });
  } catch {
    return NextResponse.json({ success: false, message: "Unable to process your request." }, { status: 500 });
  }
  if (!lead.persisted || !lead.lead) {
    return NextResponse.json({ success: false, message: "We couldn't save your message. Please try again." }, { status: 503 });
  }

  // Notifications and webhooks are intentionally secondary to lead persistence.
  await Promise.allSettled([leadNotificationService.notifyBusiness(lead.lead), leadNotificationService.confirmLead(lead.lead), leadWebhook.send(lead.lead)]);

  return NextResponse.json({ success: true, leadId: lead.lead.id, message: "Message received." }, { status: 201 });
}

export async function GET() {
  return NextResponse.json({ success: false, message: "Method not allowed." }, { status: 405, headers: { Allow: "POST" } });
}