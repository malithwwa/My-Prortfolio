import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import AnimatedCounter from "../components/AnimatedCounter";
import Button from "../components/Button";
import { words } from "../constants";
import HeroExperience from "../components/models/hero_models/HeroExperience";

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
    );
  });

  return (
    <section id="hero" className="relative overflow-hidden w-full">
      <div className="w-full">
        <div className="absolute top-0 left-0 z-10">
          <img src="/images/bg.png" alt=""/>
        </div>
        <div className="hero-layout">
          {/* LEFT: Hero Content */}
          <header className="flex flex-col pt-2 justify-center md:w-full w-screen md:px-20 px-5">
            <div className="flex flex-col gap-7">
              <div className="hero-text">
                <h1>
                  Shaping
                  <span className="slide">
                  <span className="wrapper">
                    {words.map((word, index) => (
                        <span
                            key={index}
                            className="flex items-center md:gap-3 gap-1 pb-2"
                        >
                        <img
                            src={word.imgPath}
                            alt="person"
                            className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
                </h1>
                <h1>into Real Projects</h1>
                <h1>that Deliver Results</h1>
              </div>

              <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
                Hi, I’m Malith, a Software Engineer based in Sri Lanka with a passion for
                code.
              </p>

              <Button
                  text="See My Work"
                  className="md:w-80 md:h-16 w-60 h-12"
                  id="counter"
              />
            </div>
          </header>

          {/* RIGHT: 3D Model or Visual */}
          <figure>
            <div
                className="flex flex-col items-center justify-center md:w-full h-full w-screen md:px-20 px-5 lg:pt-0 pt-10">
              {/*<HeroExperience />*/}
              <img alt="profile_pic" src="https://avatars.githubusercontent.com/u/68750719?v=4"
                   className="rounded-full brightness-75 lg:w-220 w-100 h-auto"/>
            </div>
          </figure>
        </div>

        {/*<AnimatedCounter/>*/}
      </div>
    </section>
  );
};

export default Hero;
