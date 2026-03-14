import { useState } from "react";
import { PROJECTS } from "@/data";
import { Reveal, SectionHeader } from "@/components/UI";
import styles from "./Projects.module.css";

const PRIMARY = "#1F6FEB";

function ProjectCard({ p }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`glass-card ${styles.card} ${hovered ? styles.cardHovered : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Banner */}
      <div className={styles.banner}>
        <div className={styles.gridSquare} />
        <div className={`${styles.icon} ${hovered ? styles.iconHovered : ""}`}>{p.icon}</div>
        <div className={styles.liveBadge}>Live</div>
      </div>

      {/* Content */}
      <div className={styles.body}>
        <h3 className={styles.title}>{p.title}</h3>
        <p className={styles.desc}>{p.description}</p>

        {/* Stats */}
        <div className={styles.stats}>
          {Object.entries(p.stats).map(([k, v]) => (
            <div key={k} className={styles.stat}>
              <div className={styles.statVal}>{v}</div>
              <div className={styles.statKey}>{k}</div>
            </div>
          ))}
        </div>

        {/* Tech tags */}
        <div className={styles.tags}>
          {p.tags.map((t) => <span key={t} className={styles.tag}>{t}</span>)}
        </div>

        {/* Action links */}
        <div className={styles.actions}>
          <a href={p.live} className={styles.btnLive}>Live Demo ↗</a>
          <a href={p.github} className={styles.btnGhub}>GitHub →</a>
        </div>
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className={styles.section}>
      <div className={styles.inner}>
        <Reveal><SectionHeader tag="Portfolio" title="Featured Projects" /></Reveal>
        <div className={styles.grid}>
          {PROJECTS.map((p, i) => (
            <Reveal key={p.id} delay={i * 80}>
              <ProjectCard p={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
