import { Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState, type ReactNode } from "react";


export const CDN_ROOT = "https://cdn.jsdelivr.net/gh/0xDarkSeidBull/TheSaudisARC@main";

export const HOME_BACKGROUND = `${CDN_ROOT}/backgroundstory/homepage.png`;
export const TITLE_LOGO = `${CDN_ROOT}/backgroundstory/home%20fronttext.png`;
export const WHITELIST_TAG = `${CDN_ROOT}/whitelist_submit/whitelistag.png`;
export const PANEL_FRAME = `${CDN_ROOT}/whitelist_submit/whitelistframes.png`;
export const WHITELIST_BACKGROUND = `${CDN_ROOT}/backgroundstory/whitelistpage.png`;

// Static preview images (replaced the old looping MP4 previews).
export const CENTER_PREVIEW = `${CDN_ROOT}/4sides_and_centre/553.png`;
export const MAIN_FRAME = `${CDN_ROOT}/frames/mainframe.png`;
export const FOUR_FRAMES = `${CDN_ROOT}/frames/fourframes.png`;
export const BUTTON_IMAGE = `${CDN_ROOT}/buttons/button-4kd.png`;
export const FIELD_FRAME_IMAGE = `${CDN_ROOT}/whitelist_submit/buttonframe.png`;
export const FOLLOW_FRAME_IMAGE = `${CDN_ROOT}/whitelist_submit/followed.png`;
export const COMING_SOON_IMAGE = `${CDN_ROOT}/footer/comingsoon.png`;

export const SITE_CHROME_IMAGES = [
  `${CDN_ROOT}/footer/ARCSULTANSfootertext.png`,
  `${CDN_ROOT}/footer/palace.png`,
  `${CDN_ROOT}/footer/chronicles.png`,
  `${CDN_ROOT}/footer/journey.png`,
  `${CDN_ROOT}/footer/royalcounsel.png`,
  `${CDN_ROOT}/footer/royalscrolls.png`,
  `${CDN_ROOT}/footer/x-pixel-outline.svg`,
  `${CDN_ROOT}/footer/telegram-pixel.svg`,
  `${CDN_ROOT}/footer/opensea-pixel.svg`,
] as const;

export const SIDE_FRAMES = [
  `${CDN_ROOT}/4sides_and_centre/22.png`,
  `${CDN_ROOT}/4sides_and_centre/258.png`,
  `${CDN_ROOT}/4sides_and_centre/4.png`,
  `${CDN_ROOT}/4sides_and_centre/45.png`,
] as const;

// Labels shown under each corner preview, matching SIDE_FRAMES order
// (left-top, left-bottom, right-top, right-bottom).
export const CORNER_LABELS = [
  "Sultan #22",
  "Sultan #258",
  "Sultan #4",
  "Sultan #45",
] as const;

export const WHITELIST_BUTTON_BACKGROUND = {
  backgroundColor: "transparent",
  backgroundImage: `url(${CDN_ROOT}/buttons/button-4kd.png)`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "100% 100%",
  imageRendering: "pixelated",
} as const;

// Module-level caches survive route unmounts and prevent duplicate network waits.
const loadedImageUrls = new Set<string>();
const settledAssetUrls = new Set<string>();
const imageLoadPromises = new Map<string, Promise<void>>();

function preloadImage(url: string) {
  if (settledAssetUrls.has(url)) return Promise.resolve();

  const existing = imageLoadPromises.get(url);
  if (existing) return existing;

  const promise = new Promise<void>((resolve) => {
    const img = new window.Image();
    let settled = false;
    const timeout = window.setTimeout(() => finish(false), 8000);
    const finish = (loaded: boolean) => {
      if (settled) return;
      settled = true;
      window.clearTimeout(timeout);
      settledAssetUrls.add(url);
      if (loaded) loadedImageUrls.add(url);
      imageLoadPromises.delete(url);
      resolve();
    };

    img.onload = () => {
      if (typeof img.decode === "function") {
        void img.decode().catch(() => undefined).finally(() => finish(true));
      } else {
        finish(true);
      }
    };
    img.onerror = () => finish(false);
    img.src = url;

    if (img.complete && img.naturalWidth > 0) finish(true);
  });

  imageLoadPromises.set(url, promise);
  return promise;
}

/** Preloads a scene once and ignores completion after its caller unmounts. */
export function useImagesReady(urls: readonly string[]) {
  const uniqueUrls = useMemo(() => [...new Set(urls)], [urls]);
  const key = uniqueUrls.join("|");
  const [ready, setReady] = useState(() => uniqueUrls.every((url) => settledAssetUrls.has(url)));

  useEffect(() => {
    let cancelled = false;
    const pendingUrls = uniqueUrls.filter((url) => !settledAssetUrls.has(url));

    if (pendingUrls.length === 0) {
      setReady(true);
      return () => {
        cancelled = true;
      };
    }

    setReady(false);
    void Promise.all(pendingUrls.map(preloadImage)).then(() => {
      if (!cancelled) setReady(true);
    });

    return () => {
      cancelled = true;
    };
  }, [key, uniqueUrls]);

  return ready;
}

/** Holds a scene hidden until every image in `images` has loaded. */
export function SceneGate({
  images,
  children,
  className = "",
}: {
  images: readonly string[];
  children: ReactNode;
  className?: string;
}) {
  const ready = useImagesReady(images);
  return (
    <div
      data-scene-ready={ready ? "true" : "false"}
      aria-busy={!ready}
      className={`${className} ${
        ready ? "opacity-100" : "opacity-0"
      }`}
    >
      {children}
    </div>
  );
}

export function PageBackground({ variant }: { variant: "home" | "whitelist" }) {
  const isHome = variant === "home";
  return (
    <div aria-hidden className="fixed inset-0 z-0 overflow-hidden">
      <img
        src={HOME_BACKGROUND}
        alt=""
        className={`absolute inset-0 h-full w-full object-cover object-center [image-rendering:pixelated] ${
          isHome ? "opacity-100" : "opacity-0"
        }`}
      />
      <img
        src={WHITELIST_BACKGROUND}
        alt=""
        className={`absolute inset-0 h-full w-full object-cover object-center [image-rendering:pixelated] ${
          isHome ? "opacity-0" : "opacity-100"
        }`}
      />
      <div className={`absolute inset-0 bg-background ${isHome ? "opacity-10" : "opacity-45"}`} />
    </div>
  );
}

export function LoopingVideo({
  src,
  className,
  label,
}: {
  src: string;
  className: string;
  label?: string;
}) {
  return (
    <video
      src={src}
      autoPlay
      loop
      muted
      playsInline
      preload="metadata"
      onLoadedData={() => {
        loadedImageUrls.add(src);
        settledAssetUrls.add(src);
      }}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      className={className}
    />
  );
}

export function SideGifPreview({ gif, slot }: { gif: string; slot: number }) {
  return (
    <div className="relative h-24 w-24 overflow-hidden">
      <LoopingVideo
        src={gif}
        label={`Animated ARCSultans NFT preview ${slot + 1}`}
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
