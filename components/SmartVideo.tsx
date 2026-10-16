"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { cn } from "@/utils/cn";

type Mode =
  // Hero: poster paints first, the video starts once the page has finished loading
  | "eager"
  // Starts downloading just before it scrolls into view, plays only while visible
  | "in-view"
  // Downloads and plays only while `active` is true (hover previews)
  | "on-demand";

interface SmartVideoProps {
  // Path without extension; `<src>.webm` (VP9) and `<src>.mp4` (H.264, for older Safari) must both exist
  src: string;
  // Sharper rendition (same naming rules), used only when it would be visible and the connection is fast
  hdSrc?: string;
  // Rendered width in device pixels above which `hdSrc` is worth downloading
  hdAbove?: number;
  poster: string;
  mode?: Mode;
  active?: boolean;
  className?: string;
  // Applied to both the poster and the video so they line up exactly
  mediaClassName?: string;
  alt?: string;
}

// Visitors who asked for less motion or less data get the poster only
const prefersStill = () => {
  if (typeof window === "undefined") return false;
  const saveData = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData;
  return Boolean(saveData) || window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};

type Connection = { saveData?: boolean; effectiveType?: string; downlink?: number };

// Phones, small cards and slow or metered connections keep the lighter file
const canUseHd = (el: HTMLElement | null, minDevicePx: number) => {
  if (!el) return false;
  const conn = (navigator as Navigator & { connection?: Connection }).connection;
  if (conn?.saveData) return false;
  if (conn?.effectiveType && conn.effectiveType !== "4g") return false;
  if (conn?.downlink && conn.downlink < 5) return false;
  if (window.innerWidth < 768) return false;
  return el.clientWidth * window.devicePixelRatio > minDevicePx;
};

const SmartVideo = ({
  src,
  hdSrc,
  hdAbove = 640,
  poster,
  mode = "in-view",
  active = false,
  className,
  mediaClassName,
  alt = "",
}: SmartVideoProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [load, setLoad] = useState(false);
  const [visible, setVisible] = useState(false);
  const [playing, setPlaying] = useState(false);
  // Decided once, when loading starts, so the browser never fetches both renditions
  const source = useMemo(
    () => (load && hdSrc && canUseHd(wrapperRef.current, hdAbove) ? hdSrc : src),
    [load, hdSrc, hdAbove, src]
  );

  // Reset when the source changes (e.g. a different featured application)
  useEffect(() => {
    setPlaying(false);
    if (mode === "on-demand") setLoad(false);
  }, [src, mode]);

  useEffect(() => {
    if (mode === "on-demand" || prefersStill()) return;

    if (mode === "eager") {
      const start = () => setLoad(true);
      if (document.readyState === "complete") start();
      else window.addEventListener("load", start, { once: true });
      return () => window.removeEventListener("load", start);
    }

    const el = wrapperRef.current;
    if (!el) return;
    // Begin fetching a screen ahead so the clip is ready by the time it is seen
    const nearObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoad(true);
          nearObserver.disconnect();
        }
      },
      { rootMargin: "100% 0px" }
    );
    const visibleObserver = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), {
      threshold: 0.25,
    });
    nearObserver.observe(el);
    visibleObserver.observe(el);
    return () => {
      nearObserver.disconnect();
      visibleObserver.disconnect();
    };
  }, [mode]);

  useEffect(() => {
    if (mode === "on-demand" && active) setLoad(true);
  }, [mode, active]);

  // Play/pause from the current state
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !load) return;
    const shouldPlay = mode === "eager" ? true : mode === "in-view" ? visible : active;
    if (shouldPlay) video.play().catch(() => {});
    else {
      video.pause();
      if (mode === "on-demand") video.currentTime = 0;
    }
  }, [load, visible, active, mode, source]);

  return (
    <div ref={wrapperRef} className={cn("relative overflow-hidden", className)}>
      {/* eslint-disable-next-line @next/next/no-img-element -- posters are pre-sized WebP files */}
      <img
        src={poster}
        alt={alt}
        loading={mode === "eager" ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={mode === "eager" ? "high" : "auto"}
        className={cn("absolute inset-0 h-full w-full object-cover", mediaClassName)}
      />
      {load && (
        <video
          key={source}
          ref={videoRef}
          muted
          loop
          playsInline
          // Upcoming clips only fetch their first bytes; the full download starts when one actually plays,
          // so clips further down the page don't compete for bandwidth with the one on screen
          preload={mode === "eager" ? "auto" : "metadata"}
          aria-hidden
          onPlaying={() => setPlaying(true)}
          className={cn(
            "absolute inset-0 h-full w-full object-cover transition-opacity duration-500",
            playing ? "opacity-100" : "opacity-0",
            mediaClassName
          )}
        >
          <source src={`${source}.webm`} type="video/webm" />
          <source src={`${source}.mp4`} type="video/mp4" />
        </video>
      )}
    </div>
  );
};

export default SmartVideo;
