import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const AppImagesSection = () => {
  const sectionRef = useRef(null);
  const logoRef = useRef(null);
  const textRef = useRef(null);
  const screenshotRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(logoRef.current, {
        scrollTrigger: {
          trigger: logoRef.current,
          start: "top 80%",
        },
        opacity: 0,
        x: -50,
        duration: 1,
        ease: "power2.out",
      });

      gsap.from(textRef.current, {
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 85%",
        },
        opacity: 0,
        y: 100,
        duration: 1.2,
        ease: "power4.out",
      });

      // 3. App Screenshot (Right Image)
      gsap.from(screenshotRef.current, {
        scrollTrigger: {
          trigger: screenshotRef.current,
          start: "top 75%",
        },
        opacity: 0,
        scale: 0.8, // Subtle "zoom in" effect
        duration: 1.5,
        ease: "expo.out",
      });
    }, sectionRef);

    return () => ctx.revert(); // Cleanup on unmount
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        backgroundColor: "#E8E6FA",
        padding: "0 3rem",
        overflow: "hidden",
      }}
    >
      <img
        ref={logoRef}
        src="/headerTextLogo.png"
        alt="Header Logo"
        style={{ width: "600px", height: "auto", marginTop: "4rem" }}
      />

      <div
        style={{
          height: "100vh",
          backgroundColor: "#E8E6FA",
          display: "flex",
          alignItems: "center",
          gap: "2rem",
          boxSizing: "border-box",
        }}
      >
        <h2
          ref={textRef}
          style={{
            fontSize: "90px",
            color: "#51174E",
            lineHeight: "1.1",
          }}
        >
          Skills you have. <br /> Skills you{" "}
          <span style={{ color: "#B878D3" }}>crave</span>.
        </h2>

        <img
          ref={screenshotRef}
          src="/appscreenshots.png"
          alt="App Screenshots"
          style={{ width: "600px", height: "auto" }}
        />
      </div>

      <h2
        style={{
          fontSize: "72px",
          color: "#51174E",
          lineHeight: "1.1",
          marginTop: "5rem",
          marginBottom: "3rem",
        }}
      >
        Pick Your Skills
      </h2>
    </section>
  );
};

export default AppImagesSection;
