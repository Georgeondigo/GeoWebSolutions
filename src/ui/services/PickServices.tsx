"use client";
import React, { useState } from "react";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { RiBarcodeFill, RiCodeSSlashFill } from "react-icons/ri";
import { SiAntdesign } from "react-icons/si";
import PickDomain from "./PickDomain";
import Hosting from "./Hosting";
import Design from "./Design";
import Development from "./Development";

const PickServices = () => {
  let [domain, setDomain] = useState(true);
  let [hosting, setHosting] = useState(false);
  let [design, setDesign] = useState(false);
  let [development, setDevelopment] = useState(false);
  return (
    <div className="max-w-screen-2xl mx-auto pt-32 pb-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-4 font-titleFont font-semibold uppercase text-lg lgl:text-base xl:text-lg px-4">
        <p
          onClick={() => {
            setDomain(true);
            setHosting(false);
            setDesign(false);
            setDevelopment(false);
          }}
          className={`${
            domain
              ? "bg-secondaryColor text-white after:bg-secondaryColor after:w-5 after:h-5 z-10 after:inline-block after:absolute after:-bottom-2 after:rotate-45"
              : " hover:bg-white hover:text-primaryColor border border-secondaryColor xl:border-r-0 bg-opacity-50"
          } flex items-center justify-center gap-3 w-full bg-primaryColor h-16 cursor-pointer relative`}
        >
          <span>
            <IoMdCheckmarkCircle />
          </span>
          Pick your domain
        </p>
        <p
          onClick={() => {
            setDomain(false);
            setHosting(true);
            setDesign(false);
            setDevelopment(false);
          }}
          className={`${
            hosting
              ? "bg-secondaryColor text-white after:bg-secondaryColor after:w-5 after:h-5 z-10 after:inline-block after:absolute after:-bottom-2 after:rotate-45"
              : " hover:bg-white hover:text-primaryColor border xl:border-r-0 border-secondaryColor bg-opacity-50"
          } flex items-center justify-center gap-3 w-full bg-primaryColor h-16 cursor-pointer relative`}
        >
          <span>
            <RiBarcodeFill />
          </span>
          Choose Your hosting
        </p>
        <p
          onClick={() => {
            setDomain(false);
            setHosting(false);
            setDesign(true);
            setDevelopment(false);
          }}
          className={`${
            design
              ? "bg-secondaryColor text-white after:bg-secondaryColor after:w-5 after:h-5 z-10 after:inline-block after:absolute after:-bottom-2 after:rotate-45"
              : " hover:bg-white hover:text-primaryColor border border-secondaryColor xl:border-r-0 bg-opacity-50"
          } flex items-center justify-center gap-3 w-full bg-primaryColor h-16 cursor-pointer relative`}
        >
          <span>
            <SiAntdesign />
          </span>
          Website Design
        </p>
        <p
          onClick={() => {
            setDomain(false);
            setHosting(false);
            setDesign(false);
            setDevelopment(true);
          }}
          className={`${
            development
              ? "bg-secondaryColor text-white after:bg-secondaryColor after:w-5 after:h-5 z-10 after:inline-block after:absolute after:-bottom-2 after:rotate-45"
              : " hover:bg-white hover:text-primaryColor border border-secondaryColor bg-opacity-50"
          } flex items-center justify-center gap-3 w-full bg-primaryColor h-16 cursor-pointer relative`}
        >
          <span>
            <RiCodeSSlashFill />
          </span>
          Website Development
        </p>
      </div>
      <div>
        {domain && <PickDomain />}
        {hosting && <Hosting />}
        {design && <Design />}
        {development && <Development />}
      </div>
    </div>
  );
};

export default PickServices;
