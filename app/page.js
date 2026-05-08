"use client";
import { Card } from "./components/Card";
import { useState } from "react";
import TextRevealBrush from "./components/TextRevealBrush";
import BackCard from "../public/back-card.jpg";

export default function Home() {
  console.log(BackCard, "test");
  return (
    <div>
      <section className="top-hero">
        <h2>
          Keep Scrolling to <br /> reveal the Cards s
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
          />
        ))}
      </section>

      <section className="footer">
        <h2>Footer or Upcoming Section</h2>
      </section>

      <TextRevealBrush />
    </div>
  );
}
