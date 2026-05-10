import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const MaskText = ({
  originalContent,
  maskContent,
  maskSizeSmall = 20,
  maskSizeLarge = 100,
  maskBackground = "#DDFC3E",
  className = "",
}) => {
  const containerRef = useRef(null);
  const maskRef = useRef(null);
  const contentRef = useRef(null);

  useGSAP(
    () => {
      if (!containerRef.current || !maskRef.current || !contentRef.current)
        return;

      const container = containerRef.current;
      const mask = maskRef.current;
      const content = contentRef.current;

      const handleMouseMove = (e) => {
        const rect = container.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        gsap.to(mask, {
          "--mask-x": `${x}px`,
          "--mask-y": `${y}px`,
          duration: 0.6,
          ease: "back.out(1.7)",
        });
      };

      const handleMouseEnter = () => {
        gsap.to(mask, {
          "--mask-size": `${maskSizeLarge}px`,
          duration: 0.4,
          ease: "power2.out",
        });
      };

      const handleMouseLeave = () => {
        gsap.to(mask, {
          "--mask-size": `${maskSizeSmall}px`,
          duration: 0.3,
          ease: "power2.in",
        });
      };

      window.addEventListener("mousemove", handleMouseMove);
      content.addEventListener("mouseenter", handleMouseEnter);
      content.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        content.removeEventListener("mouseenter", handleMouseEnter);
        content.removeEventListener("mouseleave", handleMouseLeave);
      };
    },
    { dependencies: [maskSizeSmall, maskSizeLarge] },
  );

  return (
    <div ref={containerRef} className={`mask-container ${className}`}>
      <div ref={contentRef} className="mask-original-layer">
        {originalContent}
      </div>
      <div
        ref={maskRef}
        className="mask-overlay-layer"
        style={{
          background: maskBackground,
          maskImage: `radial-gradient(circle var(--mask-size, ${maskSizeSmall}px) at var(--mask-x, -50px) var(--mask-y, -50px), black 100%, transparent 100%)`,
          WebkitMaskImage: `radial-gradient(circle var(--mask-size, ${maskSizeSmall}px) at var(--mask-x, -50px) var(--mask-y, -50px), black 100%, transparent 100%)`,
        }}
      >
        {maskContent}
      </div>
    </div>
  );
};

export default MaskText;
