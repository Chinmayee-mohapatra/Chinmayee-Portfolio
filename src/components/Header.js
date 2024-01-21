import React from "react";
import LOGO from "../assests/logo.jpg";

const Header = () => {
  return (
    <div className="w-full z-10 bg-deep-blue text-white fixed text-xs sm:text-sm md:text-base ">
      <div className="flex justify-between items-center mx-5 py-2">
        <div>
          <img src={LOGO} alt="logo" width={80} />
        </div>

        <div>
          <ul className="flex gap-2 sm:gap-4 md:gap-10 font-normal md:font-semibold tracking-tight md:tracking-wider">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services-skills">Services</a>
            </li>
            <li>
              <a href="#services-skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        <div>
          <button className="bg-white text-purple-700 border-deep-blue font-medium rounded-md px-2 md:px-4 py-1 md:py-2 hover:scale-105 duration-200">
            <a href="#contact">Hire Me</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
