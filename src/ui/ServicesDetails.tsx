"use client";
import { GiCheckMark } from "react-icons/gi";
import ContactUs from "./ContactUs";
import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useState } from "react";

const ServicesDetails = ({
  no,
  title,
  startingAmt,
  detailsOne,
  detailsTwo,
  detailsThree,
  detailsFour,
  detailsFive,
}: any) => {
  let servicesDetailsData = [
    { id: 1001, title: detailsOne },
    { id: 1002, title: detailsTwo },
    { id: 1003, title: detailsThree },
    { id: 1004, title: detailsFour },
    { id: 1005, title: detailsFive },
  ];

  let [isOpen, setIsOpen] = useState(false);

  function close() {
    setIsOpen(false);
  }

  const handleOrder = (e: any) => {
    e.preventDefault();
    setIsOpen(true);
  };
  return (
    <>
      <div className="flex w-80 flex-col gap-8 border border-borderColor px-4 py-6 border-opacity-40 hover:border-transparent hover:shadow-customShadowOne hover:shadow-gray-600 transition-hover duration-500">
        <div>
          <p className="relative w-full h-auto px-3 group text-borderColor font-titleFont text-base">
            {no}
            <span className="w-full h-[.5px] bg-borderColor absolute left-0 bottom-0"></span>
            <span className="w-[1px] h-[10px] bg-borderColor absolute left-0 bottom-0"></span>
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold uppercase">{title}</h3>
          <p className="text-sm text-secondaryColor underline underline-offset-4 decoration-[1px] mt-1">
            Starting from:
          </p>
          <h2 className="text-4xl font-bodyFont mt-1 font-semibold">
            KES {startingAmt}
          </h2>
        </div>
        <div>
          <ul className="flex flex-col gap-2">
            {servicesDetailsData.map((item) => (
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
          </ul>
        </div>
        <div onClick={handleOrder} className="w-44">
          <ContactUs buttonData="Order Now" />
        </div>
      </div>
      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={close}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-secondaryColor/5 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <DialogTitle
                as="h3"
                className="text-base/7 font-medium text-white uppercase tracking-wide"
              >
                {title}
              </DialogTitle>
              <p className="mt-2 text-sm/6 text-white/50">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Maiores eaque pariatur magni quam dicta facere qui doloribus
                quaerat obcaecati, repudiandae beatae explicabo, cum vitae
                blanditiis id omnis necessitatibus iste voluptatibus.
              </p>
              <div className="mt-4">
                <Button
                  className="inline-flex items-center gap-2 rounded-md bg-secondaryColor/50 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-secondaryColor/10 focus:outline-none data-[hover]:bg-secondaryColor data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                  onClick={close}
                >
                  Got it, thanks!
                </Button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default ServicesDetails;
