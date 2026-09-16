import { createFileRoute } from "@tanstack/react-router";

import { SiteFooter, TopStatus } from "@/components/SiteChrome";
import {
  BUTTON_IMAGE,
  CENTER_PREVIEW,
  CornerGifs,
  FOUR_FRAMES,
  MAIN_FRAME,
  PageBackground,
  PixelButtonLink,
  SceneGate,
  SIDE_FRAMES,
  TITLE_LOGO,
  WHITELIST_BACKGROUND,
} from "@/components/sultan-shared";

const THRONE_IMAGES = [
  WHITELIST_BACKGROUND,
  TITLE_LOGO,
  CENTER_PREVIEW,
  MAIN_FRAME,
  BUTTON_IMAGE,
  FOUR_FRAMES,
  ...SIDE_FRAMES,
] as const;

export const Route = createFileRoute("/throne")({
  head: () => ({
    meta: [
      { title: "ARCSultans" },
      {
        name: "description",
        content:
          "999 Sultans. 1 Arc Sultan. A golden dynasty on ARC network — claim your throne.",
      },
      { property: "og:title", content: "Claim Your Throne — ARCSultans" },
      {
        property: "og:description",
        content: "999 Sultans. 1 Arc Sultan. A golden dynasty on ARC network.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ThronePage,
});

function ThronePage() {
  return (
    <main className="relative flex min-h-dvh flex-col overflow-hidden bg-background">
      <PageBackground variant="whitelist" />

      <TopStatus />


      {/* Content — fills the available viewport above the footer */}
      <div className="relative z-10 flex min-h-0 flex-1 flex-col items-center justify-center px-4 py-3">
        <SceneGate images={THRONE_IMAGES} className="w-full">
        <CornerGifs />
        <section className="state-enter mx-auto flex w-full max-w-xl items-center justify-center">
          <div className="w-full max-w-lg">
            <header className="relative z-10 -mb-7 px-4 pt-1 text-center sm:-mb-10">
              <h1 className="sr-only">ARCSultans Throne</h1>
              <img
                src={TITLE_LOGO}
                alt="ARCSultans"
                className="mx-auto h-16 w-auto max-w-full object-contain [image-rendering:pixelated] sm:h-24"
              />
            </header>

            <div className="flex flex-col items-center px-4">
              <div className="relative aspect-square w-full max-w-sm sm:max-w-md">
                <img
                  src={CENTER_PREVIEW}
                  alt="ARCSultans — Sultan #553"
                  className="absolute left-[32.3%] top-[29.03%] h-[34.61%] w-[35.41%] object-cover [image-rendering:pixelated]"
                />
                <span className="absolute left-[32.3%] top-[65.2%] w-[35.41%] text-center font-display text-[10px] font-bold leading-none text-footer-title [text-shadow:0_2px_0_var(--background),0_0_10px_color-mix(in_oklab,var(--footer-title)_30%,transparent)] sm:text-xs">
                  Sultan #553
                </span>
                <img
                  src={MAIN_FRAME}
                  alt=""
                  className="absolute inset-0 h-full w-full object-contain [image-rendering:pixelated]"
                />
                <PixelButtonLink
                  to="/whitelist"
                  className="absolute left-[20%] top-[72.5%] h-[12%] w-[60%] text-[10px] sm:text-xs"
                >
                  CLAIM YOUR THRONE
                </PixelButtonLink>
              </div>

              <p className="-mt-10 text-center font-display text-[10px] font-bold leading-5 text-footer-title [text-shadow:0_2px_0_var(--background),0_0_10px_color-mix(in_oklab,var(--footer-title)_30%,transparent)] sm:-mt-12 sm:text-xs">
                999 Sultans. 1 Arc Sultan.<br />A golden dynasty on ARC network.
              </p>
            </div>
          </div>
        </section>
        </SceneGate>
      </div>

      <SiteFooter />
    </main>
  );
}
