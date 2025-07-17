import React from "react";
import { PiGreaterThanLight } from "react-icons/pi";
import code from "../assets/Code.svg";

const Body4: React.FC = () => {
  return (
    <div className="h-[700px] w-full flex justify-center items-center bg-[#001E2B] text-[white]">
      <div className="h-[90%] w-[90%] flex flex-col justify-between ">
        <div className="h-auto w-full flex justify-between">
          <div className="flex flex-col">
            <h1 className="text-[64px]">MongoDB Atlas</h1>
            <h2 className="text-[36px]">
              The modern database for any use case
            </h2>
          </div>

          <p className="flex justify-center items-center h-[60px] gap-1">
            Learn about the platform
            <PiGreaterThanLight size={15} />
          </p>
        </div>
        <div>
          <div className="h-auto w-[98%] flex gap-20 justify-between">
            <div className="h-auto w-400px flex flex-col gap-3 text-[20px]">
              <p>| Vector Search</p>
              <p>| Stream Proccesing</p>
              <p>| Operational</p>
              <p>| Transactional</p>
              <p>| Text Search</p>
              <p>| Analytical</p>
              <p>| Graph</p>
              <p>| Geospatial</p>
            </div>
            <div className="w-[900px] h-[400px] rounded-[20px] bg-[#061621] flex items-center justify-evenly text-[white]">
              <div className="h-[70%] w-[45%] justify-between flex flex-col">
                <h3 className="text-[30px]">Vector Search Use Cases</h3>
                <p>
                  MongoDB Atlas integrates operational and vector databases in a
                  single, unified platform. Use vector representations of your
                  data to perform semantic search, build recommendation engines,
                  design Q&A systems, detect anomalies, or provide context for
                  gen AI Apps.
                </p>
                <div className="flex justify-between items-center w-[85%]">
                  <button className="h-[50px] w-[150px] bg-[#00ED64] text-black rounded-md font-semibold  hover:rounded-[20px] transition-all duration-300">
                    Learn More
                  </button>
                  <div className="h-[50px] w-[150px]  text-[white] rounded-md font-semibold hover:rounded-[20px] transition-all duration-300 flex gap-2 items-center justify-center">
                    Documentation
                    <PiGreaterThanLight size={15} />
                  </div>
                </div>
              </div>
              <div className="h-[60%] w-[35%]">
                <img src={code} alt="" className="h-[100%] w-[100%]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body4;
