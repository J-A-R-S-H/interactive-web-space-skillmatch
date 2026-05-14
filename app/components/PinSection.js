"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Card from "./Card";

gsap.registerPlugin(ScrollTrigger);

const STYLES = {
  section: {
    position: "relative",
    zIndex: 20,
    display: "flex",
    minHeight: "100vh",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: "2rem 1rem",
    boxSizing: "border-box",
  },
  row: {
    display: "flex",
    flexWrap: "nowrap",
    alignItems: "center",
    justifyContent: "center",
    gap: "0px",
    willChange: "transform",
  },
  numberLabel: {
    marginTop: "auto",
    marginBottom: "1.5rem",
    fontSize: "3rem",
    opacity: 0.5,
    color: "#ffffff",
  },
  title: {
    fontSize: "1.5rem",
    fontWeight: "600",
    letterSpacing: "-0.025em",
    color: "#ffffff",
    margin: "0 0 1rem 0",
    lineHeight: "1.2",
  },
  body: {
    marginTop: "auto",
    fontSize: "0.9rem",
    fontFamily: "serif",
    fontWeight: "400",
    color: "#e4e4e7",
    lineHeight: "1.5",
    margin: 0,
  },
};

const PinSection = () => {
  const sectionRef = useRef(null);
  const rowRef = useRef(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const row = rowRef.current;
      if (!section || !row) return;

      const cards = row.querySelectorAll("[data-card-shell]");
      const flippers = row.querySelectorAll("[data-flip-inner]");

      const radius = 16;
      const stripRadii = [
        `${radius}px 0 0 ${radius}px`,
        "0",
        `0 ${radius}px ${radius}px 0`,
      ];

      cards.forEach((card, i) => {
        const faces = card.querySelectorAll("[data-card-face]");
        gsap.set(faces, { borderRadius: stripRadii[i] });
      });

      flippers.forEach((f) => {
        gsap.set(f, { rotationY: 0, transformStyle: "preserve-3d" });
      });

      const flipParams = [
        { rotateZ: -6, moveY: 20, moveX: 70 },
        { rotateZ: 0, moveY: -18, moveX: 0 },
        { rotateZ: 6, moveY: 20, moveX: -70 },
      ];

      const flipTl = gsap.timeline({ paused: true });

      flippers.forEach((flipper, i) => {
        flipTl.to(
          flipper,
          {
            rotationY: 180,
            rotationZ: flipParams[i].rotateZ,
            y: flipParams[i].moveY,
            x: flipParams[i].moveX,
            boxShadow:
              "0 20px 50px rgba(0,0,0,0.5), 0 8px 20px rgba(0,0,0,0.3)",
            duration: 0.8,
            ease: "power2.inOut",
            force3D: true,
          },
          0,
        );
      });

      flippers.forEach((flipper) => {
        const front = flipper.querySelector("[data-card-face='front']");
        const back = flipper.querySelector("[data-card-face='back']");
        gsap.set(back, { visibility: "hidden" });

        flipTl.set(front, { visibility: "hidden" }, 0.4);
        flipTl.set(back, { visibility: "visible" }, 0.4);
      });

      let flipped = false;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=400%",
          pin: true,
          scrub: 0.5,
          anticipatePin: 1,
          onUpdate: (self) => {
            if (self.progress > 0.5 && !flipped) {
              flipped = true;
              flipTl.play();
            } else if (self.progress <= 0.5 && flipped) {
              flipped = false;
              flipTl.reverse();
            }
          },
        },
      });

      tl.to(row, { scale: 0.76, duration: 1, ease: "none" }, 0);
      tl.to(row, { gap: "5rem", duration: 1, ease: "none" }, 1);

      cards.forEach((card) => {
        const faces = card.querySelectorAll("[data-card-face]");
        tl.to(
          faces,
          { borderRadius: `${radius}px`, duration: 1, ease: "none" },
          1,
        );
      });

      tl.to({}, { duration: 2 }, 2);
    },
    { scope: sectionRef },
  );

  return (
    <div ref={sectionRef} style={STYLES.section}>
      <div ref={rowRef} style={STYLES.row}>
        <Card
          src="https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?q=80&w=824&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Motion"
          backText="Motion Design"
          backfaceStyle={{ backgroundColor: "#27272a" }}
        >
          <span style={STYLES.numberLabel}>(01)</span>
          <h2 style={STYLES.title}>
            Scroll-told motion with a deliberate finish
          </h2>
          <p style={STYLES.body}>
            Pin sections, choreograph reveals, and let the page breathe as
            people move through it.
          </p>
        </Card>

        <Card
          src="https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?q=80&w=824&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Imagery"
          backText="Visual Arts"
          backfaceStyle={{ backgroundColor: "#064e3b" }}
        >
          <span style={STYLES.numberLabel}>(02)</span>
          <h2 style={STYLES.title}>
            Textures that breathe when everything slows down
          </h2>
          <p style={STYLES.body}>
            Rich backgrounds and contrast keep the layout from feeling flat when
            things sit still.
          </p>
        </Card>

        <Card
          src="https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?q=80&w=824&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Experiment"
          backText="User Experience"
          backfaceStyle={{ backgroundColor: "#09090b" }}
        >
          <span style={STYLES.numberLabel}>(03)</span>
          <h2 style={STYLES.title}>Room to experiment and space to play</h2>
          <p style={STYLES.body}>
            Treat the viewport like a stage—swap panels, tune timing, and see
            what sticks.
          </p>
        </Card>
      </div>
    </div>
  );
};

export default PinSection;
