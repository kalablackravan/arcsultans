import { Link } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";


const CDN_ROOT = "https://cdn.jsdelivr.net/gh/0xDarkSeidBull/TheSaudisARC@main";

export const HOME_BACKGROUND = `${CDN_ROOT}/backgroundstory/homepage.png`;
export const TITLE_LOGO = `${CDN_ROOT}/backgroundstory/home%20fronttext.png`;
export const WHITELIST_TAG = `${CDN_ROOT}/whitelist_submit/whitelistag.png`;
export const PANEL_FRAME = `${CDN_ROOT}/whitelist_submit/whitelistframes.png`;
export const WHITELIST_BACKGROUND = `${CDN_ROOT}/backgroundstory/whitelistpage.png`;

export const CENTER_PREVIEW = `${CDN_ROOT}/layers/arcsultans_mixed_100.gif`;
export const MAIN_FRAME = `${CDN_ROOT}/frames/mainframe.png`;
export const FOUR_FRAMES = `${CDN_ROOT}/frames/fourframes.png`;

export const SIDE_FRAMES = [
  `${CDN_ROOT}/layers/arcsultans_arc_backgound_100.gif`,
  `${CDN_ROOT}/layers/arcsultans_magma_burst_100.gif`,
  `${CDN_ROOT}/layers/arcsultans_solid_sky_blue_100.gif`,
  `${CDN_ROOT}/layers/arcsultans_solid_slate_gray_100.gif`,
] as const;

export const WHITELIST_BUTTON_BACKGROUND = {
  backgroundColor: "transparent",
  backgroundImage: `url(${CDN_ROOT}/buttons/button-4kd.png)`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "100% 100%",
  imageRendering: "pixelated",
} as const;

export function PageBackground({ variant }: { variant: "home" | "whitelist" }) {
  const isHome = variant === "home";
  return (
    <div aria-hidden className="fixed inset-0 z-0 overflow-hidden">
      <img
        src={HOME_BACKGROUND}
        alt=""
        className={`absolute inset-0 h-full w-full object-cover object-center [image-rendering:pixelated] transition-opacity duration-700 ease-in-out ${
          isHome ? "opacity-100" : "opacity-0"
        }`}
      />
      <img
        src={WHITELIST_BACKGROUND}
        alt=""
        className={`absolute inset-0 h-full w-full object-cover object-center [image-rendering:pixelated] transition-opacity duration-700 ease-in-out ${
          isHome ? "opacity-0" : "opacity-100"
        }`}
      />
      <div className={`absolute inset-0 bg-background ${isHome ? "opacity-10" : "opacity-45"}`} />
    </div>
  );
}

export function SideGifPreview({ gif, slot }: { gif: string; slot: number }) {
  return (
    <div className="relative h-24 w-24 overflow-hidden">
      <img
        src={gif}
        alt={`Animated ARCSultans NFT preview ${slot + 1}`}
        className="absolute inset-0 h-full w-full object-cover [image-rendering:pixelated]"
      />
      <img
        src={FOUR_FRAMES}
        alt=""
        className="absolute left-1/2 top-1/2 h-[150%] w-[150%] max-w-none -translate-x-1/2 -translate-y-1/2 object-contain [image-rendering:pixelated]"
      />
    </div>
  );
}

export function CornerGifs() {
  return (
    <>
      <div className="fixed left-40 top-20 z-10 hidden h-24 w-24 lg:block">
        <SideGifPreview gif={SIDE_FRAMES[0]} slot={0} />
      </div>
      <div className="fixed bottom-32 left-40 z-10 hidden h-24 w-24 lg:block">
        <SideGifPreview gif={SIDE_FRAMES[1]} slot={1} />
      </div>
      <div className="fixed right-40 top-20 z-10 hidden h-24 w-24 lg:block">
        <SideGifPreview gif={SIDE_FRAMES[2]} slot={2} />
      </div>
      <div className="fixed bottom-32 right-40 z-10 hidden h-24 w-24 lg:block">
        <SideGifPreview gif={SIDE_FRAMES[3]} slot={3} />
      </div>
    </>
  );
}

export function PixelButtonLink({
  to,
  children,
  className = "",
}: {
  to: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      to={to}
      style={WHITELIST_BUTTON_BACKGROUND}
      className={`inline-flex items-center justify-center border-0 bg-primary px-2 text-center font-display font-bold text-footer-title shadow-none transition-colors hover:bg-primary/90 focus-visible:outline-none ${className}`}
    >
      {children}
    </Link>
  );
}
