import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { RiGlobalLine } from "react-icons/ri";
// import footerlogo from "../assets/footerlogo.svg";

const Footer: React.FC = () => {
  return (
    <footer className="w-full h-[700px] flex items-center justify-center p-2.5 pt-2.5 bg-[#061621] text-[white]">
      <div className="w-[95%] h-auto flex justify-center flex-col gap-2.5">
        <div className="w-full flex gap-2 justify-between flex-wrap max-[550px]:gap-3">
          <div className="flex flex-col gap-5 max-[550px]:w-full max-[550px]:flex-row max-[550px]:justify-between">
            <img
              // src={footerlogo}
              alt="MongoDB Logo"
              className="h-[50px]  w-[150px] object-contain text-[white]"
            />
            <span className="flex items-center gap-2">
              <RiGlobalLine />
              English
              <IoIosArrowDown size={12} />
            </span>
          </div>

          <div className="flex flex-col gap-10">
            <h4 className="font-semibold">About</h4>
            <ul className="mt-2.5 list-none flex flex-col gap-10 text-[white]">
              <li className="text-[white]">Careers</li>
              <li>Investor Relations</li>
              <li>Legal</li>
              <li>Privacy Policy</li>
              <li>GitHub</li>
              <li>Security Information</li>
              <li>Trust Center</li>
              <li>Connect with Us</li>
            </ul>
          </div>

          <div className="flex flex-col gap-10">
            <h4 className="font-semibold">Support</h4>
            <ul className="mt-2.5 list-none flex flex-col gap-10 text-[white]">
              <li>Contact Us</li>
              <li>Customer Portal</li>
              <li>Atlas Status</li>
              <li>Customer Support</li>
              <li>Manage Cookies</li>
            </ul>
          </div>

          <div className="flex flex-col gap-10">
            <h4 className="font-semibold">Deployment Options</h4>
            <ul className="mt-2.5 list-none flex flex-col gap-10 text-[white]">
              <li className="text-[white]">MongoDB Atlas</li>
              <li className="text-[white]">Enterprise Advanced</li>
              <li className="text-[white]">Community Edition</li>
            </ul>
          </div>

          <div className="flex flex-col gap-10">
            <h4 className="font-semibold">Data</h4>
            <ul className="mt-2.5 list-none flex flex-col gap-10 text-[white]">
              <li className="text-[white]">Vector Databases</li>
              <li>NoSQL Databases</li>
              <li>Document Databases</li>
              <li>RAG Database</li>
              <li>ACID Transactions</li>
              <li>MERN Stack</li>
              <li>MEAN Stack</li>
            </ul>
          </div>
        </div>

        <div className="w-full text-[rgba(255,255,255,0.73)] text-sm flex justify-start max-[550px]:justify-center">
          © 2026 MongoDb, Inc
        </div>
      </div>
    </footer>
  );
};

export default Footer;
