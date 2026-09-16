import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { useState } from "react";

import { SiteFooter, TopStatus } from "@/components/SiteChrome";
import { WhitelistForm } from "@/components/WhitelistForm";
import {
  CornerGifs,
  PANEL_FRAME,
  PageBackground,
  WHITELIST_TAG,
} from "@/components/sultan-shared";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/whitelist")({
  head: () => ({
    meta: [
      { title: "Whitelist — ARCSultans" },
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

      <CornerGifs />

      {/* Content — fills the available viewport above the footer */}
      <div className="relative z-10 flex min-h-0 flex-1 flex-col items-center justify-center px-4 py-3">
        {done ? (
          <section className="state-enter mx-auto flex w-full max-w-2xl items-center justify-center text-center">
            <div className="success-panel relative w-full border-4 border-accent bg-popover/95 px-5 py-8 pixel-shadow sm:px-10 sm:py-10">
              <span aria-hidden className="absolute left-3 top-3 h-3 w-3 border-l-2 border-t-2 border-accent" />
              <span aria-hidden className="absolute right-3 top-3 h-3 w-3 border-r-2 border-t-2 border-accent" />
              <span aria-hidden className="absolute bottom-3 left-3 h-3 w-3 border-b-2 border-l-2 border-accent" />
              <span aria-hidden className="absolute bottom-3 right-3 h-3 w-3 border-b-2 border-r-2 border-accent" />
              <div className="mx-auto mb-5 w-fit border-2 border-accent bg-accent/10 px-3 py-2 font-display text-[9px] font-bold text-accent sm:text-[10px]">
                ✓ DETAILS RECORDED
              </div>
              <h1 className="success-title font-display text-3xl font-extrabold text-accent sm:text-5xl">
                Your Throne Is Reserved.
              </h1>
              <p className="mx-auto mt-5 max-w-lg font-display text-[11px] leading-6 text-foreground sm:text-sm">
                Your details have been recorded. Welcome to the dynasty.
              </p>
              <div aria-hidden className="mx-auto my-6 flex items-center justify-center gap-3 text-accent">
                <span className="h-px w-12 bg-accent/60" />
                <span className="font-display text-xs">◆</span>
                <span className="h-px w-12 bg-accent/60" />
              </div>
              <Link
                to="/"
                className="inline-flex h-14 w-full max-w-sm items-center justify-center border-0 border-b-8 border-secondary bg-primary px-4 font-display text-[11px] font-bold text-primary-foreground shadow-none transition-colors hover:bg-primary/90 active:translate-y-2 active:border-b-0 sm:text-sm"
              >
                RETURN TO THE KINGDOM
              </Link>
            </div>
          </section>
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
      </div>

      <SiteFooter />
    </main>
  );
}
