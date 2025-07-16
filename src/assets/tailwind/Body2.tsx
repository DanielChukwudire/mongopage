import React from "react";
import { HiMiniArrowLongRight } from "react-icons/hi2";
// import Code from "../assets/Code_Windows.svg";

const Body2: React.FC = () => {
  return (
    <div className="w-full h-auto min-h-[80vh] bg-[#001E2B] flex flex-col md:flex-row justify-center items-center py-12 px-4 md:px-6 lg:px-8">
      <div className="w-full md:w-[45%] h-auto md:h-[80%] flex justify-center items-center mb-8 md:mb-0">
        <img
          //   src={Code}
          alt="Code Snippet"
          className="max-w-full h-auto object-contain"
        />
      </div>
      <div className="w-full md:w-[45%] h-auto md:h-[80%] flex justify-center items-center">
        <div className="w-full max-w-xl md:w-[80%] h-full flex flex-col justify-center gap-8 md:gap-[30px] text-center md:text-left">
          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[55px] leading-tight sm:leading-tight md:leading-tight lg:leading-[55px] font-bold">
            Built by developers, for developers
          </h2>
          <h4 className="text-gray-300 text-base sm:text-lg">
            The document data model maps to how you think and code. Break out of
            rigid, tabular data structures with flexible documents that map
            directly to objects in your code. Embed related data into a single
            document to increase performance and minimize computational cost.
          </h4>
          <p className=" text-white font-semibold flex justify-center items-center gap-3 md:self-start  text-base sm:text-lg">
            Learn the MongoDB basics
            <HiMiniArrowLongRight size={25} color="#00684A" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Body2;
