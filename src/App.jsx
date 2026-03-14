import { useTheme, useActiveSection } from "./hooks";
import Nav        from "./components/Nav";
import Hero       from "./components/Hero";
import Skills     from "./components/Skills";
import Projects   from "./components/Projects";
import Experience from "./components/Experience";
import Contact    from "./components/Contact";
import Footer     from "./components/Footer";

export default function App() {
  const { dark, toggle } = useTheme();
  const active           = useActiveSection();

  return (
    <>
      <Nav dark={dark} toggle={toggle} active={active} />
      <main>
        <Hero     dark={dark} />
        <Skills   />
        <Projects />
        <Experience />
        <Contact  />
      </main>
      <Footer />
    </>
  );
}
