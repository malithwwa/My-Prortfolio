import { useState, useCallback } from "react";
import { PROFILE } from "@/data";
import { Reveal, SectionHeader } from "@/components/UI";
import styles from "./Contact.module.css";

const LINKS = [
  { icon: "📧", label: PROFILE.email,    href: `mailto:${PROFILE.email}` },
  { icon: "💼", label: PROFILE.linkedin, href: `https://${PROFILE.linkedin}` },
  { icon: "🐙", label: PROFILE.github,   href: `https://${PROFILE.github}` },
];

function ContactForm({ dark }) {
  const [sent, setSent]   = useState(false);
  const [form, setForm]   = useState({ name: "", email: "", message: "" });

  const update = useCallback((field) => (e) =>
    setForm((f) => ({ ...f, [field]: e.target.value })), []);

  const submit = useCallback(() => {
    if (!form.name || !form.email || !form.message) return;
    setSent(true);
    setTimeout(() => { setSent(false); setForm({ name: "", email: "", message: "" }); }, 3000);
  }, [form]);

  return (
    <div className={`glass-card ${styles.formBox}`}>
      <div className={styles.row}>
        <input
          value={form.name}
          onChange={update("name")}
          placeholder="Your name"
          className={styles.input}
          onFocus={e  => e.target.classList.add(styles.inputFocus)}
          onBlur={e   => e.target.classList.remove(styles.inputFocus)}
        />
        <input
          value={form.email}
          onChange={update("email")}
          placeholder="Email address"
          className={styles.input}
          onFocus={e  => e.target.classList.add(styles.inputFocus)}
          onBlur={e   => e.target.classList.remove(styles.inputFocus)}
        />
      </div>
      <textarea
        value={form.message}
        onChange={update("message")}
        placeholder="Tell me about your project..."
        rows={5}
        className={`${styles.input} ${styles.textarea}`}
        onFocus={e  => e.target.classList.add(styles.inputFocus)}
        onBlur={e   => e.target.classList.remove(styles.inputFocus)}
      />
      <button
        onClick={submit}
        className={`${styles.btnSend} ${sent ? styles.btnSent : ""}`}
      >
        {sent ? "✓ Message Sent!" : "Send Message →"}
      </button>
    </div>
  );
}

export default function ContactSection({ dark }) {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.inner}>
        <Reveal><SectionHeader tag="Contact" title="Let's Work Together" /></Reveal>

        <Reveal delay={100}>
          <p className={styles.subtitle}>
            Have a project in mind or just want to say hi? Drop me a message — I usually respond within 24 hours.
          </p>
        </Reveal>

        <Reveal delay={200}>
          <div className={styles.links}>
            {LINKS.map(({ icon, label, href }) => (
              <a key={href} href={href} className={styles.link}>
                {icon} {label}
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={300}>
          <ContactForm dark={dark} />
        </Reveal>
      </div>
    </section>
  );
}
