"use client";
import { useState } from "react";
import { useResumeStore } from "../store/store";

export default function SlidingChips() {
  const [isActive, setIsActive] = useState(false);
  const skills = useResumeStore((state) => state.skills);

  // Helper to render skill text or the placeholder
  const getSkillText = (index) => {
    return skills[index] ? skills[index] : "Future skill to be found...";
  };

  return (
    <div className="chips-section">
      <h2 className="chips-title">
        Use Chips <br /> to show what skills you have
      </h2>

      <div className="chips-container">
        {/* Row 1 */}
        <div className="chip-row row-1">
          <div className={`chip ${isActive ? "visible" : "hidden-left"}`}>
            {getSkillText(0)}
          </div>
          <div className={`chip ${isActive ? "visible" : "hidden-right"}`}>
            {getSkillText(1)}
          </div>
        </div>

        {/* Row 2 */}
        <div className="chip-row row-2">
          <div className={`chip ${isActive ? "visible" : "hidden-left"}`}>
            {getSkillText(2)}
          </div>
          {/* We'll keep the 4th slot as a placeholder too if you want to maintain the original grid */}
          <div className={`chip ${isActive ? "visible" : "hidden-right"}`}>
            {getSkillText(3)}
          </div>
        </div>

        {/* Row 3: The Interaction Row */}
        <div className="chip-row row-3">
          <div className="marketing-creativity-pair">
            <div className={`chip ${isActive ? "visible" : "hidden-left"}`}>
              {getSkillText(4)}
            </div>
            {/* The Trigger stays as is */}
            <div
              className={`chip creativity ${isActive ? "active-trigger" : ""}`}
              onClick={() => setIsActive(true)}
              style={{ cursor: "pointer" }}
            >
              Creativity
            </div>
          </div>
          <div
            className={`chip teaching ${isActive ? "visible" : "hidden-right"}`}
          >
            {getSkillText(5)}
          </div>
        </div>

        {/* Row 4 */}
        <div className="chip-row row-4">
          <div className={`chip ${isActive ? "visible" : "hidden-left"}`}>
            {getSkillText(6)}
          </div>
        </div>
      </div>
    </div>
  );
}
