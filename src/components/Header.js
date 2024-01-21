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
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Skills</li>
            <li>Portfolio</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <button className="bg-white text-purple-700 border-deep-blue border-2 hover:border-purple-700 font-medium rounded-md px-4 py-2 hover:scale-105 duration-200">
            Hire Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
