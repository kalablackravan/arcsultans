import { createFileRoute } from "@tanstack/react-router";

import { ComingSoonPage } from "@/components/ComingSoonPage";

const ARTWORK = "https://cdn.jsdelivr.net/gh/0xDarkSeidBull/TheSaudisARC@main/footer/royalcounsel.png";

export const Route = createFileRoute("/royal-counsel")({
  head: () => ({
    meta: [
      { title: "Royal Counsel — ARCSultans" },
      { name: "description", content: "The ARCSultans royal counsel is coming soon." },
      { property: "og:title", content: "Royal Counsel — ARCSultans" },
      { property: "og:description", content: "The ARCSultans royal counsel is coming soon." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <ComingSoonPage title="Royal Counsel" artwork={ARTWORK} />,
});