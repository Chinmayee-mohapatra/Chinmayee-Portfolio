import React from "react";
import BANNER from "../assests/Banner Image.png";
import Resume from "../assests/Chinmayee_Mohapatra_RESUME.pdf";
const IntroSection = () => {
  return (
    <div className="w-full bg-purple-700 flex flex-col-reverse md:flex-row justify-between items-center text-white p-10 md:p-20 gap-4">
      {/* Intro side */}
      <div className="w-full md:w-[60%] flex flex-col gap-4">
        <p className="text-orange-200 text-xl md:text-3xl">Hi, It's me</p>
        <h1 className="text-4xl md:text-6xl">Chinmayee Mohapatra</h1>
        <h2 className="text-2xl md:text-4xl">
          And I'm a <span className="text-orange-200">Frontend Developer</span>{" "}
        </h2>
        <p className="text-base md:text-lg w-full text-justify md:text-left md:w-[90%] ">
          M.Tech graduate with experience working in JavaScript, ReactJS, Redux,
          Tailwind CSS technologies for developing large scale applications.
        </p>

        <div>
          <a
            href={Resume}
            download="Chinmayee_Mohapatra_RESUME"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-4 md:px-8 py-1 bg-orange-400 text-sm md:text-base rounded-full font-semibold mt-4">
              Download CV
            </button>
          </a>
        </div>
      </div>
      {/* Banner */}
      <div className="w-full md:w-[40%]">
        <img src={BANNER} alt="banner-img" />
      </div>
    </div>
  );
};

export default IntroSection;
