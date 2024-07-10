import React from "react";

const Footer = () => {
  return (
    <div className="p-16 flex items-center justify-center lg:rounded-md bg-foreground">
      <span className="p-regular-18 text2 text-white">
        {" "}
        © 2024 - InstaBucks and Daniel Asakpa, Inc.{" "}
        <a href="" target="_blank" rel="noopener noreferrer" className="text-[#D10363]">
          Privacy Policy
        </a>{" "}
        |{" "}
        <a href="" target="_blank" rel="noopener noreferrer" className="text-[#D10363]">
          Terms & Conditions{" "}
        </a>{" "}
        |{" "}
        <a href="" target="_blank" rel="noopener noreferrer" className="text-[#D10363]">
          Become an Affiliate!
        </a>
      </span>
    </div>
  );
};

export default Footer;
