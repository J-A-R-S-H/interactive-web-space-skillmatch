"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export const IMAGES = [
  "https://images.unsplash.com/photo-1518770660439-4636190af475",
  "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
  "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
  "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
  "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

export const INTRO_END_DELAY_SEC = 0.35 + (IMAGES.length - 1) * 0.25 + 1 + 1;

const Intro = () => {
  const refs = useRef([]);
  const containerRef = useRef(null);
  const radialRef = useRef(null);

  useEffect(() => {
    const imgs = refs.current.filter(Boolean);
    if (!imgs.length) return;

    const timeline = gsap.timeline();

    timeline.to(imgs, {
      clipPath: "inset(0% 0% 0% 0%)",
      duration: 1,
      delay: 0.35,
      stagger: { each: 0.25, ease: "power1.out" },
    });

    // 2. Expand container to full screen
    timeline.to(containerRef.current, {
      width: "100%",
      height: "100vh",
      aspectRatio: "unset",
      margin: 0,
      duration: 2,
      ease: "power3.inOut",
    });

    // 3. Fade in the radial gradient overlay
    timeline.to(
      radialRef.current,
      {
        opacity: 1,
        duration: 0.85,
        ease: "power2.out",
      },
      ">",
      containerRef.current,
      {},
    );

    return () => {
      timeline.kill();
    };
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        ref={containerRef}
        style={{
          position: "relative",
          aspectRatio: "16/9",
          width: "50%",
          overflow: "hidden",
        }}
      >
        {IMAGES.map((src, i) => (
          <img
            key={src}
            ref={(el) => {
              refs.current[i] = el;
            }}
            src={src}
            alt=""
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              zIndex: i,
              clipPath: "inset(0% 0% 100% 0%)", // Initially hidden from bottom
            }}
          />
        ))}

        {/* Radial Gradient Overlay */}
        <div
          ref={radialRef}
          style={{
            pointerEvents: "none",
            position: "absolute",
            inset: 0,
            zIndex: 10,
            opacity: 0,
            background:
              "radial-gradient(ellipse 100% 88% at 50% 42%, transparent 22%, rgba(0,0,0,0.6) 58%, rgba(0,0,0,0.82) 100%)",
          }}
          aria-hidden="true"
        />
      </div>
    </div>
  );
};

export default Intro;
