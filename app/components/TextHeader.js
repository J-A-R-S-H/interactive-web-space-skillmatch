"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";

const TextHeader = ({ delay = 0, children, variant = "hero" }) => {
  const elRef = useRef(null);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;

    const split = SplitText.create(el, {
      type: "words",
      mask: "words",
    });

    gsap.set(el, { opacity: 1 });
    gsap.set(split.words, { yPercent: 110, opacity: 0 });

    gsap.to(split.words, {
      yPercent: 0,
      opacity: 1,
      duration: variant === "logo" ? 0.75 : 0.95,
      ease: "power3.out",
      stagger: variant === "logo" ? 0.05 : 0.075,
      delay,
    });

    return () => {
      gsap.killTweensOf(split.words);
      gsap.killTweensOf(el);
      split.revert();
    };
  }, [delay, variant, children]);

  // Common styles for both variants
  const commonTextStyle = {
    fontWeight: "400",
    color: "#ffffff",
    letterSpacing: "-0.025em",
    textShadow: "0 2px 24px rgba(0, 0, 0, 0.45)",
    opacity: 0,
    margin: 0,
    overflow: "hidden", // Necessary for the SplitText mask effect
  };

  if (variant === "logo") {
    return (
      <div
        style={{
          pointerEvents: "none",
          position: "absolute",
          top: "20px",
          left: "20px",
          zIndex: 20,
        }}
      >
        <p
          ref={elRef}
          style={{
            ...commonTextStyle,
            textAlign: "right",
            fontSize: "1.25rem",
            lineHeight: "1",
          }}
        >
          {children}
        </p>
      </div>
    );
  }

  return (
    <div
      style={{
        pointerEvents: "none",
        position: "absolute",
        left: 0,
        right: 0,
        bottom: "40px",
        zIndex: 20,
      }}
    >
      <h1
        ref={elRef}
        style={{
          ...commonTextStyle,
          fontSize: "clamp(2.25rem, 7vw, 4.75rem)",
          lineHeight: "1.05",
          textAlign: "left",
        }}
      >
        {children}
      </h1>
    </div>
  );
};

export default TextHeader;
