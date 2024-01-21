import React from "react";
import projectData from "../utils/projects.json";

const Portfolio = () => {
  return (
    <div className="bg-deep-blue flex flex-col items-center gap-14 text-white px-10 py-20">
      <div className="w-1/7">
        <h1 className="text-4xl">Portfolio</h1>
        <div className="border-b-2 border-white"></div>
      </div>

      {/* Project cards */}
      <div className="flex gap-10">
        {projectData?.map((project) => (
          <div
            key={project.projectName}
            className=" bg-white text-black relative group"
          >
            <div className="w-full text-white relative flex justify-between ">
              <img
                src={project.projectImage}
                alt="project"
                className="group-hover:opacity-50"
              />
              <div className="absolute top-[30%] left-[28%] px-8 py-2 space-y-2 text-center bg-purple-10 shadow-purple-700  shadow-[5px_5px_0px_0px_rgba(109,40,217)] text-purple-700 transition-all duration-300 -z-20 opacity-0 group-hover:opacity-100 group-hover:z-20">
                <p className="text-2xl font-bold">{project.projectName}</p>
                <p className="text-lg font-semibold text-black">
                  <a
                    href={project.projectLink}
                    rel="noreferrer"
                    target="_blank"
                  >
                    Project Link
                  </a>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
