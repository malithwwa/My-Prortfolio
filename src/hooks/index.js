import { useState, useEffect, useRef, useCallback } from "react";

// ── useTheme ─────────────────────────────────────────────────────
export function useTheme() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
  }, [dark]);

  const toggle = useCallback(() => setDark((d) => !d), []);
  return { dark, toggle };
}

// ── useActiveSection ──────────────────────────────────────────────
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

// ── useScrollReveal ───────────────────────────────────────────────
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

// ── useTypewriter ─────────────────────────────────────────────────
export function useTypewriter(words, { typeSpeed = 60, deleteSpeed = 35, pause = 2000, gap = 400 } = {}) {
  const [typed, setTyped] = useState("");
  const wordIdx  = useRef(0);
  const charIdx  = useRef(0);
  const deleting = useRef(false);

  useEffect(() => {
    let timer;
    const tick = () => {
      const word = words[wordIdx.current];
      if (!deleting.current) {
        if (charIdx.current < word.length) {
          charIdx.current++;
          setTyped(word.slice(0, charIdx.current));
          timer = setTimeout(tick, typeSpeed);
        } else {
          timer = setTimeout(() => { deleting.current = true; tick(); }, pause);
        }
      } else {
        if (charIdx.current > 0) {
          charIdx.current--;
          setTyped(word.slice(0, charIdx.current));
          timer = setTimeout(tick, deleteSpeed);
        } else {
          deleting.current = false;
          wordIdx.current  = (wordIdx.current + 1) % words.length;
          timer = setTimeout(tick, gap);
        }
      }
    };
    timer = setTimeout(tick, 800);
    return () => clearTimeout(timer);
  }, []); // eslint-disable-line

  return typed;
}

// ── useCountUp ────────────────────────────────────────────────────
export function useCountUp(target, { duration = 1800, steps = 60, delay = 0 } = {}) {
  const [count, setCount] = useState(0);
  const [ref, visible]   = useScrollReveal(0.5);
  const started          = useRef(false);

  useEffect(() => {
    if (!visible || started.current) return;
    started.current = true;
    const timer = setTimeout(() => {
      let step = 0;
      const iv = setInterval(() => {
        step++;
        setCount(Math.round(target * (1 - Math.pow(1 - step / steps, 3))));
        if (step >= steps) { setCount(target); clearInterval(iv); }
      }, duration / steps);
    }, delay);
    return () => clearTimeout(timer);
  }, [visible, target, delay, duration, steps]);

  return [ref, count];
}
