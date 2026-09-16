import { createFileRoute } from "@tanstack/react-router";

import { SiteFooter, TopStatus } from "@/components/SiteChrome";
import {
  PixelButtonLink,
  PageBackground,
  TITLE_LOGO,
} from "@/components/sultan-shared";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ARCSultans — 999 Sultans Arriving on ARC" },
      {
        name: "description",
        content:
          "999 Sultans arriving on ARC. Claim your throne before the gates close.",
      },
      { property: "og:title", content: "ARCSultans — 999 Sultans Arriving on ARC" },
      {
        property: "og:description",
        content: "999 Sultans arriving on ARC. Claim your throne before the gates close.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main id="top" className="relative flex min-h-dvh flex-col overflow-hidden bg-background">
      <PageBackground variant="home" />

      <TopStatus />

      {/* Content — fills the available viewport above the footer */}
      <div className="relative z-10 flex min-h-0 flex-1 flex-col items-center justify-center px-4 py-3">
        <section className="state-enter mx-auto flex h-full w-full max-w-3xl -translate-y-12 flex-col items-center justify-center pt-24 text-center sm:-translate-y-16 sm:pt-28">
          <h1 className="sr-only">ARCSultans</h1>
          <img
            src={TITLE_LOGO}
            alt="ARCSultans"
            className="w-full max-w-lg object-contain [image-rendering:pixelated] sm:max-w-xl"
          />
          <p className="mt-4 max-w-2xl font-display text-sm font-bold leading-7 text-footer-title [text-shadow:0_2px_0_var(--background),0_0_10px_color-mix(in_oklab,var(--footer-title)_30%,transparent)] sm:text-lg sm:leading-8">
            999 Sultans arriving on ARC.<br />Claim your throne before the gates close.
          </p>
          <PixelButtonLink
            to="/throne"
            className="mt-5 h-9 w-full max-w-[250px] text-[10px] hover:bg-primary/90 sm:h-10 sm:text-xs"
          >
            ENTER THE SULTANATE
          </PixelButtonLink>
        </section>
      </div>

      <SiteFooter />
    </main>
  );
}
