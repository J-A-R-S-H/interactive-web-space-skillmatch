import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useResumeStore } from "../store/store";

const Resume = () => {
  const skills = useResumeStore((state) => state.skills);
  const cardRef = useRef(null);
  const stageRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    const stage = stageRef.current;
    if (!card || !stage) return;

    const onMove = (e) => {
      const r = card.getBoundingClientRect();
      const dx = (e.clientX - r.left - r.width / 2) / (r.width / 2);
      const dy = (e.clientY - r.top - r.height / 2) / (r.height / 2);
      gsap.to(card, {
        rotateY: dx * 6,
        rotateX: -dy * 6,
        scale: 1.015, // also softer scale
        duration: 0.18,
        ease: "power2.out",
        overwrite: "auto",
        transformPerspective: 900,
      });
    };

    const onLeave = () => {
      gsap.to(card, {
        rotateY: 0,
        rotateX: 0,
        scale: 1,
        duration: 0.75,
        ease: "elastic.out(1, 0.35)", // lower amplitude, less wobble
        overwrite: "auto",
        transformPerspective: 900,
      });
    };

    stage.addEventListener("mousemove", onMove);
    stage.addEventListener("mouseleave", onLeave);
    return () => {
      stage.removeEventListener("mousemove", onMove);
      stage.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div ref={stageRef} style={{ perspective: "900px", padding: "2rem" }}>
      <div
        ref={cardRef}
        style={{
          background: "#FFFFF9",
          borderRadius: "20px",
          border: "1px solid rgba(81,23,78,0.12)",
          overflow: "hidden",
          willChange: "transform",
          transformStyle: "preserve-3d",
          maxWidth: "380px",
          width: "100%",
        }}
      >
        {/* Header */}
        <div
          style={{
            background: "#51174E",
            padding: "24px 24px 20px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
              marginBottom: "14px",
            }}
          >
            <div
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                background: "rgba(255,255,249,0.15)",
                border: "1.5px solid rgba(255,255,249,0.25)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "15px",
                fontWeight: "500",
                color: "#FFFFF9",
                flexShrink: 0,
              }}
            >
              AM
            </div>
            <div>
              <p
                style={{
                  margin: 0,
                  fontSize: "16px",
                  fontWeight: "500",
                  color: "#FFFFF9",
                }}
              >
                Alex Morgan
              </p>
              <p
                style={{
                  margin: "4px 0 0",
                  fontSize: "12px",
                  color: "rgba(255,255,249,0.55)",
                }}
              >
                Designer · Engineer · Strategist
              </p>
            </div>
          </div>
          <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
            <span
              style={{
                fontSize: "11px",
                padding: "3px 10px",
                borderRadius: "99px",
                background: "rgba(255,255,249,0.1)",
                color: "rgba(255,255,249,0.75)",
                border: "1px solid rgba(255,255,249,0.18)",
              }}
            >
              Vancouver{" "}
            </span>
            <span
              style={{
                fontSize: "11px",
                padding: "3px 10px",
                borderRadius: "99px",
                background: "rgba(255,255,249,0.1)",
                color: "rgba(255,255,249,0.75)",
                border: "1px solid rgba(255,255,249,0.18)",
              }}
            >
              Open to work
            </span>
          </div>
        </div>

        {/* Stats */}
        <div
          style={{
            display: "grid",
            borderBottom: "1px solid rgba(81,23,78,0.08)",
          }}
        >
          {[{ val: skills.length, label: "Skills" }].map(
            ({ val, label }, i, arr) => (
              <div
                key={label}
                style={{
                  padding: "14px 12px",
                  textAlign: "center",
                  borderRight:
                    i < arr.length - 1
                      ? "1px solid rgba(81,23,78,0.08)"
                      : "none",
                }}
              >
                <div
                  style={{
                    fontSize: "22px",
                    fontWeight: "500",
                    color: "#51174E",
                    lineHeight: 1,
                    marginBottom: "4px",
                  }}
                >
                  {val}
                </div>
                <div style={{ fontSize: "11px", color: "rgba(81,23,78,0.45)" }}>
                  {label}
                </div>
              </div>
            ),
          )}
        </div>

        {/* Skills body */}
        <div style={{ padding: "20px 24px 24px" }}>
          <p
            style={{
              margin: "0 0 10px",
              fontSize: "10px",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "rgba(81,23,78,0.4)",
            }}
          >
            Skills
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "7px" }}>
            {skills.map((skill) => (
              <span
                key={skill}
                style={{
                  fontSize: "12px",
                  padding: "5px 12px",
                  borderRadius: "99px",
                  background: "#f7eef7",
                  color: "#51174E",
                  border: "1px solid rgba(81,23,78,0.14)",
                  lineHeight: 1,
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            padding: "12px 24px",
            borderTop: "1px solid rgba(81,23,78,0.08)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "88px",
              height: "4px",
              background: "rgba(81,23,78,0.1)",
              borderRadius: "99px",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                height: "100%",
                width: `${Math.min(100, Math.round((skills.length / 20) * 100))}%`,
                background: "#51174E",
                borderRadius: "99px",
                transition: "width 0.6s cubic-bezier(0.23,1,0.32,1)",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
