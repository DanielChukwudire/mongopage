import React from "react";
import model from "../assets/model.png";
import design from "../assets/design.png";
import search from "../assets/search.png";
import { PiGreaterThanLight } from "react-icons/pi";

const Bodyai: React.FC = () => {
  return (
    <>
      <div className="w-[100%] h-[600px] flex justify-end items-center bg-[#001E2B]">
        <div className="w-[90%] h-[500px] flex gap-10 ">
          <div className="w-[30%] h-[500px] flex flex-col justify-center gap-10 text-white">
            <span className="text-green-600 flex flex-col text-[30px] w-[100%]">
              Level Up Your{" "}
              <span className="text-white text-[30px]">MongoDB Skills</span>
            </span>
            Enhance your MongoDB knowledge with our free, focused Skill Badge
            credentials designed to help you quickly learn and validate specific
            skills.
          </div>
          <div className="w-[70%] h-[500px] flex justify-between">
            <div className="w-[250px] h-[500px] flex  flex-col justify-evenly items-center rounded-[30px] bg-white">
              <img src={model} alt="" />
              <h3>Relational to Document Model</h3>
              <p className="w-[80%]">
                Boost your skills in building efficient apps with
                MongoDB.Validate your knowledge, earn a free skill badge
              </p>
              <p className="flex justify-center items-center h-[80px] gap-2 text-[20px]">
                Start learning
                <PiGreaterThanLight size={15} />
              </p>
            </div>
            <div className="w-[250px] h-[500px] flex flex-col justify-evenly items-center rounded-[30px] bg-white ">
              <img src={design} alt="" />
              <h3>Relational to Document Model</h3>
              <p className="w-[80%]">
                Boost your skills in building efficient apps with
                MongoDB.Validate your knowledge, earn a free skill badge
              </p>
              <p className="flex  items-center h-[80px] gap-2 text-[20px]">
                Start learning
                <PiGreaterThanLight size={15} />
              </p>
            </div>
            <div className="w-[250px] h-[500px] flex flex-col justify-evenly items-center rounded-[30px] bg-white">
              <img src={search} alt="" />
              <h3>Relational to Document Model</h3>
              <p className="w-[80%]">
                Boost your skills in building efficient apps with
                MongoDB.Validate your knowledge, earn a free skill badge
              </p>
              <p className="flex justify-center items-center h-[80px] gap-2 text-[20px]">
                Start learning
                <PiGreaterThanLight size={15} />
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Bodyai;
