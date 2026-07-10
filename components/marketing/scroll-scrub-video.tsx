"use client";

import { useEffect, useRef, useState } from "react";

export function ScrollScrubVideo({
  src,
  poster,
  className = "",
  speed = 0.1,
  type = "video/mp4",
}: {
  src: string;
  poster?: string;
  className?: string;
  speed?: number;
  type?: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    const section = video?.closest("[data-hero-overlay]");
    if (!video || !section) return;

    let frame = 0;

    const syncToScroll = () => {
      if (!video.duration || Number.isNaN(video.duration)) return;

      const rect = section.getBoundingClientRect();
      const sectionTop = window.scrollY + rect.top;
      const scrollRange = Math.max(rect.height - window.innerHeight, 1);
      const progress = Math.min(Math.max(((window.scrollY - sectionTop) / scrollRange) * speed, 0), 1);
      const targetTime = progress * video.duration;

      if (Math.abs(video.currentTime - targetTime) > 0.03) {
        video.currentTime = targetTime;
      }
    };

    const requestSync = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(syncToScroll);
    };

    const onLoadedMetadata = () => {
      setReady(true);
      video.pause();
      syncToScroll();
    };

    video.addEventListener("loadedmetadata", onLoadedMetadata);
    window.addEventListener("scroll", requestSync, { passive: true });
    window.addEventListener("resize", requestSync);
    if (video.readyState >= 1) onLoadedMetadata();
    requestSync();

    return () => {
      cancelAnimationFrame(frame);
      video.removeEventListener("loadedmetadata", onLoadedMetadata);
      window.removeEventListener("scroll", requestSync);
      window.removeEventListener("resize", requestSync);
    };
  }, [speed]);

  return (
    <video
      ref={videoRef}
      className={`${className} transition-opacity duration-500 ${ready ? "opacity-100" : "opacity-0"}`}
      muted
      playsInline
      preload="auto"
      poster={poster}
      aria-hidden="true"
    >
      <source src={src} type={type} />
    </video>
  );
}
