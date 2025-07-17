import React from "react";
import { HiMiniArrowLongRight } from "react-icons/hi2";
import vsco from "../assets/vsco.png";
import toyota from "../assets/toyota.png";
import lg from "../assets/lg.jpg";
import novo from "../assets/novo.svg";
import coin from "../assets/Coinbase.svg";
// import curly from "../assets/curlybraces.svg";

const Body5: React.FC = () => {
  return (
    <div className="h-[900px] w-full flex justify-center items-center ">
      <div className="h-[700px] w-[100%] flex flex-col justify-evenly items-center gap-28 ">
        <div className="h-auto w-[90%] flex justify-between">
          <h1 className="text-[40px] w-[50%]">
            Loved by developers, trusted by enterprises
          </h1>

          <p className="flex justify-center items-center h-[80px] gap-2 text-[20px]">
            veiw all customer
            <HiMiniArrowLongRight size={25} />
          </p>
        </div>

        <div className="w-[97%] h-auto  flex justify-between">
          <div className="w-[17%] gap-3 flex flex-col items-center">
            <img
              src={vsco}
              alt=""
              className="h-[60px] w-[100%] object-contain"
            />
            <div className="w-[100%] h-[5px] rounded-[10px] bg-[#b7b4b4]"></div>
          </div>
          <div className="w-[17%] gap-3 flex flex-col items-center">
            <img
              src={toyota}
              alt=""
              className="h-[60px] w-[100%] object-contain"
            />
            <div className="w-[100%] h-[5px] rounded-[10px] bg-[#b7b4b4]"></div>
          </div>
          <div className="w-[17%] gap-3 flex flex-col items-center">
            <img src={lg} alt="" className="h-[60px] w-[100%] object-contain" />
            <div className="w-[100%] h-[5px] rounded-[10px] bg-[#b7b4b4]"></div>
          </div>
          <div className="w-[17%] gap-3 flex flex-col items-center">
            <img
              src={novo}
              alt=""
              className="h-[60px] w-[100%] object-contain"
            />
            <div className="w-[100%] h-[5px] rounded-[10px] bg-[#b7b4b4]"></div>
          </div>
          <div className="w-[17%] gap-3 flex flex-col items-center ">
            <img
              src={coin}
              alt=""
              className="h-[60px] w-[100%] object-contain"
            />
            <div className="w-[100%] h-[5px] rounded-[10px] bg-[#b7b4b4]"></div>
          </div>
        </div>

        {/* down */}
        <div className="w-[100%] h-[400px] flex justify-center items-center">
          <div className="w-[95%] h-[400px] flex justify-between items-center">
            <div className="h-[300px] w-[300px] flex flex-col justify-between">
              <img className="h-[60px] w-[150px] object-contain" src={toyota} />
              <div className="flex flex-col gap-2">
                <p className="font-bold text-green-600 text-3xl ml-7 mt-10">
                  99.99%
                </p>
                <p>
                  Availability for
                  <br /> customers
                </p>
              </div>
              <div className="flex flex-col gap-2">
                {" "}
                <p className="font-bold text-green-600 text-3xl ml-7 mt-10">
                  9M+
                </p>
                <p>Vechiles serviced</p>
              </div>
            </div>
            {/* <img src={curly} alt="" className="h-[350px]" /> */}
            <div className="w-200 h-[300px] bg-white flex flex-col justify-between">
              <p className="text-green-400 text-[15px]">AUTOMOTIVE</p>
              <p className="text-[25px] leading-12">
                “We use MongoDB as the core database for our services, so any
                new innovative idea or new service we build, we automatically
                say, ‘We’re going to use MongoDB as the core platform,’ knowing
                that it’s going to give us the reliability and the scalability
                that we’re going to need.”
              </p>
              <div className="flex items-center gap-10 ">
                <button className="h-[50px] w-[180px] bg-[#001E2B] text-[white] rounded-md font-semibold  hover:rounded-full transition-all duration-300">
                  Read Case Study
                </button>
                <p className="text-xl">MongoDB for Automotive</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body5;
