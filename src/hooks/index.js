import { useState, useEffect, useRef, useCallback } from "react";

// ── useTheme ─────────────────────────────────────────────────
export function useTheme() {
  const [dark, setDark] = useState(true);
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
  }, [dark]);
  const toggle = useCallback(() => setDark((d) => !d), []);
  return { dark, toggle };
}

// ── useActiveSection ──────────────────────────────────────────
export function useActiveSection() {
  const [active, setActive] = useState("home");
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); }),
      { threshold: 0.4 }
    );
    document.querySelectorAll("section[id]").forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);
  return active;
}

// ── useScrollReveal ───────────────────────────────────────────
export function useScrollReveal(threshold = 0.12) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

// ── useTypewriter ─────────────────────────────────────────────
export function useTypewriter(words) {
  const [typed, setTyped] = useState("");
  const idx     = useRef(0);
  const charIdx = useRef(0);
  const del     = useRef(false);

  useEffect(() => {
    let t;
    const tick = () => {
      const word = words[idx.current];
      if (!del.current) {
        if (charIdx.current < word.length) {
          setTyped(word.slice(0, ++charIdx.current));
          t = setTimeout(tick, 60);
        } else {
          t = setTimeout(() => { del.current = true; tick(); }, 2000);
        }
      } else {
        if (charIdx.current > 0) {
          setTyped(word.slice(0, --charIdx.current));
          t = setTimeout(tick, 35);
        } else {
          del.current = false;
          idx.current = (idx.current + 1) % words.length;
          t = setTimeout(tick, 400);
        }
      }
    };
    t = setTimeout(tick, 800);
    return () => clearTimeout(t);
  }, []); // eslint-disable-line
  return typed;
}

// ── useCountUp ────────────────────────────────────────────────
export function useCountUp(target, delay = 0) {
  const [count, setCount]  = useState(0);
  const [ref, visible]     = useScrollReveal(0.5);
  const started            = useRef(false);

  useEffect(() => {
    if (!visible || started.current) return;
    started.current = true;
    const t = setTimeout(() => {
      let step = 0;
      const steps = 60;
      const iv = setInterval(() => {
        step++;
        setCount(Math.round(target * (1 - Math.pow(1 - step / steps, 3))));
        if (step >= steps) { setCount(target); clearInterval(iv); }
      }, 1800 / steps);
    }, delay);
    return () => clearTimeout(t);
  }, [visible, target, delay]);

  return [ref, count];
}
