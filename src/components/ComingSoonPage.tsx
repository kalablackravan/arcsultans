import { Link } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";

const CDN_ROOT = "https://cdn.jsdelivr.net/gh/0xDarkSeidBull/TheSaudisARC@main";
const BACKGROUND = `${CDN_ROOT}/backgroundstory/homepage.png`;
const COMING_SOON = `${CDN_ROOT}/footer/comingsoon.png`;

type ComingSoonPageProps = {
  title: string;
  artwork: string;
};

export function ComingSoonPage({ title, artwork }: ComingSoonPageProps) {
  return (
    <main className="relative flex min-h-dvh overflow-hidden bg-background font-display">
      <img
        src={BACKGROUND}
        alt=""
        aria-hidden="true"
        className="fixed inset-0 h-full w-full object-cover object-center [image-rendering:pixelated]"
      />
      <div aria-hidden="true" className="fixed inset-0 bg-background/55" />

      <div className="relative z-10 flex min-h-dvh w-full flex-col px-5 py-5 sm:px-8 sm:py-7 lg:px-12 lg:py-9">
        <header className="flex items-start justify-between gap-5">
          <h1 className="sr-only">{title}</h1>
          <img
            src={artwork}
            alt={title}
            className="h-auto w-[min(58vw,380px)] object-contain object-left [image-rendering:pixelated]"
          />
          <Button
            asChild
            variant="outline"
            className="h-9 shrink-0 border-footer-border bg-footer-surface px-3 text-[9px] font-bold uppercase text-footer-title hover:bg-footer-icon sm:h-10 sm:px-4 sm:text-[10px]"
          >
            <Link to="/">Palace</Link>
          </Button>
        </header>

        <section className="state-enter flex flex-1 items-center justify-center px-4 pb-16 pt-8 text-center">
          <img
            src={COMING_SOON}
            alt="Coming soon"
            className="h-auto w-[min(64vw,330px)] object-contain [image-rendering:pixelated]"
          />
        </section>
      </div>
    </main>
  );
}