import { EXPERIENCE } from "@/data";
import { Reveal, SectionHeader } from "@/components/UI";
import styles from "./Experience.module.css";

function ExperienceCard({ item }) {
  return (
    <div className={`glass-card glass-card--slide ${styles.card}`}>
      <div className={styles.cardTop}>
        <div>
          <h3 className={styles.role}>{item.role}</h3>
          <div className={styles.company}>{item.company}</div>
        </div>
        <span className={styles.period}>{item.period}</span>
      </div>
      <p className={styles.desc}>{item.desc}</p>
    </div>
  );
}

export default function ExperienceSection() {
  return (
    <section id="experience" className={styles.section}>
      <Reveal><SectionHeader tag="Career" title="Work Experience" /></Reveal>
      <div className={styles.timeline}>
        <div className={styles.line} />
        {EXPERIENCE.map((item, i) => (
          <Reveal key={i} delay={i * 120} direction="left">
            <div className={styles.item}>
              <div className={styles.dot} />
              <ExperienceCard item={item} />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
