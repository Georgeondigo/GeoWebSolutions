"use client";
import TitleBanner from "@/ui/TitleBanner";
import React, { useState } from "react";

import { GiCheckMark } from "react-icons/gi";

const Order = () => {
  //   const location = us();
  //   let data = location.state;

  //  ================ Form input start here ==================
  let [firstname, setFirstname] = useState("");
  let [lastname, setLastname] = useState("");
  let [email, setEmail] = useState("");
  let [phoneNumber, setPhoneNumber] = useState("");
  let [company, setCompany] = useState("");
  let [message, setMessage] = useState("");
  //  ================ Form input end here ====================
  const emailValidation = (email: string) => {
    return String(email)
      .toLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };
  let [errMessage, setErrMessage] = useState("");
  let [successMessage, setSuccessMessage] = useState("");

  const handleSend = (e: any) => {
    e.preventDefault();
    if (firstname === "") {
      setErrMessage("First name is required");
    } else if (lastname === "") {
      setErrMessage("Last name is required");
    } else if (email === "") {
      setErrMessage("Email is required");
    } else if (!emailValidation(email)) {
      setErrMessage("Give a Valid Email");
    } else if (phoneNumber === "") {
      setErrMessage("Phone Number is required");
    } else if (message === "") {
      setErrMessage("Message is required");
    } else {
      setFirstname("");
      setLastname("");
      setEmail("");
      setPhoneNumber("");
      setCompany("");
      setMessage("");
      setSuccessMessage(
        `Hello dear ${firstname} ${lastname}.  We received your message successfully and thank you for choosing portfolio design. Additional details will send to you by your email at ${email} and our responsible personnel will contact you shortly. Thank you for your time.`
      );
    }
    console.log(errMessage);
  };
  return (
    <div>
      <TitleBanner subtitle="Find your products with us" title="Your Order" />
      <div className="max-w-screen-2xl mx-auto py-20 -mt-20 px-4">
        <div className="w-full flex flex-col items-center">
          <div className="flex flex-col">
            <h5 className="text-2xl text-secondaryColor font-titleFont font-semibold underline underline-offset-4 decoration-[1px]">
              Your Package
            </h5>
            {/* <h2 className="text-2xl uppercase font-semibold mt-1 tracking-wide">
              {data.title}
            </h2>
            <p className="text-xl">
              Starting from : BDT{" "}
              <span className="text-secondaryColor text-2xl font-semibold">
                {data.startingAmt}
              </span>
            </p>
            <ul className="flex flex-col gap-1 mt-2">
              {data.servicesDetailsData.map((item):any => (
                <li
                  key={item.id}
                  className="flex items-center gap-4 text-base text-darkText hover:text-white transition-hover duration-300 hover:cursor-pointer"
                >
                  <span className="text-secondaryColor">
                    <GiCheckMark />
                  </span>
                  {item.title}.
                </li>
              ))}
            </ul> */}
            <p className="font-titleFont text-base mt-2">
              Please fill in the below information to confirm your order:
            </p>
          </div>
          <div className="w-full flex items-center justify-center pt-10 font-titleFont">
            {/* =============================================================
                                    Form start here
             ============================================================== */}

            <form className="w-[600px] h-auto border border-borderColor border-opacity-50 p-5">
              {successMessage ? (
                <p className="text-lg font-bodyFont tracking-wider text-green-400 font-normal">
                  {successMessage}
                </p>
              ) : (
                <>
                  <div className="flex flex-col mdl:flex-row items-center justify-between gap-1 px-2">
                    <h4 className="text-secondaryColor text-xl mb-2">
                      Contact Form
                    </h4>
                    {errMessage && (
                      <h4 className="text-red-500 text-base bg-gray-900 px-4 font-semibold mb-2 animate-bounce">
                        {errMessage} !
                      </h4>
                    )}
                  </div>
                  <div className="flex flex-col gap-1 text-base text-gray-100 font-titleFont">
                    <div className="w-full flex flex-col md:flex-row gap-0 md:gap-6">
                      <input
                        onChange={(e) => setFirstname(e.target.value)}
                        value={firstname}
                        className="w-full md:w-1/2 outline-none rounded-sm px-4 pt-5 pb-2 placeholder:text-sm bg-transparent border-b-[1px] border-b-borderColor focus:border-b-secondaryColor placeholder:translate-y-0 focus:placeholder:-translate-y-5 placeholder:transition-transform duration-500 placeholder:uppercase"
                        type="text"
                        placeholder="First name"
                      />
                      <input
                        onChange={(e) => setLastname(e.target.value)}
                        value={lastname}
                        className="w-full md:w-1/2 outline-none rounded-sm px-4 pt-5 pb-2 placeholder:text-sm bg-transparent border-b-[1px] border-b-borderColor focus:border-b-secondaryColor placeholder:translate-y-0 focus:placeholder:-translate-y-5 placeholder:transition-transform duration-500 placeholder:uppercase"
                        type="text"
                        placeholder="Last name"
                      />
                    </div>
                    <input
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      className="w-full outline-none rounded-sm px-4 pt-5 pb-2 placeholder:text-sm bg-transparent border-b-[1px] border-b-borderColor focus:border-b-secondaryColor placeholder:translate-y-0 focus:placeholder:-translate-y-5 placeholder:transition-transform duration-500 placeholder:uppercase"
                      type="email"
                      placeholder="Your Email"
                    />
                    <input
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      value={phoneNumber}
                      className="w-full outline-none rounded-sm px-4 pt-5 pb-2 placeholder:text-sm bg-transparent border-b-[1px] border-b-borderColor focus:border-b-secondaryColor placeholder:translate-y-0 focus:placeholder:-translate-y-5 placeholder:transition-transform duration-500 placeholder:appearance-none placeholder:uppercase"
                      type="number"
                      placeholder="Your Phone Number"
                    />
                    <input
                      onChange={(e) => setCompany(e.target.value)}
                      value={company}
                      className="w-full outline-none rounded-sm px-4 pt-5 pb-2 placeholder:text-sm bg-transparent border-b-[1px] border-b-borderColor focus:border-b-secondaryColor placeholder:translate-y-0 focus:placeholder:-translate-y-5 placeholder:transition-transform duration-500 placeholder:appearance-none placeholder:uppercase"
                      type="text"
                      placeholder="Company Name"
                    />

                    <textarea
                      onChange={(e) => setMessage(e.target.value)}
                      value={message}
                      className="w-full outline-none rounded-sm px-4 pt-5 pb-2 placeholder:text-sm bg-transparent border-b-[1px] border-b-borderColor focus:border-b-secondaryColor placeholder:translate-y-0 focus:placeholder:-translate-y-5 placeholder:transition-transform duration-500 resize-none placeholder:uppercase"
                      id=""
                      cols={30}
                      rows={5}
                      placeholder="YOUR MESSAGE"
                    />
                  </div>
                  <button
                    onClick={handleSend}
                    className="relative w-full text-lg font-semibold uppercase font-titleFont active:bg-secondaryColor tracking-[4px] border p-2 border-gray-800 mt-8 overflow-hidden group"
                  >
                    Send
                    <span className="absolute w-full h-[1px] bg-secondaryColor left-0 top-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-500"></span>
                    <span className="absolute w-full h-[1px] bg-secondaryColor left-0 bottom-0 translate-x-[100%] group-hover:translate-x-0 transition-transform duration-500"></span>
                    <span className="absolute w-[1px] h-full bg-secondaryColor left-0 bottom-0 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500"></span>
                    <span className="absolute w-[1px] h-full bg-secondaryColor right-0 bottom-0 -translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500"></span>
                  </button>
                </>
              )}
            </form>
            {/* =============================================================
                                    Form end here
             ============================================================== */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
