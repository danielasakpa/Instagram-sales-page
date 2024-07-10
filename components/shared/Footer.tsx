import React from "react";

const Footer = () => {
  return (
    <div className="p-16 flex items-center justify-center lg:rounded-md bg-foreground">
      <span className="flex flex-col lg:flex-row gap-2 lg:gap-4 p-regular-18 text2 text-white">
        {" "}
        © 2024 - InstaBucks and Daniel Asakpa, Inc.{" "}
        <div className="flex flex-col lg:flex-row gap-2 mt-4 lg:mt-0">
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#D10363]"
          >
            Privacy Policy
          </a>
          <span className="hidden lg:block">|</span>
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#D10363]"
          >
            Terms & Conditions{" "}
          </a>{" "}
          <span className="hidden lg:block">|</span>
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#D10363]"
          >
            Become an Affiliate!
          </a>
        </div>
      </span>
    </div>
  );
};

export default Footer;
