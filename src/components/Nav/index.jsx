import { PROFILE } from "@/data";
import { Icons } from "@/components/UI";
import styles from "./Nav.module.css";

const NAV_LINKS   = ["Home", "Skills", "Projects", "Experience", "Contact"];
const NAV_SOCIALS = [
  { href: `mailto:${PROFILE.email}`,     title: "Email",    Icon: Icons.Email    },
  { href: `https://${PROFILE.linkedin}`, title: "LinkedIn", Icon: Icons.LinkedIn },
  { href: `https://${PROFILE.github}`,   title: "GitHub",   Icon: Icons.GitHub   },
];

export default function Nav({ dark, toggle, active }) {
  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        {/* Logo */}
        <a href="#home" className={styles.logo}>
          <span className={styles.bracket}>{"<"}</span>KP<span className={styles.bracket}>{"/>"}</span>
        </a>

        {/* Right side */}
        <div className={styles.right}>
          {/* Nav links */}
          {NAV_LINKS.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className={`${styles.link} ${active === l.toLowerCase() ? styles.linkActive : ""}`}
            >
              {l}
            </a>
          ))}

          {/* Social icons */}
          <div className={styles.socials}>
            {NAV_SOCIALS.map(({ href, title, Icon }) => (
              <a key={title} href={href} target="_blank" rel="noopener noreferrer" title={title} className={styles.iconBtn}>
                <Icon />
              </a>
            ))}
          </div>

          {/* Theme toggle */}
          <button onClick={toggle} className={styles.themeBtn} aria-label="Toggle theme">
            {dark ? <Icons.Sun /> : <Icons.Moon />}
          </button>
        </div>
      </div>
    </nav>
  );
}
