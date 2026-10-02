import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  trailingSlash: false,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      { source: "/seo", destination: "/services/seo", permanent: true },
      { source: "/services/geo", destination: "/geo", permanent: true },
    ];
  },
  async headers() {
    const isDevelopment = process.env.NODE_ENV !== "production";
    const contentSecurityPolicy = [
      "default-src 'self'",
      "base-uri 'self'",
      "form-action 'self'",
      "frame-ancestors 'none'",
      "object-src 'none'",
      "img-src 'self' data: blob: https://images.unsplash.com",
      "font-src 'self' data:",
      "style-src 'self' 'unsafe-inline'",
      // JSON-LD and Next.js runtime scripts are currently inline; remove this exception after nonce-based script delivery is introduced.
      `script-src 'self' 'unsafe-inline'${isDevelopment ? " 'unsafe-eval'" : ""}${process.env.NEXT_PUBLIC_GA_ID ? " https://www.googletagmanager.com" : ""}`,
      "connect-src 'self'" + (process.env.NEXT_PUBLIC_GA_ID ? " https://www.google-analytics.com https://region1.google-analytics.com" : ""),
    ].join("; ");

    return [{
      source: "/(.*)",
      headers: [
        { key: "Content-Security-Policy", value: contentSecurityPolicy },
        { key: "X-Content-Type-Options", value: "nosniff" },
        { key: "X-Frame-Options", value: "DENY" },
        { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=()" },
        ...(isDevelopment ? [] : [{ key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains" }]),
      ],
    }];
  },
};

export default nextConfig;
