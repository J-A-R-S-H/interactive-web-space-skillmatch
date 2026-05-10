"use client";
import { Card } from "./components/Card";
import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import ReactLenis from "lenis/react";
import BackCard from "../public/back-card.jpg";
import TextRevealBrush from "./components/TextRevealBrush";
import Resume from "./components/Resume";
import ProjectHoverSection from "./components/ProjectHoverSection";
import MaskText from "./components/MaskText";
import Intro from "./components/Intro";
import TextHeader from "./components/TextHeader";
import { IMAGES, INTRO_END_DELAY_SEC } from "./components/Intro";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const container = useRef(null);
  const cardRefs = useRef([]);

  useGSAP(
    () => {
      const cards = cardRefs.current;
      const totalScrollingHeight = window.innerHeight * 3;
      const positions = [14, 38, 62, 86];
      const rotations = [-15, -7.5, 7.5, 15];

      ScrollTrigger.create({
        trigger: ".cards",
        start: "top top",
        end: () => `+=${totalScrollingHeight}`,
        pin: true,
        pinSpacing: true,
      });

      cards.forEach((card, index) => {
        gsap.to(card, {
          left: `${positions[index]}%`,
          rotation: rotations[index],
          ease: "none",
          scrollTrigger: {
            trigger: ".cards",
            start: "top top",
            end: () => `+=${window.innerHeight}`,
            scrub: 0.5,
          },
        });
      });

      cards.forEach((card, index) => {
        const frontEl = card.querySelector(".flip-card-front");
        const backEl = card.querySelector(".flip-card-back");
        const staggerOffset = index * 0.05;
        const startOffset = 1 / 3 + staggerOffset;
        const endOffset = 2 / 3 + staggerOffset;

        ScrollTrigger.create({
          trigger: ".cards",
          start: "top top",
          end: () => `+=${totalScrollingHeight}`,
          scrub: 1,
          onUpdate: (self) => {
            const progress = self.progress;
            if (progress >= startOffset && progress <= endOffset) {
              const animationProgress = (progress - startOffset) / (1 / 3);
              const frontRotation = -180 * animationProgress;
              const backRotation = 180 - 180 * animationProgress;
              const cardRotation = rotations[index] * (1 - animationProgress);

              gsap.to(frontEl, {
                rotateY: frontRotation,
                duration: 0.1,
                overwrite: true,
              });
              gsap.to(backEl, {
                rotateY: backRotation,
                duration: 0.1,
                overwrite: true,
              });
              gsap.to(card, {
                rotate: cardRotation,
                duration: 0.1,
                overwrite: true,
              });
            }
          },
        });
      });
    },
    { scope: container },
  );
  const projects = [
    {
      title: "Nexus Core",
      subtitle: "Backend Architecture",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop",
      alt: "Lines of code on a computer screen",
      tags: ["React", "Framer Motion", "Tailwind"],
    },
    {
      title: "Synth Flow",
      subtitle: "User Experience Research",
      image:
        "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=1000&auto=format&fit=crop",
      alt: "UX designer working on wireframes",
      tags: ["Node.js", "PostgreSQL", "AWS"],
    },
    {
      title: "Aether Engine",
      subtitle: "Web3 & Blockchain Dev",
      image:
        "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1000&auto=format&fit=crop",
      alt: "Abstract digital network visualization",
      tags: ["Node.js", "PostgreSQL", "AWS"],
    },
    {
      title: "Pixel Perfect",
      subtitle: "Frontend Mastery",
      image:
        "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1000&auto=format&fit=crop",
      alt: "Workspace with a laptop and design tools",
    },

    {
      title: "Cloud Weaver",
      subtitle: "DevOps & Infrastructure",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop",
      alt: "Glowing blue digital earth representation",
    },
    {
      title: "Vivid Motion",
      subtitle: "Interaction Design",
      image:
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop",
      alt: "Retro computer hardware and modern tech aesthetic",
    },
    {
      title: "Codex Pro",
      subtitle: "Full Stack Solutions",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000&auto=format&fit=crop",
      alt: "Laptop displaying code in a dark room",
    },
    {
      title: "Brand Logic",
      subtitle: "Visual Identity Design",
      image:
        "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1000&auto=format&fit=crop",
      alt: "Abstract shapes and brand colors",
    },
    {
      title: "Logic Gate",
      subtitle: "Algorithm Optimization",
      image:
        "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1000&auto=format&fit=crop",
      alt: "Close up of code and syntax highlighting",
    },
    {
      title: "Prism Dev",
      subtitle: "Creative Engineering",
      image:
        "https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=1000&auto=format&fit=crop",
      alt: "Modern workspace with multiple monitors",
    },
  ];

  return (
    <ReactLenis root>
      <div className="container" ref={container}>
        <section
          style={{
            height: "100vh",
            position: "relative",
          }}
        >
          <Intro IMAGES={IMAGES} />
          <TextHeader variant="logo" delay={0.6}>
            {" "}
            Next Timeline{" "}
          </TextHeader>
          <TextHeader delay={INTRO_END_DELAY_SEC}>
            {" "}
            Every Frame Has Its Place{" "}
          </TextHeader>
        </section>
        <section className="top-hero">
          <h2>
            Keep Scrolling to <br /> reveal the Cards
          </h2>
        </section>

        <section
          className="cards"
          style={{ height: "100vh", position: "relative" }}
        >
          <section>
            <Resume />
          </section>

          {[...Array(4)].map((_, index) => (
            <Card
              key={index}
              id={`card-${index + 1}`}
              frontSrc={BackCard}
              frontAlt="Card Image"
              backText="Your card details"
              ref={(el) => (cardRefs.current[index] = el)}
            />
          ))}
        </section>

        <section className="footer">
          <ProjectHoverSection projects={projects} />
        </section>

        <section>
          <div className="reveal-container">
            <MaskText
              maskBackground="#DDFC3E"
              maskSizeSmall={20}
              maskSizeLarge={80}
              className="mask-reveal-wrapper"
              originalContent={
                <p className="reveal-text original-content">
                  Writing{" "}
                  <span className="highlight-yellow">beautiful code</span> means
                  thinking like an artist and debugging like a detective. Every
                  function is a story, every variable a character. Master your
                  craft through practice, patience, and endless curiosity about
                  how things work.
                </p>
              }
              maskContent={
                <p className="reveal-text mask-content">
                  Building <span className="highlight-red">great software</span>{" "}
                  requires seeing beyond syntax into architecture and design.
                  Test early, refactor often, document clearly. Success comes
                  from collaboration, continuous learning, and caring deeply
                  about user experience.
                </p>
              }
            />
          </div>
        </section>

        <TextRevealBrush />
      </div>
    </ReactLenis>
  );
}
