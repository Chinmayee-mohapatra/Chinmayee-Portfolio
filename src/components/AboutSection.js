import React from "react";
import AboutMe from "./AboutMe";
import SkillsAndServices from "./SkillsAndServices";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

const AboutSection = () => {
  return (
    <div>
      <section id="about">
        <AboutMe />
      </section>
      {/* Services and skills */}
      <section id="services-skills">
        <SkillsAndServices />
      </section>
      {/* Portfolio */}
      <section id="projects">
        <Portfolio />
      </section>
      {/* Contact */}
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default AboutSection;
