import React from "react";
import "./route.scss";
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineArrowForwardIos } from "react-icons/md";

const routeData = [
  "Home",
  "Hosting for all",
  "Hosting",
  "Hosting6",
  "Hosting5",
];
const Route = () => {
  return (
    <div className="routeContainer md:scale-100 scale-75">
      {routeData.map((route, index) => (
        <React.Fragment key={index}>
          <span>{route}</span>
          {index !== routeData.length - 1 && (
            <MdOutlineArrowForwardIos  size={30}/>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Route;
