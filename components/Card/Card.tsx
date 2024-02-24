import React from "react";
import { IconType } from "react-icons";
import "./card.scss";
import Image from "next/image";
import clsx from "clsx";

type BadgeData = {
  icon: IconType;
  name: string;
};

type CardData = {
  children: React.ReactNode;

  isBadge?: boolean;
  badgeData?: BadgeData | null;
  className?: string;
};

const Card = ({ children, className, isBadge, badgeData }: CardData) => {
  return (
    <div className={clsx("cardContainer", className)}>
      <div className="cardContent">
        {isBadge && badgeData && (
          <div className="badge">
            <badgeData.icon size={20} />
            <span>{badgeData.name}</span>
          </div>
        )}
        {children}
      </div>
    </div>
  );
};

export default Card;
