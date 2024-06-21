import React from "react";
import { motion } from "framer-motion";
import { GiCheckMark } from "react-icons/gi";
import { projectThreeImg } from "@/assets";
import Image from "next/image";

const Development = () => {
  return (
    <div className="w-full px-6 flex items-center gap-10 mt-14">
      <motion.div
        initial={{ x: -20, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          delay: 0.2,
          x: { type: "spring", stiffness: 60 },
          opacity: { duration: 1 },
          ease: "easeIn",
          duration: 0.5,
        }}
        className="hidden lgl:inline-flex w-2/5"
      >
        <Image src={projectThreeImg} alt="projectThreeImg" />
      </motion.div>
      <div className="w-full lgl:w-3/5">
        <div className="flex flex-col gap-4">
          <motion.h3
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 100 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
            className="text-2xl mb-10"
          >
            Website
            <span className="text-secondaryColor ml-3">Development</span>
          </motion.h3>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.3,
              x: { type: "spring", stiffness: 100 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
            className="grid grid-cols-1 mdl:grid-cols-2 gap-8"
          >
            <div className="flex flex-col gap-6">
              <h3 className="font-titleFont text-lg font-bold flex items-center gap-4">
                <span className="text-secondaryColor">
                  <GiCheckMark />
                </span>
                Planning
              </h3>
              <p className="text-base text-darkText hover:text-gray-300 duration-300">
                The planning stage is the first and the most important stage.
                Because according to your planning and mapping you have to run
                the entire project.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <h3 className="font-titleFont text-lg font-bold flex items-center gap-4">
                <span className="text-secondaryColor">
                  <GiCheckMark />
                </span>
                Development
              </h3>
              <p className="text-base text-darkText hover:text-gray-300 duration-300">
                Loading content and the combination of the programming work are
                included in the development stage. It might be you or someone
                else who will create the contens for your website.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <h3 className="font-titleFont text-lg font-bold flex items-center gap-4">
                <span className="text-secondaryColor">
                  <GiCheckMark />
                </span>
                Design
              </h3>
              <p className="text-base text-darkText hover:text-gray-300 duration-300">
                The information that has been outlined in the planning stage
                will be moved into a full proof visual shape in the design
                stage.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <h3 className="font-titleFont text-lg font-bold flex items-center gap-4">
                <span className="text-secondaryColor">
                  <GiCheckMark />
                </span>
                Launch
              </h3>
              <p className="text-base text-darkText hover:text-gray-300 duration-300">
                Giving a website finishing polish of design elements to prepare
                it perfectly for the public viewing is the purpose of launch
                stage.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Development;
