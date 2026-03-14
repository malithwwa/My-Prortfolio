import { useState } from "react";
import { PROJECTS } from "@/data";
import { Reveal, SectionHeader } from "@/components/UI";
import s from "./Projects.module.css";

function ProjectCard({ p }) {
  const [hov, setHov] = useState(false);

  return (
    <div
      className={`glass ${s.card} ${hov ? s.hovered : ""}`}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      {/* Banner */}
      <div className={s.banner}>
        <div className={s.gridSquare} />
        <div className={`${s.icon} ${hov ? s.iconHov : ""}`}>{p.icon}</div>
        <div className={s.liveBadge}>Live</div>
      </div>

      {/* Body */}
      <div className={s.body}>
        <h3 className={s.title}>{p.title}</h3>
        <p className={s.desc}>{p.description}</p>

        {/* Stats */}
        <div className={s.stats}>
          {Object.entries(p.stats).map(([k, v]) => (
            <div key={k} className={s.stat}>
              <span className={s.statVal}>{v}</span>
              <span className={s.statKey}>{k}</span>
            </div>
          ))}
        </div>

        {/* Tech tags */}
        <div className={s.tags}>
          {p.tags.map((t) => <span key={t} className={s.tag}>{t}</span>)}
        </div>

        {/* Buttons */}
        <div className={s.actions}>
          <a href={p.live}   className={s.btnLive}>Live Demo ↗</a>
          <a href={p.github} className={s.btnGhub}>GitHub →</a>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className={s.section}>
      <div className={s.inner}>
        <Reveal><SectionHeader tag="Portfolio" title="Featured Projects" /></Reveal>
        <div className={s.grid}>
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
