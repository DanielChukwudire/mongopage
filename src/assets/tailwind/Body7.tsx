import React from "react";
import { PiGreaterThanLight } from "react-icons/pi";
// import yellow from "../assets/yellow.svg";

const Body7: React.FC = () => {
  return (
    <>
      <div className="h-[100vh] w-[100%] p-10 flex justify-center items-center">
        <div className="w-[93%] h-[90%] flex flex-col justify-between">
          <h1 className="text-[##001E2B] text-[40px] font-semibold">
            Choose your path
          </h1>
          <div className="h-[80%] w-[100%] flex justify-between items-center">
            <div className="h-[100%] w-[60%] bg-[#061621] rounded-[15px] flex justify-between items-center">
              <div className="h-[85%] w-[45%] flex gap-5 justify-center flex-col items-center">
                <p className="text-white font-semibold text-[18px] w-[90%]">
                  START HERE
                </p>
                <p className="text-[30px] font-san-serif text-white w-[90%] ">
                  Build the next big thing
                </p>
                <p className="text-[#AEBAB9] text-[18px] font-normal w-[90%]">
                  Create the applications of tomorrow with less complexity than
                  ever before
                </p>
                <div className=" text-[16px] font-bold w-[90%] h-[13%]">
                  <button className="h-[100%] rounded-[5px] w-[150px] bg-[#00ED64]">
                    Start Free
                  </button>
                </div>
              </div>
              <img
                // src={yellow}
                alt=""
                className="h-[100%] w-[51%] object-cover"
              />
            </div>
            <div className="h-[100%] w-[35%] border border-gray-400 rounded-[20px] flex justify-center items-center">
              <div className="h-[70%] w-[70%] mb-8">
                <p className="text-[#437C6F] font-semibold text-[18px]">
                  More Information
                </p>
                <div className="h-[25%] w-[100%] flex border-b-2 border-[#b8c4c2] gap-5 items-center">
                  <div className="h-[10px] w-[10px] rounded-[50px] bg-[#006CFA]"></div>
                  <p className="flex justify-center items-center gap-3">
                    Atlas
                    <PiGreaterThanLight size={15} color="#00684A" />
                  </p>
                </div>
                <div className="h-[25%] w-[100%] border-b-2 border-[#b8c4c2] flex gap-5 items-center">
                  <div className="h-[10px] w-[10px] rounded-[50px] bg-[#006CFA]"></div>
                  <p className="flex justify-center items-center gap-3">
                    Documentation{" "}
                    <PiGreaterThanLight size={15} color="#00684A" />
                  </p>
                </div>
                <div className="h-[25%] w-[100%] border-b-2 border-[#b8c4c2] flex gap-5 items-center">
                  <div className="h-[10px] w-[10px] rounded-[50px] bg-[#006CFA]"></div>
                  <p className="flex justify-center items-center gap-3">
                    Pricing
                    <PiGreaterThanLight size={15} color="#00684A" />
                  </p>
                </div>
                <div className="h-[25%] w-[100%] border-b-2 border-[#b8c4c2] flex gap-5 items-center">
                  <div className="h-[10px] w-[10px] rounded-[50px] bg-[#006CFA]"></div>
                  <p className="flex justify-center items-center gap-3">
                    Contact Us
                    <PiGreaterThanLight size={15} color="#00684A" />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Body7;
