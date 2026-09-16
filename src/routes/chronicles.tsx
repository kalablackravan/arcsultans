import { createFileRoute } from "@tanstack/react-router";

import { ComingSoonPage } from "@/components/ComingSoonPage";

const ARTWORK = "https://cdn.jsdelivr.net/gh/0xDarkSeidBull/TheSaudisARC@main/footer/chronicles.png";

export const Route = createFileRoute("/chronicles")({
  head: () => ({
    meta: [
      { title: "Chronicles — ARCSultans" },
      { name: "description", content: "The ARCSultans chronicles are coming soon." },
      { property: "og:title", content: "Chronicles — ARCSultans" },
      { property: "og:description", content: "The ARCSultans chronicles are coming soon." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <ComingSoonPage title="Chronicles" artwork={ARTWORK} />,
});