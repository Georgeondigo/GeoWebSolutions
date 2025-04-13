import { aboutUsImgOne } from "@/assets";
import Image from "next/image";
import React from "react";

const Designing = () => {
  return (
    <div className="max-w-screen-2xl mx-auto flex flex-col mdl:flex-row justify-between items-center gap-32 px-10 pb-10">
      {/* Image Section */}
      <div className="w-full mdl:w-1/2">
        <Image
          className="w-80 mdl:w-full object-cover"
          src={aboutUsImgOne}
          alt="Web Design Process"
        />
      </div>

      {/* Content Section */}
      <div className="w-full mdl:w-1/2 flex flex-col gap-10">
        <div className="font-titleFont w-full mdl:w-5/6">
          <h4 className="text-secondaryColor uppercase text-sm tracking-[4px] mb-2">
            Website Design & WordPress Development
          </h4>
          <h2 className="text-4xl mdl:text-[45px] font-semibold tracking-[2px] leading-[45px]">
            Creating Stunning Websites with Figma and WordPress
          </h2>
        </div>

        {/* Design & Development Process */}
        <div>
          <div className="flex flex-col gap-8">
            {/* Step 1 - Design */}
            <div className="flex gap-10 mdl:w-4/5">
              <span className="font-titleFont relative font-normal border-b border-b-borderColor before:w-[1px] before:h-[7px] before:bg-borderColor before:inline-block before:left-0 before:bottom-0 before:absolute h-7 w-20 px-2">
                01
              </span>
              <p className="text-base text-darkText">
                We start by designing a user-centric interface using Figma,
                ensuring your website looks modern and aligns with your brand
                identity. Wireframes and high-fidelity prototypes guide the
                design direction.
              </p>
            </div>

            {/* Step 2 - WordPress Development */}
            <div className="flex gap-10 mdl:w-4/5">
              <span className="font-titleFont relative font-normal border-b border-borderColor before:w-[1px] before:h-[7px] before:bg-borderColor before:inline-block before:left-0 before:bottom-0 before:absolute h-7 w-20 px-2">
                02
              </span>
              <p className="text-base text-darkText">
                After the design approval, we bring the vision to life by
                developing a fully responsive and functional website using
                WordPress, integrating themes, plugins, and custom solutions to
                meet your business goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Designing;
