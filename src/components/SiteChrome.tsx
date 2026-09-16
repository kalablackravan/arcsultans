import { Link } from "@tanstack/react-router";

const CDN_ROOT = "https://cdn.jsdelivr.net/gh/0xDarkSeidBull/TheSaudisARC@main";
const FOOTER_LOGO = `${CDN_ROOT}/footer/ARCSULTANSfootertext.png`;

export function TopStatus() {
  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-30 flex items-start justify-between px-4 py-3 sm:px-6 sm:py-4">
      <div className="pl-2.5 sm:pl-3">
        <p className="font-display text-[9px] font-bold uppercase leading-4 text-footer-title sm:text-[10px]">✦ ARC MAINNET</p>
        <p className="mt-0.5 pl-9 font-display text-[8px] uppercase leading-[1.4] text-footer-copy/70 sm:pl-10 sm:text-[9px]">
          DESERTS<br />DYNASTY<br />ONCHAIN
        </p>
      </div>
      <p className="text-right font-display text-[8px] uppercase leading-4 text-footer-copy sm:text-[9px]">
        999 SULTANS&nbsp;&nbsp;//&nbsp;&nbsp;ONE THRONE
      </p>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="relative z-20 w-full shrink-0 border-t-2 border-footer-border bg-footer-surface font-display text-footer-copy">
      <div className="mx-auto grid w-full max-w-[1536px] gap-x-8 gap-y-5 px-5 py-5 sm:px-8 lg:grid-cols-[minmax(190px,1fr)_minmax(360px,2fr)_auto] lg:items-center lg:px-10 lg:py-4">
        <div className="min-w-0">
          <img src={FOOTER_LOGO} alt="ARCSultans" className="h-7 w-auto max-w-full object-contain [image-rendering:pixelated] sm:h-8" />
          <p className="mt-2 text-[9px] leading-4 text-footer-copy sm:text-[10px]">Mint Coming Soon · ARC MAINNET</p>
        </div>

        <div className="min-w-0 lg:px-5">
          <nav aria-label="Footer navigation" className="flex min-w-0 flex-wrap items-center justify-center gap-x-3 gap-y-2 text-[9px] text-footer-copy sm:gap-x-4">
            {[
              { label: "Palace", to: "/" as const, search: { view: "home" }, image: `${CDN_ROOT}/footer/palace.png` },
              { label: "Chronicles", to: "/chronicles" as const },
              { label: "Journey", to: "/journey" as const },
              { label: "Royal Counsel", to: "/royal-counsel" as const },
              { label: "Royal Scrolls", to: "/royal-scrolls" as const },
            ].map((item, index) => (
              <span key={item.label} className="contents">
                {index > 0 && <span aria-hidden className="text-footer-divider">|</span>}
                <Link
                  to={item.to}
                  {...("search" in item ? { search: item.search } : {})}
                  className="inline-flex items-center transition-colors hover:text-footer-title focus-visible:text-footer-title focus-visible:outline-none"
                  activeProps={{ className: "text-footer-title" }}
                  activeOptions={{ exact: true }}
                >
                  {"image" in item && item.image ? (
                    <img
                      src={item.image}
                      alt={item.label}
                      className="h-3.5 w-auto object-contain [image-rendering:pixelated] sm:h-4"
                    />
                  ) : (
                    item.label
                  )}
                </Link>
              </span>
            ))}

          </nav>
        </div>

        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-5 border-t border-footer-divider pt-4 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
          <div className="flex items-center gap-2.5">
            {[
              { href: "https://x.com/arcsultans", label: "X (Twitter)", icon: `${CDN_ROOT}/footer/x-pixel-outline.svg` },
              { href: "https://t.me/arcsultans", label: "Telegram", icon: `${CDN_ROOT}/footer/telegram-pixel.svg` },
              { href: "https://opensea.io/", label: "OpenSea", icon: `${CDN_ROOT}/footer/opensea-pixel.svg` },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className="flex h-10 w-10 shrink-0 items-center justify-center border border-footer-icon-border bg-footer-icon transition-colors duration-150 hover:border-footer-title focus-visible:border-footer-title focus-visible:outline-none sm:h-11 sm:w-11"
              >
                <img src={item.icon} alt="" className="h-5 w-5 object-contain [image-rendering:pixelated] sm:h-6 sm:w-6" />
              </a>
            ))}
          </div>

          <p className="border-l border-footer-divider pl-4 text-[8px] uppercase leading-[1.55] text-muted-foreground">
            999 SULTANS<br />ONE DYNASTY<br />FOREVER ONCHAIN
          </p>
        </div>
      </div>
    </footer>
  );
}