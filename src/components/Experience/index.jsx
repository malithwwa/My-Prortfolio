import { EXPERIENCE } from "@/data";
import { Reveal, SectionHeader } from "@/components/UI";
import s from "./Experience.module.css";

function ExpCard({ item }) {
  return (
    <div className={`glass glass--slide ${s.card}`}>
      <div className={s.top}>
        <div>
          <h3 className={s.role}>{item.role}</h3>
          <div className={s.company}>{item.company}</div>
        </div>
        <span className={s.period}>{item.period}</span>
      </div>
      <p className={s.desc}>{item.desc}</p>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className={s.section}>
      <Reveal><SectionHeader tag="Career" title="Work Experience" /></Reveal>
      <div className={s.timeline}>
        <div className={s.line} />
        {EXPERIENCE.map((item, i) => (
          <Reveal key={i} delay={i * 120} direction="left">
            <div className={s.item}>
              <div className={s.dot} />
              <ExpCard item={item} />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
