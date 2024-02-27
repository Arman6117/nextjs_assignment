import React from "react";
import Card from "../Card/Card";

import "./relatedDeals.scss";
import Image from "next/image";
import Tile from "../Tile/Tile";
import Button from "../Button/Button";
const RelatedDealSection = () => {
  const elements = Array.from({ length: 3 }, (_, index) => (
    <Card key={index} className="relatedDealCard md:scale-100 scale-100  w-full h-full  ">
      <div className="relatedDealCardContent w-full">
        <Image
          src={"/image.png"}
          alt="image"
          width={141}
          height={100}
          className="image"
        />

        <div className=" text-[#626E79] flex flex-col items-center justify-evenly h-full ">
          <div className="discountTiles mt-6 ml-6  ">
            <Tile className="tile">20% off</Tile>
            <Tile className="tile">Limited Time</Tile>
          </div>
          <div className=" flex flex-col items-center justify-center space-y-1">
            <h1 className="font-[700] text-[16px] leading-6">Webbuilder 1</h1>
            <p className="text-[16px] leading-6">
              Computer Modern classic with wix support
            </p>
          </div>
          <div className="flex items-center space-x-2 ">
            <span className="text-[20px] leading-7 text-[#5C6874]">$39.96</span>
            <span className="text-[14px] flex  mt-2 space-x-1">
              <span className="text-[#9fa9b3]">$49.96</span>
              <span className="text-[13px] text-[#ef4c5d]">(20% Off)</span>
            </span>
          </div>
        </div>
        <div>
          <Button className="w-[300px] ">View Deal</Button> 
        </div>
      </div>
    </Card>
  ));

  return (
    <div className="relatedDealContainer space-y-16 flex flex-col py-10 ">
      <div className=" flex sm:flex-row sm:flex-wrap space-y-10 justify-evenly flex-col">
        {elements}
      </div>
      <div className="flex md:flex-row flex-col  justify-center items-center space-y-4 md:justify-between mt-4">
    <h1 className="text-3xl leading-[44px] text-[#5c6874]">Sign up and get exclusive special deals</h1>
        <Button className="md:rounded-tr-lg md:rounded-br-lg md:rounded-tl-none md:rounded-bl-none w-[300px] md:w-[132px] h-[20px] font-normal text-[14px]">Sign Up</Button>
      </div>
    </div>
  );
};

export default RelatedDealSection;
