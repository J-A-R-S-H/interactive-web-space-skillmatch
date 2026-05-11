"use client";
import "./FlippingCards.css";
import { useState, useEffect } from "react";

export default function FlippingCards() {
    const [flipped, setFlipped] = useState([false, false, false]);

  // Function to set a specific card's flip state
    const handleFlip = (index, isHovering) => {
    const newFlipped = [...flipped];
    newFlipped[index] = isHovering;
    setFlipped(newFlipped);
  };

  // Optional: Initial animation on page load
  useEffect(() => {
    const timer = setTimeout(() => {
      setFlipped([true, true, true]);
      // Flip back after 1 second so the user can then hover manually
      setTimeout(() => setFlipped([false, false, false]), 1000);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container">
      {flipped.map((isFlipped, index) => (
        <div key={index} className="card-wrapper">
          <div 
            className={`card-top ${isFlipped ? "is-flipped" : ""}`} 
            onMouseEnter={() => handleFlip(index, true)}
            onMouseLeave={() => handleFlip(index, false)}
          >
            {/* Front Face */}
            <div className="card-face card-front">
              <div className="content-placeholder">
                <span className="js-logo">JS</span>
                <p>Front {index + 1}</p>
              </div>
            </div>

            {/* Back Face */}
            <div className="card-face card-back">
              <div className="content-placeholder">
                 <p>Back {index + 1}</p>
              </div>
            </div>
          </div>
          <div className="card-bottom"></div>
        </div>
      ))}
    </div>
  );
}