import React from "react";

const NewsLetter = () => {
  return (
    <div className="w-full py-16">
      <div className=" px-4 max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 my-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold py-2">
            Want tips & tricks to optimize your flow?
          </h1>
          <p>Sign Up to our newsletter and stay up to date</p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row justify-between items-center w-full">
            <input
              className="p-3 flex w-full rounded-md text-black bg-white"
              type="email"
              placeholder="Enter Email"
            />
            <button className="bg-[#00df9a] w-[200px] rounded-md font-medium sm:ml-4 my-6 mx-auto px-6 py-3 text-black">
              Notify Me
            </button>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
            qui eos. Ipsa debitis incidunt sapiente.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
