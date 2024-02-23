"use client";
import React, { useState } from "react";

import { BiSearch } from "react-icons/bi";

import "./navbar.scss";
const Navbar = () => {
  const [isIconVisible, setIsIconVisible] = useState<boolean>(true);

  const handleInputFocus = () => {
    setIsIconVisible(false);
  };
  return (
    <div className="navbarContainer">
      <div className="navbarContent">
        <div className="searchInput">
          {isIconVisible && <BiSearch size={25} className="searchIcon" />}
          <input
            onFocus={handleInputFocus}
            onBlur={() => setIsIconVisible(true)}
          />
        </div>
        <div className="linkContainer">
          <a href={""} className="link">
            Categories
          </a>
          <a href={""} className="link">
            Website Builders
          </a>
          <a href={""} className="link">
            Todays&apos;s deals
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
