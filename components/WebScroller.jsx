"use client";
import React, { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

/**
 * WebScroller
 * A component that simulates a browser window and scrolls a long image on hover.
 */
export default function WebScroller({ image, url, alt = "Website Preview" }) {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useGSAP(
    () => {
      if (!imageRef.current || !isLoaded) return;

      const container = containerRef.current;
      const img = imageRef.current;

      const handleMouseEnter = () => {
        const scrollAmount = img.offsetHeight - container.offsetHeight;
        if (scrollAmount > 0) {
          gsap.to(img, {
            y: -scrollAmount,
            duration: Math.max(3, scrollAmount / 250),
            ease: "power2.inOut",
            delay: 0.5,
          });
        }
      };

      const handleMouseLeave = () => {
        gsap.to(img, {
          y: 0,
          duration: 1.5,
          ease: "power2.out",
        });
      };

      // For Mobile: Auto-scroll on tap or just scroll slowly
      const handleTouchStart = () => {
        const scrollAmount = img.offsetHeight - container.offsetHeight;
        if (scrollAmount > 0) {
          gsap.to(img, {
            y: -scrollAmount,
            duration: Math.max(5, scrollAmount / 150),
            ease: "none",
          });
        }
      };

      container.addEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mouseleave", handleMouseLeave);
      container.addEventListener("touchstart", handleTouchStart);

      return () => {
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
        container.removeEventListener("touchstart", handleTouchStart);
      };
    },
    { dependencies: [isLoaded], scope: containerRef }
  );

  return (
    <div className="web-scroller-window">
      {/* Browser Bar */}
      <div className="web-scroller-bar">
        <div className="dots">
          <span className="dot dot-red" />
          <span className="dot dot-yellow" />
          <span className="dot dot-green" />
        </div>
        <div className="url-bar">{url || "https://your-website.com"}</div>
      </div>
      
      {/* Scrollable Area */}
      <div ref={containerRef} className="web-scroller-viewport">
        {!isLoaded && image && (
          <div className="web-scroller-loader">
            <div className="spinner" />
            <span className="mono">LOADING_ASSETS...</span>
          </div>
        )}
        
        {image ? (
          <img
            ref={imageRef}
            src={image}
            alt={alt}
            className={`web-scroller-image ${isLoaded ? "is-visible" : "is-hidden"}`}
            onLoad={() => setIsLoaded(true)}
          />
        ) : (
          <div className="web-scroller-placeholder">
            <div className="scanline" />
            <div className="content">
              <span className="mono">NO_PREVIEW_IMG</span>
              <span className="eyebrow">Awaiting Deployment</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
