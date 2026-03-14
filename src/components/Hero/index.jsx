import { PROFILE, HERO_ROLES, HERO_STATS } from "@/data";
import { useTypewriter } from "@/hooks";
import { CountUp } from "@/components/UI";
import styles from "./Hero.module.css";

export default function HeroSection({ dark }) {
  const typed = useTypewriter(HERO_ROLES);

  return (
    <section id="home" className={styles.section}>
      <div className={styles.content}>

        {/* Available badge */}
        <div className={`${styles.badge} anim-fade-1`}>
          <span className={`${styles.dot} pulse-dot`} />
          <span>Available for opportunities</span>
        </div>

        {/* Avatar */}
        <div className={`${styles.avatar} anim-fade-2`}>
          {PROFILE.avatar}
        </div>

        {/* Name */}
        <h1 className={`${styles.name} anim-fade-3`}>{PROFILE.name}</h1>

        {/* Typewriter */}
        <div className={`${styles.typeRow} anim-fade-4`}>
          <span className={styles.typed}>
            {typed}
            <span className={`${styles.cursor} blink`}>&nbsp;</span>
          </span>
        </div>

        {/* Bio */}
        <p className={`${styles.bio} anim-fade-5`}>{PROFILE.bio}</p>

        {/* Location */}
        <p className={`${styles.location} anim-fade-6`}>📍 {PROFILE.location}</p>

        {/* CTA buttons */}
        <div className={`${styles.ctas} anim-fade-7`}>
          <a href="#projects" className={styles.btnPrimary}>View Projects →</a>
          <a href="#contact"  className={styles.btnOutline}>Get In Touch</a>
        </div>

        {/* Stats */}
        <div className={`${styles.stats} anim-fade-8`}>
          {HERO_STATS.map(({ num, suffix, label }, i) => (
            <div key={label} className={styles.stat} data-last={i === HERO_STATS.length - 1 || undefined}>
              <div className={styles.statNum}>
                <CountUp target={num} suffix={suffix} delay={i * 150} />
              </div>
              <div className={styles.statLabel}>{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
