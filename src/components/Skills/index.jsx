import { SKILLS } from "@/data";
import { Reveal, SectionHeader } from "@/components/UI";
import styles from "./Skills.module.css";

function SkillCard({ group, delay }) {
  return (
    <Reveal delay={delay}>
      <div className={`glass-card ${styles.card}`}>
        <h3 className={styles.category}>{group.category}</h3>
        <div className={styles.tags}>
          {group.items.map((skill) => (
            <span key={skill} className={styles.tag}>{skill}</span>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className={styles.section}>
      <Reveal><SectionHeader tag="Expertise" title="Skills & Technologies" /></Reveal>
      <div className={styles.grid}>
        {SKILLS.map((group, i) => (
          <SkillCard key={group.category} group={group} delay={i * 100} />
        ))}
      </div>
    </section>
  );
}
