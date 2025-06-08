import React from "react";
import { motion } from "framer-motion";
import { GiCheckMark } from "react-icons/gi";
import { aboutUsImgThree } from "../../assets";
import Image from "next/image";

const PickDomain = () => {
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
        className="w-2/5 hidden lgl:inline-flex"
      >
        <Image src={aboutUsImgThree} alt="aboutUsImgThree" />
      </motion.div>
      <div className="w-full lgl:w-3/5">
        <motion.div
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
          className="flex flex-col gap-4"
        >
          <h3
            // initial={{ x: 50, opacity: 0 }}
            // whileInView={{ x: 0, opacity: 1 }}
            // viewport={{ once: true }}
            // transition={{
            //   delay: 0.2,
            //   x: { type: "spring", stiffness: 100 },
            //   opacity: { duration: 1 },
            //   ease: "easeIn",
            //   duration: 1,
            // }}
            className="text-2xl"
          >
            Pick Your<span className="text-secondaryColor ml-3">Domain</span>
          </h3>
          <p className="text-base text-darkText leading-[28px] tracking-wide hover:text-gray-300 duration-300">
            Do you want to build a blog website or create an online presence for
            your company? If you are really planning to do so, your first and
            foremost step is to find a memorable domain name for your website. A
            domain name plays a very vital role in the success of a website.
            But, selecting a name is slightly tough and tricky and is regarded
            as one the most challenging steps in getting started.
          </p>
          <p className="text-base text-darkText leading-[28px] tracking-wide hover:text-gray-300 duration-300">
            Again while choosing a name you have to consider a lot of things
            that may seem to you overwhelming. So to make it easier, here some
            tips are given. Remember always that your website is the ultimate
            face of your online company. Keep the following factors.
          </p>
        </motion.div>
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
          className="max-w-[450px] py-6 md:py-10 flex flex-col gap-0 md:gap-4"
        >
          <div className="flex flex-col items-start gap-0 md:flex-row md:items-center md:justify-between">
            <p className="flex items-center gap-2 text-gray-300 hover:text-white duration-300 cursor-pointer">
              <span className="text-secondaryColor">
                <GiCheckMark />
              </span>
              Make it memorable
            </p>
            <p className="flex items-center gap-2 text-gray-300 hover:text-white duration-300 cursor-pointer">
              <span className="text-secondaryColor">
                <GiCheckMark />
              </span>
              Avoid hyphens
            </p>
          </div>
          <div className="flex flex-col items-start gap-0 md:flex-row md:items-center md:justify-between">
            <p className="flex items-center gap-2 text-gray-300 hover:text-white duration-300 cursor-pointer">
              <span className="text-secondaryColor">
                <GiCheckMark />
              </span>
              Keep it simple
            </p>
            <p className="flex items-center gap-2 text-gray-300 hover:text-white duration-300 cursor-pointer">
              <span className="text-secondaryColor">
                <GiCheckMark />
              </span>
              Consider SEO
            </p>
          </div>
          <div className="flex flex-col items-start gap-0 md:flex-row md:items-center md:justify-between">
            <p className="flex items-center gap-2 text-gray-300 hover:text-white duration-300 cursor-pointer">
              <span className="text-secondaryColor">
                <GiCheckMark />
              </span>
              Check domain availability
            </p>
            <p className="flex items-center gap-2 text-gray-300 hover:text-white duration-300 cursor-pointer">
              <span className="text-secondaryColor">
                <GiCheckMark />
              </span>
              Think long-term
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.4,
            x: { type: "spring", stiffness: 100 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
        >
          <p className="text-base text-darkText leading-[28px] tracking-wide hover:text-gray-300 duration-300">
            These all factors should be considered when you are going to choose
            a domain name. But it&apos;s fine if you disregard any of them as
            your convenience to focus on others.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default PickDomain;
