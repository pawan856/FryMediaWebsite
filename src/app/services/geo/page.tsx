import { permanentRedirect } from "next/navigation";

export default function LegacyGeoServicePage() {
  permanentRedirect("/geo");
}