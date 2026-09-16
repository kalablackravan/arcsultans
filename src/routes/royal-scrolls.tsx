import { createFileRoute } from "@tanstack/react-router";

import { ComingSoonPage } from "@/components/ComingSoonPage";

const ARTWORK = "https://cdn.jsdelivr.net/gh/0xDarkSeidBull/TheSaudisARC@main/footer/royalscrolls.png";

export const Route = createFileRoute("/royal-scrolls")({
  head: () => ({
    meta: [
      { title: "Royal Scrolls — ARCSultans" },
      { name: "description", content: "The ARCSultans royal scrolls are coming soon." },
      { property: "og:title", content: "Royal Scrolls — ARCSultans" },
      { property: "og:description", content: "The ARCSultans royal scrolls are coming soon." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <ComingSoonPage title="Royal Scrolls" artwork={ARTWORK} />,
});