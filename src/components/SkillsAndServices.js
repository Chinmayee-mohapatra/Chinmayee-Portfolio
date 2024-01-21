import React from "react";
import SERVICE from "../assests/laptop-code.svg";
import skillsData from "../utils/skills.json";

const SkillsAndServices = () => {
  return (
    <div className="flex flex-col items-center gap-14 bg-purple-700 text-white px-10 py-20">
      <div className="w-1/7">
        <h1 className="text-4xl">
          Services & <span className="text-orange-200">Skills</span>
        </h1>
        <div className="border-b-2 border-white"></div>
      </div>
      <div className="flex justify-between">
        {/* Services */}
        <div className=" w-[30%] flex flex-col gap-4 py-4 items-center rounded-lg bg-white text-black">
          <div>
            <img src={SERVICE} alt="laptop" />
          </div>
          <h2 className="text-black font-semibold text-xl">
            Frontend Development
          </h2>
          <p className="w-[70%] text-justify">
            Specialized in creating high-quality, responsive websites and web
            applications. I am committed to providing my clients with the best
            possible service, and I am always happy to go the extra mile to
            ensure that their projects are successful.
          </p>
        </div>

        {/* Skills */}
        <div className="flex flex-col justify-around w-[65%]">
          {skillsData?.map((skill) => (
            <div
              key={skill.skillname}
              className="w-full flex items-center gap-1"
            >
              <p className="w-[20%] font-semibold text-lg">{skill.skillname}</p>
              <div className="w-full bg-white h-4 flex items-center px-1">
                <div
                  className={`bg-orange-200 w-[${skill.percentage}] h-2`}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsAndServices;
