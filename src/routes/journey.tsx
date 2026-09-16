import { createFileRoute } from "@tanstack/react-router";

import { ComingSoonPage } from "@/components/ComingSoonPage";

const ARTWORK = "https://cdn.jsdelivr.net/gh/0xDarkSeidBull/TheSaudisARC@main/footer/journey.png";

export const Route = createFileRoute("/journey")({
  head: () => ({
    meta: [
      { title: "Journey — ARCSultans" },
      { name: "description", content: "The ARCSultans journey is coming soon." },
      { property: "og:title", content: "Journey — ARCSultans" },
      { property: "og:description", content: "The ARCSultans journey is coming soon." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <ComingSoonPage title="Journey" artwork={ARTWORK} />,
});