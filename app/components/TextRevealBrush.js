import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const config = {
  smoothing: 0.15,
  baseRadius: 40,
  dissolveStart: 1,
  dissolveTime: 1.5,
  dissolveEase: "power3.in",
};

const TextRevealBrush = () => {
  const svgRef = useRef(null);
  const gRef = useRef(null);

  const pointer = useRef({ x: 0, y: 0 });
  const smoothPointer = useRef({ x: 0, y: 0 });
  const hasStarted = useRef(false);

  useEffect(() => {
    const svg = svgRef.current;
    const g = gRef.current;

    const handleResize = () => {
      svg.style.width = window.innerWidth + "px";
      svg.style.height = window.innerHeight + "px";
    };

    const stampSmudge = (x, y) => {
      const circle = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "circle",
      );
      circle.setAttribute("cx", x);
      circle.setAttribute("cy", y);
      circle.setAttribute("r", config.baseRadius);
      circle.setAttribute("fill", "white");

      g.appendChild(circle);

      gsap.to(circle, {
        attr: { r: 0 },
        duration: config.dissolveTime,
        delay: config.dissolveStart,
        ease: config.dissolveEase,
        onComplete: () => circle.remove(),
      });
    };

    const updateLoop = () => {
      if (!hasStarted.current) return;

      smoothPointer.current.x +=
        (pointer.current.x - smoothPointer.current.x) * config.smoothing;
      smoothPointer.current.y +=
        (pointer.current.y - smoothPointer.current.y) * config.smoothing;

      stampSmudge(smoothPointer.current.x, smoothPointer.current.y);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    gsap.ticker.add(updateLoop);

    return () => {
      window.removeEventListener("resize", handleResize);
      gsap.ticker.remove(updateLoop);
    };
  }, []);

  const handleMouseMove = (e) => {
    if (!hasStarted.current) {
      smoothPointer.current = { x: e.clientX, y: e.clientY };
      hasStarted.current = true;
    }
    pointer.current = { x: e.clientX, y: e.clientY };
  };

  return (
    <section className="hero" onMouseMove={handleMouseMove}>
      <div className="hero-content-background">
        <h3>The things worth finding are never on the surface...</h3>
      </div>

      <div
        className="hero-content-foreground"
        style={{
          maskImage: "url(#smudge-mask)",
          WebkitMaskImage: "url(#smudge-mask)",
        }}
      >
        <h1>Dig In</h1>
      </div>

      <svg
        ref={svgRef}
        xmlns="http://www.w3.org/2000/svg"
        className="smudge-revealer"
        style={{ position: "absolute", pointerEvents: "none", top: 0, left: 0 }}
      >
        <defs>
          <filter id="smudge-goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" />
            <feColorMatrix
              type="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10"
            />
          </filter>
          <mask id="smudge-mask">
            <g ref={gRef} filter="url(#smudge-goo)"></g>
          </mask>
        </defs>
      </svg>
    </section>
  );
};

export default TextRevealBrush;
