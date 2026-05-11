"use client";
import "./SlidingChips.css";
import { useState } from "react";

export default function SlidingChips() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="chips-section">
      <h2 className="chips-title">Use Chips <br/> to show what skills you have</h2>
      
      <div className="chips-container">
        {/* Row 1: Outer Edges */}
        <div className="chip-row row-1">
          <div className={`chip ${isActive ? "visible" : "hidden-left"}`}>Fashion</div>
          <div className={`chip ${isActive ? "visible" : "hidden-right"}`}>Tech</div>
        </div>

        {/* Row 2: Middle Cluster */}
        <div className="chip-row row-2">
          <div className={`chip ${isActive ? "visible" : "hidden-left"}`}>Design</div>
          <div className={`chip ${isActive ? "visible" : "hidden-right"}`}>Math</div>
        </div>

        {/* Row 3: Trigger Row */}
        <div className="chip-row row-3">
          <div className="marketing-creativity-pair">
            <div className={`chip ${isActive ? "visible" : "hidden-left"}`}>
              Marketing
            </div>
            {/* The Trigger */}
            <div 
              className={`chip creativity ${isActive ? "active-trigger" : ""}`} 
              onClick={() => setIsActive(true)}
            >
              Creativity
            </div>
          </div>
          <div className={`chip teaching ${isActive ? "visible" : "hidden-right"}`}>
            Teaching
          </div>
        </div>

        {/* Row 4: Centered Bottom */}
        <div className="chip-row row-4">
          <div className={`chip ${isActive ? "visible" : "hidden-left"}`}>
            Writing
          </div>
        </div>
      </div>
    </div>
  );
}