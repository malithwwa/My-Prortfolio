import { SKILLS } from "@/data";
import { Reveal, SectionHeader } from "@/components/UI";
import s from "./Skills.module.css";

function SkillCard({ group, delay }) {
  return (
    <Reveal delay={delay}>
      <div className={`glass glass--lift ${s.card}`}>
        <h3 className={s.category}>{group.category}</h3>
        <div className={s.tags}>
          {group.items.map((skill) => (
            <span key={skill} className={s.tag}>{skill}</span>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

export default function Skills() {
  return (
    <section id="skills" className={s.section}>
      <Reveal><SectionHeader tag="Expertise" title="Skills & Technologies" /></Reveal>
      <div className={s.grid}>
        {SKILLS.map((g, i) => (
          <SkillCard key={g.category} group={g} delay={i * 100} />
        ))}
      </div>
    </section>
  );
}
