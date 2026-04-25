"use client";

import { useRef, useEffect } from "react";

/**
 * Enhanced Marquee with Scroll Velocity.
 * Reacts to scroll speed by speeding up and adding a subtle skew.
 */
const ITEMS = [
  { text: "Brand Identity", outlined: false, dot: true },
  { text: "Web Development", outlined: true, dot: true },
  { text: "UI / UX Design", outlined: false, dot: true },
  { text: "CRM Systems", outlined: true, dot: true },
  { text: "Creative Direction", outlined: false, dot: true },
  { text: "Graphic Design", outlined: true, dot: true },
];

export default function Marquee() {
  const trackRef = useRef(null);
  const x = useRef(0);
  const velocity = useRef(0);
  const lastScrollY = useRef(0);
  const speed = 1.5; // Base speed in pixels per frame

  useEffect(() => {
    // Initialize scroll position
    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY.current;
      velocity.current += delta * 0.1;
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    let rafId;
    let isVisible = true;

    const animate = () => {
      if (!isVisible) {
        rafId = requestAnimationFrame(animate);
        return;
      }

      x.current -= speed + velocity.current * 0.4;
      velocity.current *= 0.94;

      if (trackRef.current) {
        const track = trackRef.current;
        const halfWidth = track.scrollWidth / 2;

        if (x.current <= -halfWidth) {
          x.current += halfWidth;
        } else if (x.current > 0) {
          x.current -= halfWidth;
        }

        const skew = velocity.current * 0.08;
        track.style.transform = `translate3d(${x.current}px, 0, 0) skewX(${skew}deg)`;
      }

      rafId = requestAnimationFrame(animate);
    };

    // Intersection Observer to pause animation when off-screen
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0 }
    );

    if (trackRef.current) {
      observer.observe(trackRef.current.parentElement);
    }

    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(rafId);
      observer.disconnect();
    };
  }, []);

  // Duplicate items to ensure we have enough for a seamless loop
  const doubled = [...ITEMS, ...ITEMS];

  return (
    <div className="marquee" aria-hidden="true">
      <div
        ref={trackRef}
        className="marquee-track d-inline-flex"
        style={{ animation: "none" }} // Disable the CSS animation
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className={`marquee-item d-inline-flex align-items-center${
              item.outlined ? " outlined" : ""
            }`}
          >
            {item.text}
            {item.dot && <span className="dot" />}
          </span>
        ))}
      </div>
    </div>
  );
}
