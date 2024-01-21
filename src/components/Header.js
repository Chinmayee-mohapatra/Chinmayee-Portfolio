import React from "react";
import LOGO from "../assests/logo.jpg";

const Header = () => {
  return (
    <div className="w-full z-10 bg-deep-blue text-white fixed">
      <div className="flex justify-between items-center mx-5 py-2">
        <div>
          <img src={LOGO} alt="logo" width={80} />
        </div>

        <div>
          <ul className="flex gap-10 font-semibold tracking-wider">
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
          <button className="bg-white text-purple-700 border-deep-blue border-2 hover:border-purple-700 font-medium rounded-md px-4 py-2 hover:scale-105 duration-200">
            <a href="#contact">Hire Me</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
