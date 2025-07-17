import { FaHouse } from "react-icons/fa6";
import spotify from "./assets/spotify (1).png";
import { CiSearch } from "react-icons/ci";

const Header = () => {
  return (
    <>
      <header className="w-100%  bg-whitetext-black h-20 p-5 flex justify-between items-center bg-amber-950">
        <div className=" flex w-30 h-10 justify-between bg-amber-300 ">
          <img className="w-10 h-10" src={spotify} />
          <div className="w-10 h-10 flex items-center justify-center rounded-4xl bg-amber-400">
            <FaHouse className="w-5 h-5 " />
          </div>
        </div>

        <div className="w-100 h-11 flex  items-center rounded-2xl bg-red-600">
          <CiSearch className="w-10 h-5 " />
          <input
            className="w-60 h-9 pl-2 rounded-2xl border-none outline-0"
            placeholder="What do you want to play"
          />
        </div>

        <nav className="align-bottom">
          <ul className="flex gap-4 text-black font-bold ">
            <li className="hover:text-white cursor-pointer">Premium</li>
            <li className="hover:text-white cursor-pointer">Support</li>
            <li className="hover:text-white cursor-pointer">Download</li>
            <div className="flex bg-yellow-400 w-50 justify-around">
              <li className="hover:text-white cursor-pointer">Install App</li>
              <li className="hover:text-white cursor-pointer">Sign up</li>
            </div>
          </ul>
        </nav>

        <button className="py-3 px-9  bg-white text-black cursor-pointer font-medium rounded-4xl shadow-md">
          Login
        </button>
      </header>
    </>
  );
};
export default Header;
