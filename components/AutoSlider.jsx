"use client";
import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

/**
 * AutoSlider
 * A premium auto-sliding image gallery for project showcases.
 */
export default function AutoSlider({ images, interval = 4000 }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);
  const slidesRef = useRef([]);

  useEffect(() => {
    if (!images || images.length <= 1) return;

    const timer = setInterval(() => {
      const nextIndex = (currentIndex + 1) % images.length;
      
      const currentSlide = slidesRef.current[currentIndex];
      const nextSlide = slidesRef.current[nextIndex];

      if (currentSlide && nextSlide) {
        // Premium crossfade animation
        gsap.to(currentSlide, {
          opacity: 0,
          scale: 1.05,
          duration: 1.5,
          ease: "power2.inOut",
        });

        gsap.fromTo(
          nextSlide,
          { opacity: 0, scale: 0.95 },
          {
            opacity: 1,
            scale: 1,
            duration: 1.5,
            ease: "power2.inOut",
          }
        );
      }

      setCurrentIndex(nextIndex);
    }, interval);

    return () => clearInterval(timer);
  }, [currentIndex, images, interval]);

  if (!images || images.length === 0) return null;

  return (
    <div className="auto-slider" ref={containerRef}>
      <div className="auto-slider-viewport">
        {images.map((src, index) => (
          <div
            key={src}
            ref={(el) => (slidesRef.current[index] = el)}
            className="auto-slider-slide"
            style={{
              opacity: index === currentIndex ? 1 : 0,
              zIndex: index === currentIndex ? 2 : 1,
            }}
          >
            <img src={src} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>

      {/* Decorative Frame */}
      <div className="auto-slider-frame">
        <div className="tl"></div>
        <div className="tr"></div>
        <div className="bl"></div>
        <div className="br"></div>
      </div>

      {/* Indicators */}
      <div className="auto-slider-indicators">
        {images.map((_, index) => (
          <span
            key={index}
            className={`indicator ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}
