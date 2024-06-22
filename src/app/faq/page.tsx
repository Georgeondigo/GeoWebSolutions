"use client";
import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import { BsPhoneFill } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { motion } from "framer-motion";
import TitleBanner from "@/ui/TitleBanner";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { BiChevronDown } from "react-icons/bi";

const faqData = [
  {
    _id: "01",
    title: "How to order from here?",
    subTitle:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam sit corporis labore possimus blanditiis sed quo deserunt asperiores molestiae commodi.",
  },
  {
    _id: "02",
    title: "Is services are applicable for me?",
    subTitle:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam sit corporis labore possimus blanditiis sed quo deserunt asperiores molestiae commodi.",
  },
  {
    _id: "03",
    title: "How long it will take to delivery?",
    subTitle:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam sit corporis labore possimus blanditiis sed quo deserunt asperiores molestiae commodi.",
  },
  {
    _id: "05",
    title: "Where is my Order?",
    subTitle:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam sit corporis labore possimus blanditiis sed quo deserunt asperiores molestiae commodi.",
  },
];

const Faq = () => {
  let [qOne, setQOne] = useState(true);
  let [qTwo, setQTwo] = useState(false);
  return (
    <div className="w-full">
      <TitleBanner
        subtitle="Explore the Features"
        title="Frequently asked questions"
      />
      <div className="max-w-screen-2xl mx-auto flex flex-col mdl:flex-row justify-between gap-10 pb-20 pt-5 px-4">
        <div className="w-full mdl:w-3/4 flex flex-col gap-6">
          {/* ====================== Question 01 start here ======================== */}
          <div className="w-full hover:cursor-pointer flex flex-col gap-4">
            {faqData?.map((item) => (
              <Disclosure
                key={item?._id}
                as="div"
                className="p-6"
                defaultOpen={false}
              >
                <DisclosureButton className="group relative flex w-full items-center justify-between">
                  <p
                    className={`absolute left-0 -top-10 w-full h-auto px-3 py-1 text-sm group-hover:text-white group-data-[open]:text-secondaryColor text-left duration-300 `}
                  >
                    {item?._id}
                    <span
                      className={`w-full h-[.5px] absolute left-0 bottom-0 group-hover:bg-secondaryColor group-data-[open]:bg-secondaryColor duration-500 bg-gray-500`}
                    ></span>
                    <span
                      className={`w-[1px] h-[10px] absolute left-0 bottom-0 group-hover:bg-secondaryColor group-data-[open]:bg-secondaryColor duration-500 bg-gray-500`}
                    ></span>
                  </p>

                  <span className="text-lg font-semibold text-white group-data-[open]:text-white">
                    {item?.title}
                  </span>
                  <BiChevronDown className="size-6 fill-white/70 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180" />
                </DisclosureButton>
                <DisclosurePanel className="mt-2 text-sm/5 text-white/80 tracking-wide leading-6">
                  {item?.subTitle}
                </DisclosurePanel>
              </Disclosure>
            ))}

            {/* <div
              onClick={() => {
                setQOne(!qOne);
                setQTwo(false);
              }}
              className="w-full flex flex-col gap-4"
            >
              <div>
                <p
                  className={`relative w-full h-auto px-3 py-1 text-sm group-hover:text-white duration-300 ${
                    qOne ? "text-white" : "text-borderColor"
                  }`}
                >
                  01
                  <span
                    className={`w-full h-[.5px] absolute left-0 bottom-0 group-hover:bg-secondaryColor duration-500 ${
                      qOne ? "bg-secondaryColor" : "bg-borderColor"
                    }`}
                  ></span>
                  <span
                    className={`w-[1px] h-[10px] absolute left-0 bottom-0 group-hover:bg-secondaryColor duration-500 ${
                      qOne ? "bg-secondaryColor" : "bg-borderColor"
                    }`}
                  ></span>
                </p>
              </div>
              <div className="flex flex-col gap-6 px-10">
                <h3 className="text-2xl font-semibold flex items-center justify-between">
                  Where is my order? {qOne ? <span>-</span> : <span>+</span>}
                </h3>
              </div>
            </div>
            {qOne && (
              <motion.div
                initial={{ y: -20, opacity: 0.5 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 0,
                  x: { type: "just", stiffness: 120 },
                  opacity: { duration: 0.5 },
                  ease: "easeIn",
                  duration: 0.4,
                }}
              >
                <p className="px-10 text-base text-darkText">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Animi saepe autem nihil ex at sapiente voluptatum veritatis
                  iure aliquid obcaecati.
                </p>
              </motion.div>
            )} */}
          </div>
          {/* ====================== Question 01 end here ========================== */}
          {/* ====================== Question 02 start here ========================== */}

          {/* ====================== Question 02 end here ========================== */}
        </div>
        <div className="w-full mdl:w-1/4 font-titleFont">
          <h3 className="font-titleFont text-2xl underline underline-offset-4 decoration-[1px] decoration-secondaryColor">
            Contact Info
          </h3>
          <div className="mt-4 flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <h4 className="text-lg uppercase">Bangladesh :</h4>
              <p className="flex items-center gap-3 text-darkText hover:text-white hover:cursor-pointer transition-hover duration-300">
                <span className="text-secondaryColor text-lg">
                  <FaHome />
                </span>
                Rupnogor Abashik Area, <br />
                Mirpur-1, Dhaka.
              </p>
              <p className="flex items-center gap-3 text-darkText hover:text-white hover:cursor-pointer transition-hover duration-300">
                <span className="text-secondaryColor text-lg">
                  <MdMarkEmailUnread />
                </span>
                reactjsbd@gmail.com
              </p>
              <p className="flex items-center gap-3 text-darkText hover:text-white hover:cursor-pointer transition-hover duration-300">
                <span className="text-secondaryColor text-lg">
                  <BsPhoneFill />
                </span>
                +968 97859628
              </p>
              <p className="flex items-center gap-3 text-darkText hover:text-white hover:cursor-pointer transition-hover duration-300">
                <span className="text-secondaryColor text-lg">
                  <IoLogoWhatsapp />
                </span>
                +968 97859628
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="text-lg uppercase">Oman :</h4>
              <p className="flex items-center gap-3 text-darkText hover:text-white hover:cursor-pointer transition-hover duration-300">
                <span className="text-secondaryColor text-lg">
                  <FaHome />
                </span>
                Muscat Business Area, Ruwi, <br />
                Muscat, Sultanate of Oman
              </p>
              <p className="flex items-center gap-3 text-darkText hover:text-white hover:cursor-pointer transition-hover duration-300">
                <span className="text-secondaryColor text-lg">
                  <MdMarkEmailUnread />
                </span>
                reactjsbd@gmail.com
              </p>
              <p className="flex items-center gap-3 text-darkText hover:text-white hover:cursor-pointer transition-hover duration-300">
                <span className="text-secondaryColor text-lg">
                  <BsPhoneFill />
                </span>
                +968 97859628
              </p>
              <p className="flex items-center gap-3 text-darkText hover:text-white hover:cursor-pointer transition-hover duration-300">
                <span className="text-secondaryColor text-lg">
                  <IoLogoWhatsapp />
                </span>
                +968 97859628
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
