"use client";
import React, { useState } from "react";
import SliderText from "./SliderText";

const Banner = () => {
  const sliderContent = [
    {
      title: "WEB DESIGN & DEVELOPMENT COMPANY",
      desTitle: "ReactBD",
      des: "is a web development company whose aim is to help businesses of all sizes to bring their business online. Our digital strategy helps startups and enterprise businesses to sustain their brands on the internet ecosystem.",
      backgroundClass: "bg-bgOne",
    },
    {
      title: "WEB HOSTING AND MAINTAINING",
      desTitle: "Website",
      des: "maintenance is the work to keep your site fully operational and healthy and by keeping that in mind, we provide a full year of free hosting and maintenance on your initial project with us and will ensure your web optimization on time.",
      backgroundClass: "bg-bgTwo",
    },
    {
      title: "CONTENT CREATION & SEO",
      desTitle: "Content",
      des: "SEO refers to creating content that helps your web pages to rank high in search engines. It includes everything to do with the writing and structuring of content on your website. To write and structure quality content, you can depend on our experienced team.",
      backgroundClass: "bg-bgThree",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="w-full bg-primaryColor pt-10">
      <div
        className={`${sliderContent[currentSlide].backgroundClass} transition-bg duration-1000 w-full bg-contain bg-no-repeat xl:bg-cover bg-center font-titleFont relative py-10 mdl:py-32`}
      >
        <div className="max-w-screen-2xl mx-auto px-4 flex flex-col items-start gap-10">
          <SliderText
            title={sliderContent[currentSlide].title}
            desTitle={sliderContent[currentSlide].desTitle}
            des={sliderContent[currentSlide].des}
          />
        </div>
        <div className="absolute -bottom-20 mdl:bottom-0 flex flex-col mdl:flex-row items-start px-4 mdl:items-center bg-transparent justify-center gap-2 mdl:gap-6 text-[14px] text-gray-400 py-4 w-full bg-primaryColor">
          {sliderContent.map((_, index) => (
            <p
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`${
                currentSlide === index ? "text-white" : "text-gray-400"
              } relative h-full w-48 px-3 py-1 hover:text-white hover:cursor-pointer duration-300 overflow-hidden bg-primaryColor bg-opacity-10 group`}
            >
              0{index + 1}
              <span
                className={`${
                  currentSlide === index
                    ? "bg-secondaryColor translate-y-0"
                    : "bg-gray-400 translate-y-[1px]"
                } w-full h-0.5 inline-flex absolute bottom-0 left-0 transform group-hover:translate-y-0 transition-transform duration-500 group-hover:bg-secondaryColor`}
              ></span>
              <span
                className={`${
                  currentSlide === index
                    ? "bg-secondaryColor -translate-x-0"
                    : "bg-gray-400 -translate-x-[1px]"
                } w-0.5 h-3 inline-flex absolute bottom-0 left-0  group-hover:-translate-x-0 transition-transform duration-500 group-hover:bg-secondaryColor`}
              ></span>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
