"use client";

import React, { forwardRef } from "react";
import Image from "next/image";
import { useResumeStore } from "../store/store";

const Card = forwardRef(({ src, alt, backText, backfaceStyle = {} }, ref) => {
  const addSkill = useResumeStore((state) => state.addSkill);

  const defaultBackStyle = {
    position: "absolute",
    inset: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "1.5rem",
    backgroundColor: "#ffffff",
    border: "1px solid rgba(255, 255, 255, 0.15)",
    boxSizing: "border-box",
    textAlign: "left",
    backfaceVisibility: "hidden",
    WebkitBackfaceVisibility: "hidden",
    transform: "rotateY(180deg) translateZ(4px)",
    overflow: "hidden",
    ...backfaceStyle,
  };

  const frontStyle = {
    position: "absolute",
    inset: 0,
    overflow: "hidden",
    backfaceVisibility: "hidden",
    WebkitBackfaceVisibility: "hidden",
    transform: "translateZ(4px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <div
      ref={ref}
      data-card-shell
      style={{
        position: "relative",
        zIndex: 0,
        aspectRatio: "2/3",
        minWidth: 0,
        width: "clamp(220px, 32vw, 400px)",
        flex: 1,
        overflow: "visible",
        backgroundColor: "transparent",
        perspective: "1000px",
      }}
    >
      <div
        data-flip-inner
        style={{
          position: "relative",
          height: "100%",
          width: "100%",
          borderRadius: "16px",
          transformStyle: "preserve-3d",
          willChange: "transform",
        }}
      >
        {/* FRONT FACE */}
        <div data-card-face="front" style={frontStyle}>
          <Image
            src={src || "/SkillMatchLogo.svg"}
            alt={alt || "Card Front"}
            fill
            sizes="(max-width: 640px) 32vw, (max-width: 1024px) 34vw, 400px"
            style={{ objectCover: "cover" }}
          />
        </div>

        <div data-card-face="back" style={defaultBackStyle}>
          <div>
            <header style={{ marginBottom: "1rem" }}>
              <h3
                style={{
                  margin: 0,
                  fontSize: "1.1rem",
                  color: "#111827",
                  fontWeight: "700",
                }}
              >
                Software Engineer
              </h3>
              <p style={{ margin: 0, fontSize: "0.8rem", color: "#6b7280" }}>
                Full-time • Remote
              </p>
            </header>

            <div className="skills-section">
              <p
                style={{
                  fontSize: "0.7rem",
                  fontWeight: "bold",
                  color: "#374151",
                  textTransform: "uppercase",
                  marginBottom: "8px",
                }}
              >
                Core Competency
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                <span
                  style={{
                    fontSize: "0.7rem",
                    padding: "4px 10px",
                    backgroundColor: "#eff6ff",
                    color: "#1d4ed8",
                    borderRadius: "20px",
                    border: "1px solid #dbeafe",
                  }}
                >
                  {backText}
                </span>
              </div>
            </div>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation(); // Prevents click from interfering with potential flip triggers
              addSkill(backText);
            }}
            style={{
              width: "100%",
              padding: "10px",
              backgroundColor: "#111827",
              color: "white",
              border: "none",
              borderRadius: "8px",
              fontWeight: "600",
              fontSize: "0.85rem",
              cursor: "pointer",
              marginTop: "1rem",
            }}
          >
            Add {backText}
          </button>
        </div>
      </div>
    </div>
  );
});

Card.displayName = "Card";

export default Card;
