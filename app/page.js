"use client";
import { Card } from "./components/Card";
import { useState } from "react";
import TextRevealBrush from "./components/TextRevealBrush";
export default function Home() {
  return (
    <div>
      <section className="hero">
        <h1>
          Keep Scrolling to <br /> reveal the Cards
        </h1>
      </section>
      <section className="cards">
        {[...Array(4)].map((_, index) => (
          <Card
            key={index}
            index={`card-${index + 1}`}
            frontSrc="/back-card.jpg"
            frontAlt="Card Image"
            backText="Your card details"
          />
        ))}
      </section>
      <section className="footer">
        <h1>Footer or Upcoming Section</h1>
      </section>

      <TextRevealBrush />
    </div>
  );
}
