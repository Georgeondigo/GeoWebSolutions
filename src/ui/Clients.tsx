import React from "react";
import {
  clientOne,
  clientTwo,
  clientThree,
  clientFour,
  clientFive,
  clientSix,
} from "../../public/assets";
import Image from "next/image";

const Clients = () => {
  return (
    <div className="max-w-screen-2xl mx-auto py-10 px-6 mdl:py-20 lg:py-32 flex flex-col md:flex-row gap-6 lg:gap-0 items-center justify-evenly lg:justify-between flex-wrap">
      <Image
        className="w-24 grayscale hover:grayscale-0 transition-grayscale duration-500 hover:cursor-pointer"
        src={clientOne}
        alt="clientOne"
      />
      <Image
        className="w-24 grayscale hover:grayscale-0 transition-grayscale duration-500 hover:cursor-pointer"
        src={clientTwo}
        alt="clientTwo"
      />
      <Image
        className="w-24 grayscale hover:grayscale-0 transition-grayscale duration-500 hover:cursor-pointer"
        src={clientThree}
        alt="clientThree"
      />
      <Image
        className="w-24 grayscale hover:grayscale-0 transition-grayscale duration-500 hover:cursor-pointer"
        src={clientFour}
        alt="clientFour"
      />
      <Image
        className="w-24 grayscale hover:grayscale-0 transition-grayscale duration-500 hover:cursor-pointer"
        src={clientFive}
        alt="clientFive"
      />
      <Image
        className="w-24 grayscale hover:grayscale-0 transition-grayscale duration-500 hover:cursor-pointer"
        src={clientSix}
        alt="clientSix"
      />
    </div>
  );
};

export default Clients;
