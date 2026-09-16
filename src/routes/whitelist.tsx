import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { useState } from "react";

import { SiteFooter, TopStatus } from "@/components/SiteChrome";
import { WhitelistForm } from "@/components/WhitelistForm";
import {
  BUTTON_IMAGE,
  CDN_ROOT,
  FIELD_FRAME_IMAGE,
  FOLLOW_FRAME_IMAGE,
  PANEL_FRAME,
  PageBackground,
  SceneGate,
  WHITELIST_BACKGROUND,
  WHITELIST_TAG,
} from "@/components/sultan-shared";

const CONFIRMATION_FRAME = `${CDN_ROOT}/whitelist_submit/whitelistconfirrmations.png`;
const CONFIRMATION_BUTTON = `${CDN_ROOT}/whitelist_submit/pixel-button-8x.png`;

const WHITELIST_IMAGES = [
  WHITELIST_BACKGROUND,
  WHITELIST_TAG,
  PANEL_FRAME,
  BUTTON_IMAGE,
  FIELD_FRAME_IMAGE,
  FOLLOW_FRAME_IMAGE,
] as const;

// Post-submit view only; kept out of the main gate so the form is never held
// back by assets it does not render. Hoisted to module scope so the inner
// SceneGate does not receive a fresh array on every render.
const CONFIRMATION_IMAGES = [CONFIRMATION_FRAME, CONFIRMATION_BUTTON] as const;

export const Route = createFileRoute("/whitelist")({
  head: () => ({
    meta: [
      { title: "ARCSultans" },
      {
        name: "description",
        content:
          "Secure your spot on the ARCSultans whitelist. Mint 16 September 2026 — join the golden dynasty on ARC.",
      },
      { property: "og:title", content: "Whitelist — ARCSultans" },
      {
        property: "og:description",
        content:
          "Secure your spot on the ARCSultans whitelist. Mint 16 September 2026 — join the golden dynasty on ARC.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: WhitelistPage,
});

function WhitelistPage() {
  const [done, setDone] = useState(false);

  return (
    <main className="relative flex min-h-dvh flex-col overflow-hidden bg-background">
      <PageBackground variant="whitelist" />

      <TopStatus />


      {/* Content — fills the available viewport above the footer */}
      <div className="relative z-10 flex min-h-0 flex-1 flex-col items-center justify-center px-4 py-3">
        <SceneGate images={WHITELIST_IMAGES} className="w-full">
        {done ? (
          <SceneGate
            images={CONFIRMATION_IMAGES}
            className="state-enter mx-auto flex w-full items-center justify-center text-center"
          >
            <div className="relative aspect-[1637/961] w-full max-w-[900px]">
              <h1 className="sr-only">Your Throne Is Reserved</h1>
              <img
                 src={CONFIRMATION_FRAME}
                alt="Details recorded. Your Throne Is Reserved. Your details have been recorded. Welcome to the dynasty."
                className="pointer-events-none absolute inset-0 h-full w-full select-none object-contain [image-rendering:pixelated]"
              />
              <Link
                to="/"
                className="absolute left-[26%] top-[72%] flex aspect-[1400/248] w-[48%] items-center justify-center transition-[filter,transform] hover:brightness-110 active:translate-y-0.5"
              >
                <img
                   src={CONFIRMATION_BUTTON}
                  alt=""
                  className="absolute inset-0 h-full w-full object-contain [image-rendering:pixelated]"
                />
                <span className="relative z-10 px-[8%] font-display text-[clamp(8px,1.35vw,16px)] font-bold text-background">
                  RETURN TO THE KINGDOM
                </span>
              </Link>
            </div>
          </SceneGate>
        ) : (
          <section className="state-enter mx-auto flex w-full max-w-xl flex-col items-center justify-center">
            <div className="w-full max-w-[360px]">
              <header className="relative z-10 -mb-1 px-4 text-center">
                <h1 className="sr-only">ARCSultans Whitelist</h1>
                <img
                  src={WHITELIST_TAG}
                  alt="Whitelist"
                  className="mx-auto h-16 w-auto max-w-full object-contain [image-rendering:pixelated] sm:h-20"
                />
              </header>

              <div className="relative">
                <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
                  <img
                    src={PANEL_FRAME}
                    alt=""
                    className="absolute max-w-none [image-rendering:pixelated]"
                    style={{ width: "107%", height: "111.7%", left: "-3.45%", top: "-5.82%" }}
                  />
                </div>
                <div className="relative z-10 px-5 py-5 sm:px-6 sm:py-6">
                  <WhitelistForm onDone={() => setDone(true)} />
                </div>
              </div>
            </div>
          </section>
        )}
        </SceneGate>
      </div>

      <SiteFooter />
    </main>
  );
}
