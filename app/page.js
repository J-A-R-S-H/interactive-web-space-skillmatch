"use client";
import { useRef } from "react";
import ReactLenis from "lenis/react";
import Resume from "./components/Resume";
import ProjectHoverSection from "./components/ProjectHoverSection";
import MaskText from "./components/MaskText";
import Intro from "./components/Intro";
import TextHeader from "./components/TextHeader";
import { IMAGES, INTRO_END_DELAY_SEC } from "./components/Intro";
import PinSection from "./components/PinSection";
import AppImagesSection from "./components/AppImagesSection";
import FAQ from "./components/FAQ";
import SlidingChips from "./components/SlidingChips";

export default function Home() {
  const container = useRef(null);

  const projects = [
    {
      title: "Nexus Core",
      subtitle: "Backend Architecture",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop",
      tags: ["React", "Framer Motion", "Tailwind"],
    },
    {
      title: "Synth Flow",
      subtitle: "User Experience Research",
      image:
        "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=1000&auto=format&fit=crop",
      tags: ["Node.js", "PostgreSQL", "AWS"],
    },
    {
      title: "Aether Engine",
      subtitle: "Web3 & Blockchain Dev",
      image:
        "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1000&auto=format&fit=crop",
      tags: ["Node.js", "PostgreSQL", "AWS"],
    },
    {
      title: "Pixel Perfect",
      subtitle: "Frontend Mastery",
      image:
        "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1000&auto=format&fit=crop",
    },
    {
      title: "Cloud Weaver",
      subtitle: "DevOps & Infrastructure",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop",
    },
    {
      title: "Vivid Motion",
      subtitle: "Interaction Design",
      image:
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop",
    },
    {
      title: "Codex Pro",
      subtitle: "Full Stack Solutions",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000&auto=format&fit=crop",
    },
    {
      title: "Brand Logic",
      subtitle: "Visual Identity Design",
      image:
        "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1000&auto=format&fit=crop",
    },
    {
      title: "Logic Gate",
      subtitle: "Algorithm Optimization",
      image:
        "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1000&auto=format&fit=crop",
    },
    {
      title: "Prism Dev",
      subtitle: "Creative Engineering",
      image:
        "https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=1000&auto=format&fit=crop",
    },
  ];

  return (
    <ReactLenis root>
      <div className="container" ref={container}>
        <section style={{ height: "100vh", position: "relative" }}>
          <Intro IMAGES={IMAGES} />
          <TextHeader variant="logo" delay={0.6} />
          <TextHeader delay={INTRO_END_DELAY_SEC}>
            Every Workshop has its place
          </TextHeader>
        </section>

        <AppImagesSection />

        <PinSection />

        <section>
          <SlidingChips />
        </section>

        <section className="footer">
          <ProjectHoverSection projects={projects} />
        </section>

        <section
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            marginTop: "20rem",
            marginBottom: "20rem",
          }}
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
            Your Final Resume{" "}
          </h2>
          <Resume />
        </section>

        <section>
          <div
            className="reveal-container"
            style={{
              height: "60vh",
            }}
          >
            <MaskText
              maskBackground="#FFCFE9"
              maskSizeSmall={20}
              maskSizeLarge={80}
              className="mask-reveal-wrapper"
              originalContent={
                <p
                  className="reveal-text original-content"
                  style={{
                    maxWidth: "500px",
                    textAlign: "center",
                    textWrap: "balance",
                    margin: "0 auto",
                  }}
                >
                  Most people seek greatness through educational courses to gain
                  valuable <span className="highlight-yellow">Skills </span>
                  needed to become truly successful.
                </p>
              }
              maskContent={
                <p
                  className="reveal-text mask-content"
                  style={{
                    maxWidth: "500px",
                    textAlign: "center",
                    textWrap: "balance",
                    margin: "0 auto",
                  }}
                >
                  Attending workshops and learning from others creates an{" "}
                  <span className="highlight-red">Experience</span> that drives
                  proficiency and success in any industry.
                </p>
              }
            />
          </div>
        </section>

        <section>
          <h2
            style={{
              fontSize: "72px",
              color: "#51174E",
              lineHeight: "1.1",
              marginTop: "5rem",
              marginBottom: "3rem",
            }}
          >
            FAQ
          </h2>
          <FAQ />
        </section>
      </div>
    </ReactLenis>
  );
}
