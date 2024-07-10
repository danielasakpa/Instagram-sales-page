import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="wrapper grid md:grid-cols-2 gap-6">
      <div className="w-full">
        <h1 className="relative text3 tracking-[0.050em] w-fit text-balance mt-16 font-bold !leading-tight text-gray-900 text-6xl lg:text-7xl">
          Grow your <br />
          <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-primary relative inline-block">
            <span className="relative text-white">Insta</span>
          </span>{" "}
          account organically.
        </h1>
        <p className="mt-6 lg:mt-2 text-lg lg:pr-10 max-w-prose text2 ext-center lg:text-left text-balance md:text-wrap">
          Go from yawn-inspiring to awe-inspiring with{" "}
          <span className="font-semibold">30 ideas</span> of posts to fit your
          unique account.
        </p>
        <button className="w-full flex gap-2 items-center justify-center px-8 py-3 mt-8 lg:mt-6 bg-foreground rounded-md text-white text2 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
          Click here for instance access
          <svg
            fill="none"
            height="20"
            viewBox="0 0 24 24"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.75 8.75L14.25 12L10.75 15.25"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
          </svg>
        </button>
      </div>

      <div className="relative hidden lg:block">
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t via-slate-50/50 from-slate-50 h-28" />
        <Image
          src="/images/hero.gif"
          alt=""
          width={600}
          height={700}
          className="w-full"
        />
      </div>
    </div>
  );
};

export default Hero;
