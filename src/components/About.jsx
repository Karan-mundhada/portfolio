import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
                  Hello <br></br>I'm Karan Mundhada Please take a look
              around
            </p>
          </div>
          <div>
            <p>
              I am passionate about solving complex problems and developing
              innovative software solutions. With a strong specialization in
              Data Structures and Algorithms (DSA), Python, and Machine Learning
              (ML), I bring a wealth of expertise to every project. My
              experience spans crafting efficient algorithms, developing
              intelligent models, and building scalable applications. Whether
              it's for individuals, small businesses, or large enterprises, I am
              dedicated to delivering high-quality software that makes a
              meaningful impact. Imagine the possibilities with a
              problem-solving expert in software development right at your
              fingertips.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;