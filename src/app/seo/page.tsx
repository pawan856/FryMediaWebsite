import { permanentRedirect } from "next/navigation";

export default function LegacySeoPage() {
  permanentRedirect("/services/seo");
}
