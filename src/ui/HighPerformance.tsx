import React from "react";
import ContactUs from "./ContactUs";

const HighPerformance = () => {
  return (
    <div className="w-full lg:h-[800px] bg-reactBd-highPerformanceBg bg-fill flex py-16 lg:py-0 justify-center items-center">
      <div className="max-w-screen-2xl mx-auto px-10">
        <div className="w-full xl:w-3/5 flex flex-col gap-6 lg:gap-12">
          <div className="font-titleFontw-full lg:w-4/6 xl:w-5/6">
            <div className="text-center lg:text-left">
              <h4 className="text-secondaryColor uppercase text-sm tracking-[4px] mb-2">
                Analytics Platform
              </h4>
              <h2 className="text-3xl lg:text-[45px] font-semibold tracking-[2px] lg:leading-[55px]">
                Create high performance data SQL server instance
              </h2>
            </div>
          </div>
          <div>
            <p className="w-full lg:pr-44 text-base text-center lg:text-left text-darkText">
               We offer high-performance SQL server instances designed to handle your 
               data analytics needs. Leverage optimized SQL databases to run complex 
               queries, gain valuable insights, and ensure smooth performance for 
               large-scale data operations.
            </p>
          </div>
          <div className="flex justify-center lg:justify-start">
            <ContactUs buttonData="contact us" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HighPerformance;
