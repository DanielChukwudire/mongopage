hero.tsx;
import React from "react";

const Hero: React.FC = () => {
  return (
    <div className="w-full h-[900px] min-h-max flex justify-center items-center bg-white">
      <div className="w-[90%] h-[90%] min-h-max flex flex-col gap-[45px]">
        <div className="w-full h-15 rounded-lg bg-[#F5F7FA] flex justify-center items-center shadow-[rgba(100,_100,_111,_0.2)_0px_7px_29px_0px]]">
          <div className="w-[95%] h-full flex justify-between items-center">
            <h4 className="text-base sm:text-lg lg:text-xl font-medium text-gray-800">
              Take a free test drive of MongoDB Atlas and experience the power
              and versatility for yourself!
            </h4>
            <button className="w-[150px] h-10 rounded-full border-[1.5px] border-black text-black text-sm font-semibold transition-colors hover:bg-gray-100">
              Try Free Demo
            </button>
          </div>
        </div>

        <div className="w-[30%] h-[25px] border-l-4 border-[#00ED64] pl-[10px]">
          <h4 className="text-gray-600 text-sm font-semibold">MONGODB ATLAS</h4>
        </div>

        <h2 className="w-[57%] text-[60px] font-normal leading-tight text-gray-900">
          Loved by developers. <br /> Built for
          <span className="text-[#00ED64] font-medium h-[100px] border border-black rounded-[20px] px-5 py-[3px] ml-3 inline-block">
            Streaming data
          </span>
        </h2>

        <h4 className="w-[65%] text-lg font-normal text-gray-700">
          You don't need a separate database to handle transactions, rich
          search, or generative AI. The world's most popular modern database
          adapts and scales to handle all your application requirements.
        </h4>

        <div className="w-[20%] h-[100px] flex justify-between items-center">
          <button className="w-[150px] h-[50px] bg-[#00ED64] border-[1.5px] border-black rounded-lg text-black font-semibold transition-colors hover:bg-[#00ED64]/80">
            Get Started
          </button>
          <button>Learn more</button>
        </div>

        <div className="w-[50%] h-20 flex justify-between">
          <div className="w-[20%] h-max flex flex-col justify-between items-start">
            <h4 className="text-[#107155] text-base font-semibold w-full">
              57K+
            </h4>
            <p className="text-sm text-gray-600 w-full">Customers</p>
          </div>
          <div className="w-[20%] h-max flex flex-col justify-between items-start">
            <h4 className="text-[#107155] text-base font-semibold w-full">
              125+
            </h4>
            <p className="text-sm text-gray-600 w-full">
              Regions across AWS, Azure, and Google Cloud &rarr;
            </p>
          </div>
          <div className="w-[20%] h-max flex flex-col justify-between items-start">
            <h4 className="text-[#107155] text-base font-semibold w-full">
              175K+
            </h4>
            <p className="text-sm text-gray-600 w-full">
              Developers join every month &rarr;
            </p>
          </div>
          <div className="w-[20%] h-max flex flex-col justify-between items-start">
            <h4 className="text-[#107155] text-base font-semibold w-full">
              #1
            </h4>
            <p className="text-sm text-gray-600 w-full">
              Most used modern database &rarr;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
