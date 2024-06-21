import React from "react";
import { FaGlobeAmericas } from "react-icons/fa";
import { BsPencilSquare } from "react-icons/bs";
import { RiCodeSSlashFill } from "react-icons/ri";
import { SiAntdesign } from "react-icons/si";

const CoreServices = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-8 xl:px-28">
      <h3 className="font-titleFont uppercase text-3xl mdl:text-4xl font-bold text-white py-10 xl:py-16 text-center">
        Our Core <span className="text-secondaryColor">Services</span>
      </h3>
      <div className="w-full grid md:grid-cols-2 xl:grid-cols-4 gap-10">
        <div className="w-full h-60 bg-transparent border border-borderColor hover:border-transparent hover:cursor-pointer transition-hover duration-500 hover:shadow-customShadowOne hover:shadow-secondaryColor flex flex-col justify-center items-center gap-6">
          <SiAntdesign className="text-5xl" />
          <p className="text-2xl font-semibold flex flex-col items-center">
            Website <span className="text-secondaryColor -mt-1">UI Design</span>
          </p>
        </div>
        <div className="w-full h-60 bg-transparent border border-borderColor hover:border-transparent hover:cursor-pointer transition-hover duration-500 hover:shadow-customShadowOne hover:shadow-secondaryColor flex flex-col justify-center items-center gap-6">
          <RiCodeSSlashFill className="text-5xl" />
          <p className="text-2xl font-semibold flex flex-col items-center">
            Website
            <span className="text-secondaryColor -mt-1">Development</span>
          </p>
        </div>
        <div className="w-full h-60 bg-transparent border border-borderColor hover:border-transparent hover:cursor-pointer transition-hover duration-500 hover:shadow-customShadowOne hover:shadow-secondaryColor flex flex-col justify-center items-center gap-6">
          <FaGlobeAmericas className="text-5xl" />
          <p className="text-2xl font-semibold flex flex-col items-center">
            Domain
            <span className="text-secondaryColor -mt-1">Hosting</span>
          </p>
        </div>
        <div className="w-full h-60 bg-transparent border border-borderColor hover:border-transparent hover:cursor-pointer transition-hover duration-500 hover:shadow-customShadowOne hover:shadow-secondaryColor flex flex-col justify-center items-center gap-6">
          <BsPencilSquare className="text-5xl" />
          <p className="text-2xl font-semibold flex flex-col items-center">
            Content
            <span className="text-secondaryColor -mt-1">Creation/SEO</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CoreServices;
