import React from "react";

const Body1: React.FC = () => {
  return (
    <div className="w-full h-screen sm:h-[50vh] flex justify-center items-center bg-[#001E2B] py-8 px-4">
      <div className="w-full max-w-[90%] h-[70%] bg-[#061621] rounded-[20px] flex flex-col md:flex-row justify-center items-center p-[20px] gap-6 md:gap-10">
        <div className="w-full md:w-[40%] h-auto md:h-[60%] flex flex-col justify-center text-white gap-[10px] text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[34px] font-bold">
            MongoDB AI is here to help
          </h2>
          <h4 className="text-base sm:text-lg text-gray-300">
            Ask our AI assistant to help you find what you’re looking for
          </h4>
        </div>
        <input
          type="text"
          className="w-full md:w-[55%] h-12 md:h-[60%] rounded-[10px] border border-white bg-[#21313C] text-white p-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Ask MongoDB AI a question..."
        />
      </div>
    </div>
  );
};

export default Body1;
