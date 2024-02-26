"use client";
import React, { useState } from "react";

import { BiSearch } from "react-icons/bi";

import "./navbar.scss";
import { MdClose, MdMenu } from "react-icons/md";
import clsx from "clsx";
import Link from "next/link";

const menuLinks = ["Categories", "Website Builders", "Todays's deals"];
const Navbar = () => {
  const [isIconVisible, setIsIconVisible] = useState<boolean>(true);
  const [open, setOpen] = useState(false);

  const handleInputFocus = () => {
    setIsIconVisible(false);
  };
  return (
    <nav aria-label="Main navigation">
      <ul className="flex  flex-col justify-between rounded-b-lg bg-slate-50  md:flex-row md:items-center md:rounded-xl">
        <div className="flex items-center justify-end">
          <button
            aria-expanded={open}
            aria-label="Open menu"
            className="block p-2 text-2xl text-slate-800 md:hidden"
            onClick={() => setOpen(true)}
          >
            <MdMenu />
          </button>
        </div>
        <div
          className={clsx(
            "fixed bottom-0 left-0 right-0 top-0 z-50 flex  flex-col items-center gap-4 bg-slate-900 pr-4 pt-14 transition-transform duration-300 ease-in-out md:hidden",
            open ? "translate-x-0" : "translate-x-[100%]"
          )}
        >
          <button
            aria-label="Close menu"
            aria-expanded={open}
            className="fixed right-4 top-3 block p-2 text-2xl text-slate-50 md:hidden "
            onClick={() => setOpen(false)}
          >
            <MdClose />
          </button>

          <li className="flex items-center">
            <div className="searchInput">
              {isIconVisible && <BiSearch size={25} className="searchIcon" />}
              <input
                onFocus={handleInputFocus}
                onBlur={() => setIsIconVisible(true)}
                className=""
              />
            </div>
          </li>
          {menuLinks.map((link, index) => (
            <React.Fragment key={link}>
              <li className="first:mt-8">
                <Link
                  href={link}
                  className={clsx(
                    "group relative block overflow-hidden rounded px-3 text-3xl font-bold text-slate-50 "
                  )}
                  onClick={() => setOpen(false)}
                >
                  <span
                    className={clsx(
                      "absolute inset-0 z-0 h-full translate-y-12 rounded bg-slate-600 transition-transform duration-300 ease-in-out group-hover:translate-y-0"
                    )}
                  />
                  <span className="relative">{link}</span>
                </Link>
              </li>
              {index < menuLinks.length - 1 && (
                <span
                  className="hidden text-4xl font-thin leading-[0] text-slate-400 md:inline"
                  aria-hidden="true"
                >
                  /
                </span>
              )}
            </React.Fragment>
          ))}
          <li>
            {/* <Button label="Contact" linkField="/contact" className="ml-3" /> */}
          </li>
        </div>
        <DesktopMenu />
      </ul>
    </nav>
  );
};

export default Navbar;

function DesktopMenu() {
  const [isIconVisible, setIsIconVisible] = useState<boolean>(true);
  const handleInputFocus = () => {
    setIsIconVisible(false);
  };

  return (
    <div className="navbarContainer hidden md:flex">
      <div className="navbarContent">
        <div className="searchInput">
          {isIconVisible && <BiSearch size={25} className="searchIcon" />}
          <input
            onFocus={handleInputFocus}
            onBlur={() => setIsIconVisible(true)}
          />
        </div>
        <div className="linkContainer">
          {menuLinks.map((link) => (
            <a key={"link"} className="link">
              {link}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
