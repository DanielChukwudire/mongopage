import React from "react";

const Body3: React.FC = () => {
  return (
    <div className="w-full h-auto min-h-[80vh] bg-[#001E2B] flex flex-wrap justify-center items-center gap-[15px] py-12 px-4 md:px-6 lg:px-8">
      <div className="w-full sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-10px)] h-auto min-h-[360px] border border-gray-400 rounded-[20px] flex justify-center items-center p-4">
        <div className="w-[85%] h-[85%] flex flex-col justify-between">
          <div className="w-[80px] h-[70px] bg-red-500 rounded-md"></div>
          <h4 className="text-[20px] text-white font-semibold">Docs</h4>
          <p className="text-gray-300 text-base">
            Reference manuals, articles, and code samples — all the technical
            documentation you need to deploy, configure, and run MongoDB.
          </p>
          <button className="w-[150px] h-10 text-white border border-gray-500 rounded-md hover:bg-gray-700 transition-colors duration-300 self-start">
            Documentation
          </button>
        </div>
      </div>

      <div className="w-full sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-10px)] h-auto min-h-[360px] border border-gray-400 rounded-[20px] flex justify-center items-center p-4">
        <div className="w-[85%] h-[85%] flex flex-col justify-between">
          <div className="w-[80px] h-[70px] bg-red-500 rounded-md"></div>
          <h4 className="text-[20px] text-white font-semibold">
            MongoDB University
          </h4>
          <p className="text-gray-300 text-base">
            Level up your MongoDB skills with free courses, labs, badges, and
            MongoDB certification.
          </p>
          <button className="w-[150px] h-10 text-white border border-gray-500 rounded-md hover:bg-gray-700 transition-colors duration-300 self-start">
            Start learning today
          </button>
        </div>
      </div>

      <div className="w-full sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-10px)] h-auto min-h-[360px] border border-gray-400 rounded-[20px] flex justify-center items-center p-4">
        <div className="w-[85%] h-[85%] flex flex-col justify-between">
          <div className="w-[80px] h-[70px] bg-red-500 rounded-md"></div>
          <h4 className="text-[20px] text-white font-semibold">Docs</h4>
          <p className="text-gray-300 text-base">
            Reference manuals, articles, and code samples — all the technical
            documentation you need to deploy, configure, and run MongoDB.
          </p>
          <button className="w-[150px] h-10 text-white border border-gray-500 rounded-md hover:bg-gray-700 transition-colors duration-300 self-start">
            Documentation
          </button>
        </div>
      </div>
    </div>
  );
};

export default Body3;
