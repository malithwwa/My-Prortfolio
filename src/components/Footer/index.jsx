import { PROFILE } from "@/data";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.text}>
        Crafted with ❤️ in Colombo, Sri Lanka · {new Date().getFullYear()} {PROFILE.name}
      </p>
    </footer>
  );
}
