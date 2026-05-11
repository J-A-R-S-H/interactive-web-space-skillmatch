import { forwardRef } from "react";
import { useResumeStore } from "../store/store";
import Image from "next/image";

export const Card = forwardRef(({ id, frontSrc, frontAlt, backText }, ref) => {
  const addSkill = useResumeStore((state) => state.addSkill);

  const backStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "1.5rem",
    backgroundColor: "#ffffff",
    border: "2px solid #e5e7eb",
    borderRadius: "12px",
    height: "100%",
    boxSizing: "border-box",
    textAlign: "left",
  };

  return (
    <div className="card" id={id} ref={ref}>
      <div className="card-wrapper">
        <div className="flip-card-inner">
          <div
            className="flip-card-front"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              src="/SkillMatchLogo.svg"
              alt={frontAlt || "Company Logo"}
              className="card-logo"
              width={150}
              height={150}
              style={{ width: "80%", height: "auto" }}
            />
          </div>
          <div className="flip-card-back" style={backStyle}>
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
                  {/* Render the single skill passed into this card */}
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
              onClick={() => addSkill(backText)}
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
    </div>
  );
});
