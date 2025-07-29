import React from "react";
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div>
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#00df9a] uppercase sm:mt-18 font-bold p-2">
          Growing with Data Analytics
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-4">
          Grow With Data
        </h1>
        <div className="flex items-center justify-center gap-2 md:gap-3">
          <p className="md:text-5xl sm:4xl text-xl font-bold py-3">
            Fast, Flexible financing for
          </p>
          <ReactTyped
            className="md:text-5xl sm:4xl text-xl font-bold"
            strings={["BTB", "BTC", "SASS"]}
            typeSpeed={120}
            backSpeed={140}
          />
        </div>
        <p className="text-xl md:text-2xl font-bold text-gray-500 md:pt-2">
          Monitor your Data Analytics to increase revenue for BTB, BTC, & SASS
          platforms
        </p>
        <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-black">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
