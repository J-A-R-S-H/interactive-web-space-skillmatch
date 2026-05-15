"use client";

import React, { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import styles from "../ProjectHoverSection.module.css";
import { useResumeStore } from "../store/store";

const ProjectHoverSection = ({
  projects = [],
  className = "",
  thumbnailWidth = 250,
  thumbnailHeight = 300,
}) => {
  const containerRef = useRef(null);
  const thumbnailRef = useRef(null);
  const sliderRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState(true);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [modal, setModal] = useState({ active: false, index: 0 });
  const addSkill = useResumeStore((state) => state.addSkill);

  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 768);
    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  useGSAP(
    () => {
      if (!isDesktop || !thumbnailRef.current || !containerRef.current) return;

      gsap.set(thumbnailRef.current, {
        scale: 0,
        xPercent: -50,
        yPercent: -50,
      });

      const xTo = gsap.quickTo(thumbnailRef.current, "x", {
        duration: 0.5,
        ease: "power3.out",
      });
      const yTo = gsap.quickTo(thumbnailRef.current, "y", {
        duration: 0.5,
        ease: "power3.out",
      });

      let hasPosition = false;
      const handleMouseMove = (e) => {
        const rect = containerRef.current.getBoundingClientRect();
        const relX = e.clientX - rect.left;
        const relY = e.clientY - rect.top;

        if (!hasPosition) {
          gsap.set(thumbnailRef.current, { x: relX, y: relY });
          hasPosition = true;
        } else {
          xTo(relX);
          yTo(relY);
        }
      };

      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    },
    { dependencies: [isDesktop] },
  );

  useGSAP(
    () => {
      if (!isDesktop || !thumbnailRef.current || !sliderRef.current) return;

      if (modal.active) {
        gsap.to(thumbnailRef.current, {
          scale: 1,
          opacity: 1,
          visibility: "visible",
          duration: 0.4,
          ease: "power2.out",
        });
        gsap.to(sliderRef.current, {
          y: -modal.index * thumbnailHeight,
          duration: 0.4,
          ease: "power2.out",
        });
      } else {
        gsap.to(thumbnailRef.current, {
          scale: 0,
          opacity: 0,
          duration: 0.3,
          ease: "power2.in",
          onComplete: () =>
            gsap.set(thumbnailRef.current, { visibility: "hidden" }),
        });
      }
    },
    { dependencies: [modal.active, modal.index, isDesktop, thumbnailHeight] },
  );

  if (isDesktop) {
    return (
      <div
        ref={containerRef}
        onMouseLeave={() => setModal({ active: false, index: 0 })}
        className={`${styles.container} ${className}`}
      >
        <h2
          style={{
            fontSize: "72px",
            color: "#51174E",
            lineHeight: "1.1",
            marginTop: "5rem",
            marginBottom: "3rem",
          }}
        >
          Attend a Workshop
        </h2>
        {projects.map((project, index) => {
          const isActive = modal.active && modal.index === index;
          return (
            <div
              onClick={() => {
                if (project.tags) {
                  project.tags.forEach((tag) => addSkill(tag));
                }
              }}
              key={index}
              onMouseEnter={() => setModal({ active: true, index })}
              className={`${styles.row} ${isActive ? styles.rowActive : ""}`}
            >
              <h2 className={styles.title}>{project.title}</h2>
              <div>
                {project.tags?.map((tag, i) => (
                  <span key={i}>{tag} </span>
                ))}
              </div>
              <p
                className={`${styles.subtitle} ${isActive ? styles.subtitleActive : ""}`}
              >
                {project.subtitle}
              </p>
            </div>
          );
        })}
        <div className={styles.divider} />

        <div
          ref={thumbnailRef}
          className={styles.thumbnail}
          style={{ width: thumbnailWidth, height: thumbnailHeight }}
        >
          <div
            ref={sliderRef}
            className={styles.slider}
            style={{ height: thumbnailHeight * projects.length }}
          >
            {projects.map((project, index) => (
              <div
                key={index}
                className={styles.imageWrapper}
                style={{
                  top: index * thumbnailHeight,
                  width: thumbnailWidth,
                  height: thumbnailHeight,
                }}
              >
                <Image
                  src={project.image}
                  alt={project.alt || project.title}
                  width={thumbnailWidth}
                  height={thumbnailHeight}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`${styles.container} ${className}`}>
      {projects.map((project, index) => {
        const isExpanded = expandedIndex === index;
        return (
          <div key={index} style={{ width: "100%" }}>
            <button
              type="button"
              onClick={() => setExpandedIndex(isExpanded ? null : index)}
              className={styles.mobileButton}
            >
              <div>
                <h2 style={{ fontSize: "1.25rem", margin: 0 }}>
                  {project.title}
                </h2>
                <p style={{ fontSize: "0.875rem", opacity: 0.7, margin: 0 }}>
                  {project.subtitle}
                </p>
              </div>
              <span style={{ fontSize: "1.5rem", opacity: 0.5 }}>
                {isExpanded ? "−" : "+"}
              </span>
            </button>
            <div
              className={styles.mobileContent}
              style={{
                maxHeight: isExpanded ? "300px" : "0",
                opacity: isExpanded ? 1 : 0,
              }}
            >
              <div style={{ padding: "1rem" }}>
                <div className={styles.mobileImageContainer}>
                  <Image
                    src={project.image}
                    alt={project.alt || project.title}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectHoverSection;
