"use client";
import React, { useState } from "react";

const PlanetCard = () => {
  const [hover, setHover] = useState(false);

  const stageStyle = {
    perspective: "1200px",
    width: "320px",
    height: "200px",
    margin: "50px auto",
  };

  const cardStyle = {
    position: "relative",
    width: "100%",
    height: "100%",
    textAlign: "center",
    transition: "transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
    transformStyle: "preserve-3d",
    transform: hover ? "rotateX(180deg)" : "rotateX(0deg)",
  };

  const faceStyle = {
    position: "absolute",
    width: "100%",
    height: "100%",
    backfaceVisibility: "hidden",
    borderRadius: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    boxSizing: "border-box",
    border: "2px solid rgba(255,255,255,0.1)",
  };

  const frontStyle = {
    ...faceStyle,
    background: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
    color: "white",
  };

  const backStyle = {
    ...faceStyle,
    background: "#f8f9fa",
    color: "#333",
    transform: "rotateX(180deg)",
    boxShadow: "inset 0 0 10px rgba(0,0,0,0.1)",
  };

  return (
    <div
      style={stageStyle}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div style={cardStyle}>
        <div style={frontStyle}>
          <h2 style={{ margin: 0, fontSize: "1.2rem" }}>Earth Quiz</h2>
          <hr
            style={{
              width: "40px",
              border: "1px solid #fff",
              margin: "15px 0",
            }}
          />
          <p style={{ fontSize: "1rem", fontWeight: "300" }}>
            What percentage of Earth's surface is covered by water?
          </p>
        </div>

        <div style={backStyle}>
          <h2 style={{ margin: 0, color: "#2a5298" }}>Answer</h2>
          <p
            style={{ fontSize: "1.5rem", fontWeight: "bold", margin: "10px 0" }}
          >
            ~71%
          </p>
          <p style={{ fontSize: "0.8rem", color: "#666" }}>
            Mostly held in the oceans!
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlanetCard;
