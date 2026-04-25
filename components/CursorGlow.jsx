"use client";
import { useEffect, useRef } from "react";
import { useCanHover } from "./hooks";

export default function CursorGlow() {
  const glowRef = useRef(null);
  const canHover = useCanHover();

  useEffect(() => {
    if (!canHover.current || !glowRef.current) return;
    const glow = glowRef.current;

    let tx = 0, ty = 0, cx = 0, cy = 0;
    let rafId = 0;

    const onMove = (e) => {
      tx = e.clientX;
      ty = e.clientY;
    };
    const loop = () => {
      cx += (tx - cx) * 0.12;
      cy += (ty - cy) * 0.12;
      glow.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -50%)`;
      rafId = requestAnimationFrame(loop);
    };
    window.addEventListener("mousemove", onMove);
    loop();
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId);
    };
  }, [canHover]);

  return <div ref={glowRef} className="cursor-glow" aria-hidden="true" />;
}
