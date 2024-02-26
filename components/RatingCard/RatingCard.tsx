import React from "react";
import "./ratingCard.scss";
import clsx from "clsx";
import Image from "next/image";
type RatingCard = {
  rating: number;
  ratingValue: string;
  className?: string;
  image: string
};
const RatingCard = ({image, rating, ratingValue }: RatingCard) => {
  return <div className={clsx("ratingCardContainer")}>
    <span className="ratingNumber">{rating}</span>
    <span className="ratingText">{ratingValue}</span>
    <Image src={image} alt="stars" width={100} height={0} className="stars"/>

  </div>;
};

export default RatingCard;
