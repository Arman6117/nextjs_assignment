import { cardData } from "@/util/data";
import "./cardsSection.scss";
import Card from "../Card/Card";
import { IoIosArrowDown } from "react-icons/io";
import Image from "next/image";
import Button from "../Button/Button";
import RatingCard from "../RatingCard/RatingCard";
import LastCard from "./LastCard";

const CardsSection = () => {
  return (
    <div className="cardsContainer">
      {cardData.map((data) => (
        <Card key={data.id} {...data}>
          <div className="numCircle">
            <span>{data.id}</span>
          </div>
          <div className="imageContainer">
            <Image
              src={data.image}
              alt="image"
              width={141}
              height={100}
              className="image"
            />
            <p className="imgName">{data.imageName}</p>
          </div>
          <div className="cardDetails">
            <div className="titleDesc">
              <span className="title">
                {data.title}
                <span className="desc">{data.desc}</span>
              </span>
            </div>
            <div className="highlight">
              <h1 className="highlightText">Main highlights</h1>
              <p className="highlightDesc">{data.mainHight}</p>
            </div>
            <div className="btn">
              <span className="btnText">Show more</span>
              <IoIosArrowDown size={15} />
            </div>
          </div>
          <div className="rating">
            <RatingCard
              rating={data.rating}
              ratingValue={data.ratingText}
              image={data.ratingStars}
            />
            <Button>View</Button>
          </div>
        </Card>
      ))}
      <LastCard/>
    </div>
  );
};

export default CardsSection;
