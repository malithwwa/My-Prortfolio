import { PROFILE } from "@/data";
import { Icons } from "@/components/UI";
import s from "./Nav.module.css";

const LINKS   = ["Home", "Skills", "Projects", "Experience", "Contact"];
const SOCIALS = [
  { href: `mailto:${PROFILE.email}`,     title: "Email",    Icon: Icons.Email    },
  { href: `https://${PROFILE.linkedin}`, title: "LinkedIn", Icon: Icons.LinkedIn },
  { href: `https://${PROFILE.github}`,   title: "GitHub",   Icon: Icons.GitHub   },
];

export default function Nav({ dark, toggle, active }) {
  return (
    <nav className={s.nav} aria-label="Main navigation">
      <div className={s.inner}>
        <a href="#home" className={s.logo} aria-label="Home">
          <span className={s.bracket}>{"<"}</span>KP<span className={s.bracket}>{"/>"}</span>
        </a>
        <div className={s.right}>
          {LINKS.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`}
              className={`${s.link} ${active === l.toLowerCase() ? s.active : ""}`}>
              {l}
            </a>
          ))}
          <div className={s.socials}>
            {SOCIALS.map(({ href, title, Icon }) => (
              <a key={title} href={href} target="_blank" rel="noopener noreferrer"
                title={title} aria-label={title} className={s.iconBtn}>
                <Icon />
              </a>
            ))}
          </div>
          <button onClick={toggle} className={s.themeBtn} aria-label="Toggle theme">
            {dark ? <Icons.Sun /> : <Icons.Moon />}
          </button>
        </div>
      </div>
    </nav>
  );
}
