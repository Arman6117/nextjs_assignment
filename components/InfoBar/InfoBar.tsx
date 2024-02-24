import "./infoBar.scss";

import { TfiInfoAlt } from "react-icons/tfi";
import { CiCircleCheck } from "react-icons/ci";

import { IoIosArrowDown } from "react-icons/io";

const InfoBar = () => {
  return (
    <div className="infoBarContainer">
      <div className="infoBarContent">
        <div className="left">
          <div>
            <CiCircleCheck size={20} />
            <span>Last Updated - February 22,2020</span>
          </div>
          <div>
            <TfiInfoAlt size={18} />
            <span>Advertising Disclosure</span>
          </div>
        </div>
        <div className="right">
          <span>Top Relevant</span>
          <IoIosArrowDown size={20} />
        </div>
      </div>
    </div>
  );
};

export default InfoBar;
