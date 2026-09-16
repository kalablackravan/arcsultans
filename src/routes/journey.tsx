import { createFileRoute } from "@tanstack/react-router";

import { ComingSoonPage } from "@/components/ComingSoonPage";


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
  component: () => <ComingSoonPage title="Journey" />,
});