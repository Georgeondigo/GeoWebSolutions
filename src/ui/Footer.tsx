import React from "react";
import {
  BsTwitter,
  BsYoutube,
  BsGithub,
  BsFillPhoneFill,
} from "react-icons/bs";
import { ImFacebook } from "react-icons/im";
import { FaHome } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-4 gap-8 py-10 border-t border-t-borderColor">
      <div className="flex flex-col gap-4">
        <h2 className="font-titleFont text-2xl font-normal tracking-wider">
          GeoWeb 
        </h2>
        <p className="text-base text-darkText tracking-wide">
          Lorem ipsum dolor sit amet, consyect etur adipiscing elit. Quisque
          actraqum nunc no dolor sit amet augue dolor.
        </p>
        <p className="flex items-center text-lg gap-5">
          <BsTwitter className="text-white hover:text-secondaryColor duration-500 cursor-pointer" />
          <ImFacebook className="text-white hover:text-secondaryColor duration-500 cursor-pointer" />
          <BsYoutube className="text-white hover:text-secondaryColor duration-500 cursor-pointer" />
          <BsGithub className="text-white hover:text-secondaryColor duration-500 cursor-pointer" />
        </p>
      </div>
      <div>
        <h3 className="font-titleFont text-xl font-semibold mb-4">
          Contact Info
        </h3>
        <div className="flex flex-col gap-6">
          <p className="font-base text-darkText flex items-start gap-6 justify-start hover:text-white duration-500 cursor-pointer">
            <span className="text-white text-xl">
              <FaHome />
            </span>
            198 West 21th Street, Suite 721 New York, NY 10010
          </p>
          <p className="font-base text-darkText flex items-start gap-6 justify-start hover:text-white duration-500 cursor-pointer">
            <span className="text-white text-xl">
              <MdEmail />
            </span>
            reactjsbd@gmail.com
          </p>
          <p className="font-base text-darkText flex items-start gap-6 justify-start hover:text-white duration-500 cursor-pointer">
            <span className="text-white text-xl">
              <BsFillPhoneFill />
            </span>
            +00 24187626
          </p>
        </div>
      </div>
      <div>
        <h3 className="font-titleFont text-xl font-semibold mb-4">
          Blog Contains
        </h3>
        <div className="flex flex-col gap-6">
          <p className="font-base text-darkText flex items-start gap-6 justify-start hover:text-white duration-500 cursor-pointer">
            <span className="text-white text-xl">
              <FaHome />
            </span>
            198 West 21th Street, Suite 721 New York, NY 10010
          </p>
          <p className="font-base text-darkText flex items-start gap-6 justify-start hover:text-white duration-500 cursor-pointer">
            <span className="text-white text-xl">
              <MdEmail />
            </span>
            reactjsbd@gmail.com
          </p>
          <p className="font-base text-darkText flex items-start gap-6 justify-start hover:text-white duration-500 cursor-pointer">
            <span className="text-white text-xl">
              <BsFillPhoneFill />
            </span>
            +00 24187627
          </p>
        </div>
      </div>
      <div>
        <h3 className="font-titleFont text-xl font-semibold mb-4">
          Support & Downloads
        </h3>
        <p className="text-base text-darkText">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus
          voluptates, fuga aliquam nobis placeat iusto illum fugiat consequuntur
          ad tempora.
        </p>
      </div>
    </div>
  );
};

export default Footer;
