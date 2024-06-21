import React from "react";
import {
  iconFour,
  iconFive,
  iconSix,
  iconSeven,
  iconEight,
  iconNine,
  iconTen,
  iconEleven,
} from "@/assets";
import Image from "next/image";

const BasicProducts = () => {
  return (
    <div className="max-w-screen-2xl mx-auto pt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 px-10">
      <div className="flex flex-col gap-7">
        <div>
          <p className="relative w-full h-auto px-3 group text-borderColor font-titleFont text-base">
            01
            <span className="w-full h-[.5px] bg-borderColor absolute left-0 bottom-0"></span>
            <span className="w-[1px] h-[10px] bg-borderColor absolute left-0 bottom-0"></span>
          </p>
        </div>
        <div className="flex items-center gap-8">
          <div>
            <Image src={iconFour} alt="iconFour" />
          </div>
          <div className="font-titleFont">
            <h3 className="text-2xl font-semibold tracking-wider">React js</h3>
            <p className="text-sm uppercase text-secondaryColor mt-1">
              The Future of web
            </p>
          </div>
        </div>
        <div>
          <p className="text-darkText text-base tracking-wide text-start">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            molestiae veniam quasi mollitia!
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-7">
        <div>
          <p className="relative w-full h-auto px-3 group text-borderColor font-titleFont text-base">
            02
            <span className="w-full h-[.5px] bg-borderColor absolute left-0 bottom-0"></span>
            <span className="w-[1px] h-[10px] bg-borderColor absolute left-0 bottom-0"></span>
          </p>
        </div>
        <div className="flex items-center gap-8">
          <div>
            <Image src={iconFive} alt="iconFive" />
          </div>
          <div className="font-titleFont">
            <h3 className="text-2xl font-semibold tracking-wider">
              React Native
            </h3>
            <p className="text-sm uppercase text-secondaryColor mt-1">
              Get you mobile App
            </p>
          </div>
        </div>
        <div>
          <p className="text-darkText text-base tracking-wide text-start">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            molestiae veniam quasi mollitia!
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-7">
        <div>
          <p className="relative w-full h-auto px-3 group text-borderColor font-titleFont text-base">
            03
            <span className="w-full h-[.5px] bg-borderColor absolute left-0 bottom-0"></span>
            <span className="w-[1px] h-[10px] bg-borderColor absolute left-0 bottom-0"></span>
          </p>
        </div>
        <div className="flex items-center gap-8">
          <div>
            <Image src={iconSix} alt="iconSix" />
          </div>
          <div className="font-titleFont">
            <h3 className="text-2xl font-semibold tracking-wider">Next js</h3>
            <p className="text-sm uppercase text-secondaryColor mt-1">
              Dynamic without limits
            </p>
          </div>
        </div>
        <div>
          <p className="text-darkText text-base tracking-wide text-start">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            molestiae veniam quasi mollitia!
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-7">
        <div>
          <p className="relative w-full h-auto px-3 group text-borderColor font-titleFont text-base">
            04
            <span className="w-full h-[.5px] bg-borderColor absolute left-0 bottom-0"></span>
            <span className="w-[1px] h-[10px] bg-borderColor absolute left-0 bottom-0"></span>
          </p>
        </div>
        <div className="flex items-center gap-8">
          <div>
            <Image src={iconSeven} alt="iconSeven" />
          </div>
          <div className="font-titleFont">
            <h3 className="text-2xl font-semibold tracking-wider">
              Tailwindcss
            </h3>
            <p className="text-sm uppercase text-secondaryColor mt-1">
              CSS Framework
            </p>
          </div>
        </div>
        <div>
          <p className="text-darkText text-base tracking-wide text-start">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            molestiae veniam quasi mollitia!
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-7">
        <div>
          <p className="relative w-full h-auto px-3 group text-borderColor font-titleFont text-base">
            05
            <span className="w-full h-[.5px] bg-borderColor absolute left-0 bottom-0"></span>
            <span className="w-[1px] h-[10px] bg-borderColor absolute left-0 bottom-0"></span>
          </p>
        </div>
        <div className="flex items-center gap-8">
          <div>
            <Image src={iconEight} alt="iconEight" />
          </div>
          <div className="font-titleFont">
            <h3 className="text-2xl font-semibold tracking-wider">Sanity.io</h3>
            <p className="text-sm uppercase text-secondaryColor mt-1">
              Content Is Data
            </p>
          </div>
        </div>
        <div>
          <p className="text-darkText text-base tracking-wide text-start">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            molestiae veniam quasi mollitia!
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-7">
        <div>
          <p className="relative w-full h-auto px-3 group text-borderColor font-titleFont text-base">
            06
            <span className="w-full h-[.5px] bg-borderColor absolute left-0 bottom-0"></span>
            <span className="w-[1px] h-[10px] bg-borderColor absolute left-0 bottom-0"></span>
          </p>
        </div>
        <div className="flex items-center gap-8">
          <div>
            <Image src={iconNine} alt="iconNine" />
          </div>
          <div className="font-titleFont">
            <h3 className="text-2xl font-semibold tracking-wider">Firebase</h3>
            <p className="text-sm uppercase text-secondaryColor mt-1">
              Speed up your App
            </p>
          </div>
        </div>
        <div>
          <p className="text-darkText text-base tracking-wide text-start">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            molestiae veniam quasi mollitia!
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-7">
        <div>
          <p className="relative w-full h-auto px-3 group text-borderColor font-titleFont text-base">
            07
            <span className="w-full h-[.5px] bg-borderColor absolute left-0 bottom-0"></span>
            <span className="w-[1px] h-[10px] bg-borderColor absolute left-0 bottom-0"></span>
          </p>
        </div>
        <div className="flex items-center gap-8">
          <div>
            <Image src={iconTen} alt="iconTen" />
          </div>
          <div className="font-titleFont">
            <h3 className="text-2xl font-semibold tracking-wider">Vercel</h3>
            <p className="text-sm uppercase text-secondaryColor mt-1">
              Deployment made easy
            </p>
          </div>
        </div>
        <div>
          <p className="text-darkText text-base tracking-wide text-start">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            molestiae veniam quasi mollitia!
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-7">
        <div>
          <p className="relative w-full h-auto px-3 group text-borderColor font-titleFont text-base">
            08
            <span className="w-full h-[.5px] bg-borderColor absolute left-0 bottom-0"></span>
            <span className="w-[1px] h-[10px] bg-borderColor absolute left-0 bottom-0"></span>
          </p>
        </div>
        <div className="flex items-center gap-8">
          <div>
            <Image src={iconEleven} alt="iconEleven" />
          </div>
          <div className="font-titleFont">
            <h3 className="text-2xl font-semibold tracking-wider">Netlify</h3>
            <p className="text-sm uppercase text-secondaryColor mt-1">
              Your web is here
            </p>
          </div>
        </div>
        <div>
          <p className="text-darkText text-base tracking-wide text-start">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            molestiae veniam quasi mollitia!
          </p>
        </div>
      </div>
    </div>
  );
};

export default BasicProducts;
