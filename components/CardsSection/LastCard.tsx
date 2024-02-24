import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import Card from "../Card/Card";
import Image from "next/image";
import RatingCard from "../RatingCard/RatingCard";
import Button from "../Button/Button";
import "./lastCard.scss";
import Tile from "../Tile/Tile";
import { CiCircleCheck } from "react-icons/ci";

const mainHighlight = [
  { rating: 9.9, text: "Building Responsive" },
  { rating: 8.9, text: "Cool" },
  { rating: 8.9, text: "Docs" },
];
const LastCard = () => {
  return (
    <Card className="lastCard">
      <div className="numCircle">
        <span>4</span>
      </div>
      <div className="imageContainer">
        <Image
          src={"/image.png"}
          alt="image"
          width={141}
          height={100}
          className="image"
        />
        <p className="imgName">CDK</p>
      </div>
      <div className="cardDetails">
        <div className="titleDesc">
          <span className="title">
            CDK Responsive Builder:
            <span className="desc">
              An extensive library of widgets and apps, and detailed
              step-by-step guides
            </span>
          </span>
        </div>
        <div className="highlight">
          <h1 className="highlightText">Main highlights</h1>
          <p className="highlightDesc">
            <div className="highlightContentContainer">
              {mainHighlight.map((item) => (
                <div key={item.rating} className="highlightContent">
                  <Tile className="lastCardTile">{item.rating}</Tile>
                  <span className="lastCardText">{item.text}</span>
                </div>
              ))}
            </div>
          </p>
        </div>
        <div className="whyWeLoveIt">
          <h2 className="something">Why we love it</h2>
          <div className="allContent">

          <div className="content">
            <CiCircleCheck size={24} color="#0855A1" />
            <span>Documentation</span>
          </div>
          <div className="content">
            <CiCircleCheck size={24} color="#0855A1" />
            <span>Easy to use</span>
          </div>
          <div className="content">
            <CiCircleCheck size={24} color="#0855A1" />
            <span>Documentation</span>
          </div>
        </div>
          </div>
        <div className="btn">
          <span className="btnText">Show more</span>
          <IoIosArrowDown size={15} />
        </div>
      </div>
      <div className="rating">
        <RatingCard
          rating={9.1}
          ratingValue="Very good"
          image={"/fourstar.png"}
        />
        <Button>View</Button>
      </div>
    </Card>
  );
};

export default LastCard;
