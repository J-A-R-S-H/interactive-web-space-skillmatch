"use client";
import { Card } from "./components/Card";
import { useState, useEffect, useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import ReactLenis from "lenis/react";

import TextRevealBrush from "./components/TextRevealBrush";
import BackCard from "../public/back-card.jpg";
import Navbar from "@/app/components/NavBar";
import FAQ from "@/app/components/FAQ"

export default function Home() {
  const container = useRef(null);
  const cardRefs = useRef([]);

  return (
    
    <ReactLenis root>
      <div className="container" ref={container}>
      <Navbar/>
      
        <section className="top-hero">
          <h2>
            Keep Scrolling to <br /> reveal the Cards
          </h2>
        </section>
        <section className="cards">
          {[...Array(4)].map((_, index) => (
            <Card
              key={index}
              index={`card-${index + 1}`}
              frontSrc={BackCard}
              frontAlt="Card Image"
              backText="Your card details"
              ref={(el) => (cardRefs.current[index] = el)}
            />
          ))}
        </section>

        <section className="footer">
          <h2>In your Resume we find the best parts about you. Try to see it</h2>
        </section>

        <TextRevealBrush />
        <FAQ/>
      </div>
    </ReactLenis>
  );
}
