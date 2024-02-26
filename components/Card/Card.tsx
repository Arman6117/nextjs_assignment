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
    <div className={clsx("cardContainer  md:h-[310px] h-auto", className)}>
      <div className="cardContent cardContentSm md:gap-12 gap-6  p-4">
        {isBadge && badgeData && (
          <div className="badge md:w-[136px] w-32 md:h-[34px] h-8   md:text-base text-sm">
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
