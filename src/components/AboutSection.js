import React from "react";
import AboutMe from "./AboutMe";
import SkillsAndServices from "./SkillsAndServices";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

const AboutSection = () => {
  return (
    <div>
      {/* About section */}
      <AboutMe />
      {/* Services and skills */}
      <SkillsAndServices />
      {/* Portfolio */}
      <Portfolio />
      {/* Contact */}
      <Contact />
    </div>
  );
};

export default AboutSection;
