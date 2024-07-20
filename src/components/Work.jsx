import React from "react";
import { data } from "../data/data.js";

const Work = () => {
  const project = data;

  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Work
          </p>
          <p className="py-6">// Check out some of my recent work</p>
        </div>

        {/* container for projects */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Grid Item */}
          {project.map((item, index) => (
            <div
              key={index}
              className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex flex-col justify-center items-center mx-auto transition-transform transform hover:scale-105 duration-300"
            >
              <div
                style={{
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                className="w-full h-48 flex justify-center items-center rounded-t-md"
              >
                {/* Hover effect for images */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-75 w-full h-full flex items-center justify-center">
                  <a
                    href={item.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2
                       bg-pink-600 text-white font-bold text-lg hover:bg-pink-700 transition duration-300"
                    >
                      Code
                    </button>
                  </a>
                </div>
              </div>
              <div className="w-full bg-[#0a192f] p-4 rounded-b-md">
                <p className="text-2xl font-bold text-white text-center">
                  {item.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;