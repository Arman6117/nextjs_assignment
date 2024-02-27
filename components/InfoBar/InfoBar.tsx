import "./infoBar.scss";

import { TfiInfoAlt } from "react-icons/tfi";
import { CiCircleCheck } from "react-icons/ci";

import { IoIosArrowDown } from "react-icons/io";

const InfoBar = () => {
  return (
    <div className="infoBarContainer">
      <div className="infoBarContent space-y-5 flex flex-col md:flex-row md:justify-between justify-evenly ">
        <div className="left px-2 justify-evenly space-x-0 md:space-x-12">
          <div >
            <CiCircleCheck size={26}  className="md:w-6 w-9"/>
            <span className="md:text-[14px] text-[10px]">Last Updated - February 22,2020</span>
          </div>
          <div>
            <TfiInfoAlt size={18}  className="md:w-6 w-9"/>
            <span className="md:text-[14px] text-xs">Advertising Disclosure</span>
          </div>
        </div>
        <div className="right md:space-x-3 space-x-2">
          <span className="md:text-[14px] text-xs">Top Relevant</span>
          <IoIosArrowDown size={20} className="md:w-6 w-4"/>
        </div>
      </div>
    </div>
  );
};

export default InfoBar;
