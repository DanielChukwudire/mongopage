import React from "react";
import { IoIosArrowDown, IoIosSearch } from "react-icons/io";
import { RiGlobalLine } from "react-icons/ri";
import { FaBars } from "react-icons/fa";
import { PiGreaterThanLight } from "react-icons/pi";
import { PiLessThanLight } from "react-icons/pi";
import logo from "../tailwind/mongo.svg";
const Header: React.FC = () => {
  return (
    <header className="w-full bg-white border-b flex flex-col h-[130px] justify-between items-center ">
      <div className="h-[40px] w-[100%] bg-[#00684A] flex justify-center items-center max-[639px]:h-[auto]">
        <div className="h-[40px] w-[90%] flex justify-between items-center max-[639px]:h-[auto] ">
          <div className="h-[100%] w-[auto] flex justify-between items-center text-[12px] gap-2 text-[white] font-semibold  max-[639px]:text-[9px]">
            <p className="bg-[#B1FF05] rounded-[10px] text-[11px] text-[black] w-[110px] h-[20px] flex justify-center items-center max-[639px]:text-[8px] ">
              ANNOUNCEMENT
            </p>
            <p className="flex justify-center items-center gap-1">
              Explore now: MongoDB MCP server for AI-powered development (Public
              Review) <span className="text-[#B1FF05]">Read the blog</span>{" "}
              <PiGreaterThanLight size={15} />
            </p>
          </div>
          <div className="hidden sm:flex h-[100%] w-[100px] gap-4 justify-end items-center text-[white]">
            <PiLessThanLight size={15} class=" max-[320px]:hidden" />
            <PiGreaterThanLight size={15} className="max-[320px]:hidden" />
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center px-4 py-3 h-[90px] w-[95%] ">
        <div className="flex items-center justify-between gap-4 w-[750px]">
          <img
            src={logo}
            alt="MongoDB Logo"
            className="h-[50px]  w-[150px] object-contain "
          />

          <nav className="hidden md:flex gap-6 text-[16px] text-[#001E2B] w-[560px] justify-between">
            <a href="#" className="flex items-center gap-1">
              Products <IoIosArrowDown size={12} />
            </a>
            <a href="#" className="flex items-center gap-1">
              Resources <IoIosArrowDown size={12} />
            </a>
            <a href="#" className="flex items-center gap-1">
              Solutions <IoIosArrowDown size={12} />
            </a>
            <a href="#" className="flex items-center gap-1">
              Company <IoIosArrowDown size={12} />
            </a>
            <a href="#">Pricing</a>
          </nav>
        </div>

        <div className="hidden md:flex items-center justify-between gap-4 w-[450px] ">
          <IoIosSearch size={25} />
          <div className="flex items-center gap-1 text-[16px]">
            <RiGlobalLine size={20} />
            Eng
            <IoIosArrowDown size={12} />
          </div>
          <span className="text-[16px]">Support</span>
          <span className="text-[16px]">Sign In</span>
          <button className="h-[50px] w-[150px] bg-[#00ED64] text-black rounded-xl font-semibold border hover:rounded-full ">
            Get Started
          </button>
        </div>

        <div className="md:hidden text-xl cursor-pointer">
          <FaBars />
        </div>
      </div>
    </header>
  );
};

export default Header;
