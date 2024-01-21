import React from "react";
import BANNER from "../assests/Banner Image.png";

const IntroSection = () => {
  return (
    <div className="w-full bg-purple-700 flex justify-between items-center text-white p-20 gap-4">
      {/* Intro side */}
      <div className="w-[60%] flex flex-col gap-4">
        <p className="text-orange-200 text-3xl">Hi, It's me</p>
        <h1 className=" text-6xl">Chinmayee Mohapatra</h1>
        <h2 className=" text-4xl">
          And I'm a <span className="text-orange-200">Frontend Developer</span>{" "}
        </h2>
        <p className="text-lg w-[90%] ">
          M.Tech graduate with experience working in JavaScript, ReactJS, Redux,
          Tailwind CSS technologies for developing large scale applications.
        </p>

        <div>
          <button className="px-8 py-1 bg-orange-400 rounded-full font-semibold mt-4">
            Download CV
          </button>
        </div>
      </div>
      {/* Banner */}
      <div className="w-[40%]">
        <img src={BANNER} alt="banner-img" className="" />
      </div>
    </div>
  );
};

export default IntroSection;
