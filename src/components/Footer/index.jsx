import { PROFILE } from "@/data";
import s from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={s.footer}>
      <p className={s.text}>
        Crafted with ❤️ in Colombo, Sri Lanka · {new Date().getFullYear()} {PROFILE.name}
      </p>
    </footer>
  );
}
