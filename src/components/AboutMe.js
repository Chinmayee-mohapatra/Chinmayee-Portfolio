import React from "react";
import MY_IMAGE from "../assests/self-image.jpg";

const AboutMe = () => {
  return (
    <div className="bg-deep-blue flex flex-col items-center gap-4 p-10 text-white">
      <div className="w-1/7">
        <h1 className="text-4xl">
          About <span className="text-orange">Me</span>
        </h1>
        <div className="border-b-2 border-white"></div>
      </div>
      <div className="w-full flex justify-between items-center mt-10">
        {/* image */}
        <div className="w-[50%] flex justify-around">
          <img
            src={MY_IMAGE}
            alt="potrait"
            className="w-72 rounded-lg shadow-purple-700 shadow-2xl hover:scale-105 duration-300"
          />
        </div>
        <div className="w-[50%] space-y-8">
          <h2 className="text-3xl">React JS Developer</h2>
          <p className="text-base text-justify w-[80%]">
            I am Chinmayee Mohapatra a frontend web developer with a passion for
            creating user-friendly and engaging experiences. I have experience
            working with a variety of technologies and frameworks, and I am
            always looking for new ways to improve my skills.
          </p>
          <p className="text-base  text-justify w-[80%]">
            I am proficient in JavaScript, ReactJS, Redux Toolkit, and Tailwind
            CSS. I have used these technologies to build large-scale web
            applications that are both functional and aesthetically pleasing.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
