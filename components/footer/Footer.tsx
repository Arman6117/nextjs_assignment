import Link from "next/link";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const footerCategoryLinks = [
  {
    categoryLinks: [
      "Web Builder",
      "Hosting",
      "Data centre",
      "Robotic Automation",
    ],
  },
  {
    contactLinks: [
      "Contact",
      "Privacy Policy",
      "Terms of service",
      "Categories",
      'About'
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-gray-800 w-screen mt-16 text-white px-16 py-8 flex justify-evenly flex-wrap gap-10 items-center">
      <div className="flex flex-col space-y-4">
        <h3 className="text-[16px] font-normal ">CATEGORIES</h3>
        {footerCategoryLinks[0].categoryLinks?.map((url) => (
          <Link
            className="text-[#B6BDC4] font-normal text-[13px] hover:text-white
      "
            href={"/"}
            key={url}
          >
            {url}
          </Link>
        ))}
      </div>
      <div className="flex flex-col mt-6 space-y-4 justify-center">
        <h3 className="text-[16px] font-normal">CONTACT</h3>
        {footerCategoryLinks[1].contactLinks?.map((url) => (
          <Link
            className="text-[#B6BDC4] font-normal text-[13px] hover:text-white "
            href={"/"}
            key={url}
          >
            {url}
          </Link>
        ))}
      </div>
      <div className="flex items-center space-x-2 text-[#D1D6DA] text-[13px]
">
        <span>United States</span>
        <IoIosArrowDown size={15} />
      </div>
    </footer>
  );
};

export default Footer;
