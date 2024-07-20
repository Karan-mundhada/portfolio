import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600 p-1">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Karan Mundhada
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a FrontEnd Developer and ML Enthusiast.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          As a front-end developer with a strong background in Data Structures
          and Algorithms, Python, and Machine Learning, I bring a comprehensive
          skill set to every project. I was selected for the highly competitive
          Amazon ML Summer School, further honing my expertise. My passion lies
          in solving complex problems and developing innovative solutions that
          make a meaningful impact.
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3 " />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
