import React from "react";
// import { AiOutlineClose } from "react-icons/ai";

const SideNav = () => {
  return (
    <div className="w-[500px] h-screen px-10 absolute top-0 right-0 bg-black text-white flex flex-col justify-center gap-4">
      <h4 className="font-titleFont text-lg text-white">Support & Downloads</h4>
      <p className="text-gray-400">
        If you need any assistance or wish to download resources, feel free to browse 
        through our support section. Our team is ready to help with any inquiries.
      </p>
      <p className="text-gray-400">
        Explore our download center for the latest software, manuals, and updates. 
        We aim to ensure you have everything you need to keep things running smoothly.
      </p>
      {/* <span
        onClick={() => setToggleNav(false)}
        className="text-white text-lg absolute top-10 right-10 animate-spin hover:animate-none hover:cursor-pointer"
      >
        <AiOutlineClose />
      </span> */}
    </div>
  );
};

export default SideNav;
