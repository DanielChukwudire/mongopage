import { HiMiniArrowLongRight } from "react-icons/hi2";
import fireworks from "../assets/fireworks.png";
import harsh from "../assets/hashi.svg";
import lang from "../assets/LangChain.svg";
// import tech from "../assets/TechM_Logo_1.svg";
// import igw from "../assets/lgwpl72akptbke7gp-AWS_logo_RGB.svg";
// import data from "../assets/Datadog_-_horizontal_color_logo.svg";
// import bricks from "../assets/databricks.svg";
// import accent from "../assets/Accenture.svg";

const Body6 = () => {
  return (
    <>
      <div className="w-[100%] h-[100vh] p-5 flex flex-col justify-center items-center">
        <div className="h-[40%] w-[90%] flex justify-between items-center">
          <h1 className="w-[45%] text-[30px] font-semibold">
            Works seamlessly with your tech stack{" "}
            <span className="text-[18px] text-[##55646C] font-normal">
              MongoDB integrates with 100+ of your favorite technologies
            </span>
          </h1>
          <p className="flex justify-center items-center h-[80px] gap-2 text-[20px]">
            veiw all customer
            <HiMiniArrowLongRight size={25} />
          </p>
        </div>
        <div className="h-[60%] w-[90%] flex flex-wrap justify-between items-center">
          <div className="h-[40%] w-[24%] rounded-[15px] bg-[##F5F7FA] flex justify-center items-center shadow-lg">
            <img src={fireworks} alt="" className="h-[30px] w-[80%]" />
          </div>
          <div className="h-[40%] w-[24%] rounded-[15px] bg-[##F5F7FA] flex justify-center items-center shadow-lg">
            <img src={harsh} alt="" className="h-[30px] w-[80%]" />
          </div>
          <div className="h-[40%] w-[24%] rounded-[15px] bg-[##F5F7FA] flex justify-center items-center shadow-lg">
            <img src={lang} alt="" className="h-[30px] w-[80%]" />
          </div>
          <div className="h-[40%] w-[24%] rounded-[15px] bg-[##F5F7FA] flex justify-center items-center shadow-lg">
            {/* <img src={tech} alt="" className="h-[30px] w-[80%]" /> */}
          </div>
          <div className="h-[40%] w-[24%] rounded-[15px] bg-[##F5F7FA] flex justify-center items-center shadow-lg">
            {/* <img src={igw} alt="" className="h-[30px] w-[80%]" /> */}
          </div>
          <div className="h-[40%] w-[24%] rounded-[15px] bg-[##F5F7FA] flex justify-center items-center shadow-lg">
            {/* <img src={data} alt="" className="h-[30px]  w-[80%]" /> */}
          </div>
          <div className="h-[40%] w-[24%] rounded-[15px] bg-[##F5F7FA] flex justify-center items-center shadow-lg">
            {/* <img src={bricks} alt="" className="h-[30px]  w-[80%]" /> */}
          </div>
          <div className="h-[40%] w-[24%] rounded-[15px] bg-[##F5F7FA] flex justify-center items-center shadow-lg">
            {/* <img src={accent} alt="" className="h-[30px]  w-[80%]" /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Body6;
