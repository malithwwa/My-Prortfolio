import { PROFILE, HERO_ROLES, HERO_STATS } from "@/data";
import { useTypewriter } from "@/hooks";
import { CountUp } from "@/components/UI";
import s from "./Hero.module.css";

export default function Hero({ dark }) {
  const typed = useTypewriter(HERO_ROLES);

  return (
    <section id="home" className={s.section}>
      <div className={s.content}>

        {/* Available badge */}
        <div className={`${s.badge} anim-1`}>
          <span className={`${s.dot} pulse`} />
          Available for opportunities
        </div>

        {/* Avatar */}
        <div className={`${s.avatar} anim-2`}>{PROFILE.avatar}</div>

        {/* Name */}
        <h1 className={`${s.name} anim-3`}>{PROFILE.name}</h1>

        {/* Typewriter */}
        <div className={`${s.typeRow} anim-4`}>
          <span className={s.typed}>
            {typed}<span className={`${s.cursor} blink`}>&nbsp;</span>
          </span>
        </div>

        {/* Bio */}
        <p className={`${s.bio} anim-5`}>{PROFILE.bio}</p>

        {/* Location */}
        <p className={`${s.location} anim-6`}>📍 {PROFILE.location}</p>

        {/* CTA */}
        <div className={`${s.ctas} anim-7`}>
          <a href="#projects" className={s.btnPrimary}>View Projects →</a>
          <a href="#contact"  className={s.btnOutline}>Get In Touch</a>
        </div>

        {/* Stats */}
        <div className={`${s.stats} anim-8`}>
          {HERO_STATS.map(({ num, suffix, label }, i) => (
            <div key={label} className={s.stat}>
              <span className={s.statNum}>
                <CountUp target={num} suffix={suffix} delay={i * 150} />
              </span>
              <span className={s.statLabel}>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
