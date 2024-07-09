import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const About = () => {
  return (
    <section
      name="About"
      className="relative w-full md:h-screen text-white h-unset"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full text-lg">
        <div className="pb-8">
          <h2 className="text-4xl sm:text-5xl font-bold inline border-b-4 border-primary-color/40">
            About me
          </h2>
        </div>

        <p className="mb-5 py-7">
          Hello! I'm Paritosh Rawat, a dedicated MERN stack developer skilled in
          MongoDB, Express.js, React, and Node.js. I specialize in building
          dynamic, responsive web applications and thrive on solving complex
          problems. I enjoy both front-end and back-end development and am
          committed to continuous learning and delivering high-quality code.
          When I'm not coding, I explore new tech trends and contribute to
          open-source projects. Feel free to reach out for collaboration or to
          discuss exciting tech ideas!
        </p>
      </div>

      <ScrollLink
        to="Projects"
        smooth
        duration={500}
        className="absolute bottom-2 -left-full md:left-1/2 md:-translate-x-1/2 cursor-pointer hover:text-primary-color"
      >
        <i className="bx bx-chevron-down text-7xl text-gray-400 animate-bounce font hover:text-primary-color"></i>
      </ScrollLink>
    </section>
  );
};

export default About;
