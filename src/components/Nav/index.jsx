import { useState, useCallback } from "react";
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
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);

  return (
    <>
      <nav className={s.nav} aria-label="Main navigation">
        <div className={s.inner}>
          <a href="#home" className={s.logo} aria-label="Home" onClick={close}>
            <span className={s.bracket}>{"< "}</span>MA<span className={s.bracket}>{" />"}</span>
          </a>

          {/* Desktop right side */}
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

          {/* Mobile controls */}
          <div className={s.mobileRight}>
            <button onClick={toggle} className={s.themeBtn} aria-label="Toggle theme">
              {dark ? <Icons.Sun /> : <Icons.Moon />}
            </button>
            <button
              className={`${s.hamburger} ${open ? s.hamburgerOpen : ""}`}
              onClick={() => setOpen((o) => !o)}
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div className={`${s.drawer} ${open ? s.drawerOpen : ""}`} aria-hidden={!open}>
        <div className={s.drawerLinks}>
          {LINKS.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`}
              className={`${s.drawerLink} ${active === l.toLowerCase() ? s.drawerActive : ""}`}
              onClick={close}>
              {l}
            </a>
          ))}
        </div>
        <div className={s.drawerSocials}>
          {SOCIALS.map(({ href, title, Icon }) => (
            <a key={title} href={href} target="_blank" rel="noopener noreferrer"
              title={title} aria-label={title} className={s.iconBtn} onClick={close}>
              <Icon />
            </a>
          ))}
        </div>
      </div>

      {/* Backdrop */}
      {open && <div className={s.backdrop} onClick={close} aria-hidden="true" />}
    </>
  );
}
