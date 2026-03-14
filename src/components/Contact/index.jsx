import { useState, useCallback } from "react";
import { PROFILE } from "@/data";
import { Reveal, SectionHeader } from "@/components/UI";
import s from "./Contact.module.css";

const LINKS = [
  { icon: "📧", label: PROFILE.email,    href: `mailto:${PROFILE.email}` },
  { icon: "💼", label: PROFILE.linkedin, href: `https://${PROFILE.linkedin}` },
  { icon: "🐙", label: PROFILE.github,   href: `https://${PROFILE.github}` },
];

function ContactForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const update = useCallback((f) => (e) => setForm((p) => ({ ...p, [f]: e.target.value })), []);

  const submit = useCallback(() => {
    if (!form.name || !form.email || !form.message) return;
    setSent(true);
    setTimeout(() => { setSent(false); setForm({ name: "", email: "", message: "" }); }, 3000);
  }, [form]);

  return (
    <div className={`glass ${s.formBox}`}>
      <div className={s.row}>
        <input value={form.name}  onChange={update("name")}  placeholder="Your name"      className={s.input} />
        <input value={form.email} onChange={update("email")} placeholder="Email address"  className={s.input} />
      </div>
      <textarea value={form.message} onChange={update("message")} placeholder="Tell me about your project..." rows={5} className={`${s.input} ${s.textarea}`} />
      <button onClick={submit} className={`${s.btnSend} ${sent ? s.sent : ""}`} disabled={sent}>
        {sent ? "✓ Message Sent!" : "Send Message →"}
      </button>
    </div>
  );
}

export default function Contact() {
  return (
    <section id="contact" className={s.section}>
      <div className={s.inner}>
        <Reveal><SectionHeader tag="Contact" title="Let's Work Together" /></Reveal>
        <Reveal delay={100}>
          <p className={s.subtitle}>
            Have a project in mind or just want to say hi? Drop me a message — I usually respond within 24 hours.
          </p>
        </Reveal>
        <Reveal delay={200}>
          <div className={s.links}>
            {LINKS.map(({ icon, label, href }) => (
              <a key={href} href={href} className={s.link}>{icon} {label}</a>
            ))}
          </div>
        </Reveal>
        <Reveal delay={300}><ContactForm /></Reveal>
      </div>
    </section>
  );
}
