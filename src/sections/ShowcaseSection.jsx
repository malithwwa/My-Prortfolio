import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import TitleHeader from "../components/TitleHeader.jsx";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <TitleHeader
            title="Featured Projects"
            sub="📋 My Work Showcase"
        />
        <div className="showcaselayout mt-22">
          <div ref={rydeRef} className="first-project-wrapper card-border rounded-xl p-8">
              <div className="image-wrapper">
              <img src="/images/project1.png" alt="Ryde App Interface"/>
            </div>
            <div className="text-content">
              <h2>
                Empowering Organizations to Prevent Phishing Attacks
              </h2>
              <p className="text-white-50 md:text-xl">
                A web application designed to help organizations prevent phishing attacks by simulating real-world phishing scenarios.
              </p>
              <div className="flex flex-row gap-4">
                <a href="#" className="action-btn group">
                  <div className="inner">
                    <img src="/images/github.png" alt="github Logo" className="w-6 h-6 object-fit"/>
                    <span> Github</span>
                  </div>
                </a>
                <a href="#" className="action-btn group">
                  <div className="inner">
                    <img src="/images/live.png" alt="github Logo" className="w-6 h-6 object-fit"/>
                    <span>Live</span>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project card-border rounded-xl p-8" ref={libraryRef}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <img
                    src="/images/project2.png"
                    alt="Library Management Platform"
                />
              </div>
              <h2>Designed to Bring Gamers Together</h2>
              <p className="text-white-50 md:text-md mt-2">
                An online hub where players can explore games, track progress, and connect with others.
              </p>
              <div className="flex flex-row gap-4 mt-4">
                <a href="#" className="action-btn group">
                  <div className="inner">
                    <img src="/images/github.png" alt="github Logo" className="w-6 h-6 object-fit"/>
                    <span> Github</span>
                  </div>
                </a>
                <a href="#" className="action-btn group">
                  <div className="inner">
                    <img src="/images/live.png" alt="github Logo" className="w-6 h-6 object-fit"/>
                    <span>Live</span>
                  </div>
                </a>
              </div>
            </div>

            <div className="project card-border rounded-xl p-8" ref={ycDirectoryRef}>
              <div className="image-wrapper bg-[#FFE7EB]">
                <img src="/images/project3.png" alt="YC Directory App"/>
              </div>
              <h2>YC Directory - A Startup Showcase App</h2>
              <p className="text-white-50 md:text-md mt-2">
                A web application designed to help organizations prevent phishing attacks by simulating real-world
                phishing scenarios.
              </p>
              <div className="flex flex-row gap-4 mt-4">
                <a href="#" className="action-btn group">
                  <div className="inner">
                    <img src="/images/github.png" alt="github Logo" className="w-6 h-6 object-fit"/>
                    <span> Github</span>
                  </div>
                </a>
                <a href="#" className="action-btn group">
                  <div className="inner">
                    <img src="/images/live.png" alt="github Logo" className="w-6 h-6 object-fit"/>
                    <span>Live Demo</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
