import { SiteFooter, TopStatus } from "@/components/SiteChrome";
import {
  COMING_SOON_IMAGE,
  HOME_BACKGROUND,
} from "@/components/sultan-shared";

type ComingSoonPageProps = {
  title: string;
};

export function ComingSoonPage({ title }: ComingSoonPageProps) {
  return (
    <main className="relative flex min-h-dvh flex-col overflow-hidden bg-background font-display">
      <img
        src={HOME_BACKGROUND}
        alt=""
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 h-full w-full select-none object-cover object-center [image-rendering:pixelated]"
      />
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 bg-background/55" />

      <TopStatus />

      <div className="relative z-10 flex min-h-0 flex-1 flex-col px-5 sm:px-8 lg:px-12">
        <section className="state-enter flex flex-1 items-center justify-center px-4 pb-12 text-center sm:pb-16">
          <h1 className="sr-only">{title}</h1>
          <img
            src={COMING_SOON_IMAGE}
            alt="Coming soon"
            className="h-auto w-[min(64vw,330px)] object-contain [image-rendering:pixelated]"
          />
        </section>
      </div>
      <SiteFooter />
    </main>
  );
}