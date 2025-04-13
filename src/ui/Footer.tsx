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
      {/* Company Info */}
      <div className="flex flex-col gap-4">
        <h2 className="font-titleFont text-2xl font-normal tracking-wider">
          GeoWeb 
        </h2>
        <p className="text-base text-darkText tracking-wide">
          GeoWeb Solutions is dedicated to providing modern, dynamic web development
          services tailored for small businesses. Elevate your online presence with us.
        </p>
        <p className="flex items-center text-lg gap-5">
          <BsTwitter className="text-white hover:text-secondaryColor duration-500 cursor-pointer" />
          <ImFacebook className="text-white hover:text-secondaryColor duration-500 cursor-pointer" />
          <BsYoutube className="text-white hover:text-secondaryColor duration-500 cursor-pointer" />
          <BsGithub className="text-white hover:text-secondaryColor duration-500 cursor-pointer" />
        </p>
      </div>

      {/* Contact Info */}
      <div>
        <h3 className="font-titleFont text-xl font-semibold mb-4">
          Contact Info
        </h3>
        <div className="flex flex-col gap-6">
          <p className="font-base text-darkText flex items-start gap-6 justify-start hover:text-white duration-500 cursor-pointer">
            <span className="text-white text-xl">
              <FaHome />
            </span>
            Nairobi kenya
          </p>
          <p className="font-base text-darkText flex items-start gap-6 justify-start hover:text-white duration-500 cursor-pointer">
            <span className="text-white text-xl">
              <MdEmail />
            </span>
            info@geowebsolutions.co.ke
          </p>
          <p className="font-base text-darkText flex items-start gap-6 justify-start hover:text-white duration-500 cursor-pointer">
            <span className="text-white text-xl">
              <BsFillPhoneFill />
            </span>
            +254 111 294 844
          </p>
        </div>
      </div>

      {/* Blog Content */}
      <div>
        <h3 className="font-titleFont text-xl font-semibold mb-4">
          Blog Contents
        </h3>
        <div className="flex flex-col gap-6">
          <p className="font-base text-darkText flex items-start gap-6 justify-start hover:text-white duration-500 cursor-pointer">
            How to Boost Your Online Presence with a Website
          </p>
          <p className="font-base text-darkText flex items-start gap-6 justify-start hover:text-white duration-500 cursor-pointer">
            The Importance of Mobile-Friendly Design for Small Businesses
          </p>
          <p className="font-base text-darkText flex items-start gap-6 justify-start hover:text-white duration-500 cursor-pointer">
            SEO Tips to Rank Higher in 2024
          </p>
        </div>
      </div>

      {/* Support & Downloads */}
      <div>
        <h3 className="font-titleFont text-xl font-semibold mb-4">
          Support & Downloads
        </h3>
        <p className="text-base text-darkText">
          Get the latest updates, resources, and software to keep your website running smoothly. Reach out for any support needs or download important documentation and tools.
        </p>
      </div>
    </div>
  );
};

export default Footer;
