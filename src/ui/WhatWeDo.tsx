import React from "react";
import { whatWeDoImg } from "@/assets";
import Image from "next/image";

const WhatWeDo = () => {
  return (
    <div className="max-w-screen-2xl mx-auto flex xl:justify-between px-4 items-center gap-4">
      <div className="w-full lgl:w-3/5 hidden lgl:inline-flex">
        <Image
          className="w-full object-cover"
          src={whatWeDoImg}
          alt="whatWeDoImg"
        />
      </div>
      <div className="w-full lgl:w-2/5 flex flex-col gap-10">
        <div className="font-titleFont w-full xl:w-5/6 text-center xl:text-left">
          <h4 className="text-secondaryColor uppercase text-sm tracking-[4px] mb-2">
            Analytics Platform
          </h4>
          <h2 className="text-2xl md:text-[45px] font-semibold tracking-wide md:leading-[45px]">
            We do everything related web and online services.
          </h2>
        </div>
        <div>
          <div className="flex flex-col items-center xl:items-start gap-8">
            <div className="flex gap-10 w-full md:w-4/5">
              <span className="font-titleFont relative font-normal border-b border-b-borderColor before:w-[1px] before:h-[7px] before:bg-borderColor before:inline-block before:left-0 before:bottom-0 before:absolute h-7 w-20 px-2">
                01
              </span>
              <p className="text-base text-darkText">
              Data-Driven Insights.
              Our analytics platform provides in-depth insights into your website’s performance. We track key metrics, analyze user behavior, and identify growth opportunities, helping you make informed decisions to boost your online presence.
              </p>
            </div>
            <div className="flex gap-10 w-full md:w-4/5">
              <span className="font-titleFont relative font-normal border-b border-borderColor before:w-[1px] before:h-[7px] before:bg-borderColor before:inline-block before:left-0 before:bottom-0 before:absolute h-7 w-20 px-2">
                02
              </span>
              <p className="text-base text-darkText">
              Customized Solutions
              We specialize in creating tailored strategies that align with your business goals. From SEO optimization to conversion rate improvement, our solutions are designed to drive results and elevate your digital strategy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
