'use client'
import React, { useState } from 'react';
import { cardData } from '@/util/data';
import './cardsSection.scss';
import Card from '../Card/Card';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'; // Import IoIosArrowUp
import Image from 'next/image';
import Button from '../Button/Button';
import RatingCard from '../RatingCard/RatingCard';
import LastCard from './LastCard';

const CardsSection = () => {
  const [showMainHighlight, setShowMainHighlight] = useState(false);

  const toggleMainHighlight = () => {
    setShowMainHighlight(!showMainHighlight);
  };

  return (
    <div className="cardsContainer">
      {cardData.map((data) => (
        <Card key={data.id} {...data} >
          <div className="numCircle">
            <span>{data.id}</span>
          </div>
          <div className="imageContainer">
            <Image
              src={data.image}
              alt="image"
              width={141}
              height={100}
              className="image "
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
            <div className="highlight hidden md:block">
                <h1 className="highlightText">Main highlights</h1>
                <p className="highlightDesc">{data.mainHight}</p>
              </div>
            {showMainHighlight && (
              <div className="highlight">
                <h1 className="highlightText">Main highlights</h1>
                <p className="highlightDesc">{data.mainHight}</p>
              </div>
            )}
            <div className="btn mb-10 md:pointer-events-none cursor-pointer" onClick={toggleMainHighlight}>
              <span className="btnText">
                {showMainHighlight ? 'Show less' : 'Show more'}
              </span>
              {showMainHighlight ? (
                <IoIosArrowUp size={15} /> // Use IoIosArrowUp when showMainHighlight is true
              ) : (
                <IoIosArrowDown size={15} /> // Use IoIosArrowDown when showMainHighlight is false
              )}
            </div>
          </div>
          <div className="rating space-y-4">
            <RatingCard
              rating={data.rating}
              ratingValue={data.ratingText}
              image={data.ratingStars}
              
            />
            <Button className='w-[350px]'>View</Button>
          </div>
        </Card>
      ))}
      <LastCard />
    </div>
  );
};

export default CardsSection;
