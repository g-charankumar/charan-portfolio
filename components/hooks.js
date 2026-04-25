"use client";
import { useEffect, useRef } from "react";
import { useLoading } from "./LoadingContext";

/**
 * Reveal-on-scroll. Attaches .in to the ref once it enters viewport.
 * Drop the returned ref on any element with .reveal or .reveal-stagger.
 */
export function useReveal() {
  const { isLoading } = useLoading();
  const ref = useRef(null);
  useEffect(() => {
    if (isLoading) return;
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [isLoading]);
  return ref;
}

/**
 * Desktop-only helper — mirrors the canHover check from the old script.
 * Returns true only on devices with fine pointer + hover + ≥900px.
 */
export function useCanHover() {
  const canHover = useRef(false);
  useEffect(() => {
    canHover.current =
      window.matchMedia("(hover: hover)").matches &&
      window.matchMedia("(pointer: fine)").matches &&
      window.matchMedia("(min-width: 900px)").matches;
  }, []);
  return canHover;
}
