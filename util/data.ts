import { IconType } from "react-icons";
import { GoTrophy } from "react-icons/go";
import { IoDiamond } from "react-icons/io5";

import React from "react";

type GoTrophyIcon = IconType;
type IoDiamondIcon = IconType;
type RatingCardType = React.FC;

export const cardData = [
  {
    id: 1,
    title: "WixPro 72-Inch Responsive Website Builder-",
    desc: "Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
    image: "/image.png",
    mainHight:
      "[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
    isBadge: true,
    badgeData: {
      icon: GoTrophy as GoTrophyIcon,
      name: "Best Choice",
    },
    imageName: "Builder 1",
    rating:9.8,
    ratingText:'Exceptional',
    ratingStars:'/fullstar.png'

  },
  {
    id: 2,
    title: "SiteCraft 68-Inch Ultimate Web Design Studio-",
    desc: "Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)",
    image: "/image.png",
    mainHight:
      "[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.",
    isBadge: true,
    badgeData: {
      icon: IoDiamond as IoDiamondIcon,
      name: "Best Value",
    },
    imageName: "Builder",
    rating:9.5,
    ratingText:'Excellent',
    ratingStars:'/halffourstar.png'
    
  },
  {
    id: 3,
    title: "WixPro 72-Inch Responsive Website Builder-",
    desc: "Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
    image: "/image.png",

    mainHight:
      "[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
    isBadge: false,
    badgeData: null,
    imageName: "Builder 1",
    rating:9.1,
    ratingStars:'/fullstar.png',
    ratingText:'Exceptional',
    
  },
  //   {
  //     id: 4,
  //     title: "CDK Responsive Builder:",
  //     desc: "An extensive library of widgets and apps, and detailed step-by-step guides",
  //     image: "/image.png",
  //     mainHight: {
  //       rating: [
  //         { rating: 9.9, value: "Building Responsive" },
  //         { rating: 8.9, value: "Cool" },
  //         { rating: 9.9, value: "Docs" },
  //       ],
  //       other: ["Documentation", "Easy Use", "Out Of Box"],
  //     },
  //     isBadge: false,
  //     badgeData: null,
  //   },
];
