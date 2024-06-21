import React from "react";
import { motion } from "framer-motion";
import { GiCheckMark } from "react-icons/gi";
import { projectTwoImg } from "@/assets";
import Image from "next/image";

const Design = () => {
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
        <Image src={projectTwoImg} alt="projectTwoImg" />
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
            className="text-xl lgl:text-2xl mb-10"
          >
            Choose Your
            <span className="text-secondaryColor ml-3">Website Design</span>
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
            className="grid grid-cols-1 mdl:grid-cols-2 gap-10"
          >
            <div className="flex flex-col gap-6">
              <h3 className="font-titleFont text-lg font-bold flex items-center gap-4">
                <span className="text-secondaryColor">
                  <GiCheckMark />
                </span>
                Determining Your Need
              </h3>
              <p className="text-base text-darkText hover:text-gray-300 duration-300">
                Analyze your current website to determine what it will need in
                future. When choosing a web host, plan according to the need.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <h3 className="font-titleFont text-lg font-bold flex items-center gap-4">
                <span className="text-secondaryColor">
                  <GiCheckMark />
                </span>
                Compare Features
              </h3>
              <p className="text-base text-darkText hover:text-gray-300 duration-300">
                There are some important features such as bandwidth, storage,
                server OS and acceptable security tools that must be compared to
                you.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <h3 className="font-titleFont text-lg font-bold flex items-center gap-4">
                <span className="text-secondaryColor">
                  <GiCheckMark />
                </span>
                Select Hosting Type
              </h3>
              <p className="text-base text-darkText hover:text-gray-300 duration-300">
                Generally, you will be offered three types of servers by web
                hosting companies. They are Shared, VPS and dedicated servers.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <h3 className="font-titleFont text-lg font-bold flex items-center gap-4">
                <span className="text-secondaryColor">
                  <GiCheckMark />
                </span>
                Compare Features
              </h3>
              <p className="text-base text-darkText hover:text-gray-300 duration-300">
                Select and order the web hosting package that suits you the
                best. After that, an email will be sent to you to let you know
                some instructions about your website.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Design;
