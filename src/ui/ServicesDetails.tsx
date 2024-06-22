import React from "react";
import { GiCheckMark } from "react-icons/gi";
import ContactUs from "./ContactUs";
import { useRouter } from "next/navigation";

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

  const data = { title, startingAmt, servicesDetailsData };
  const router = useRouter();

  const handleOrder = (e: any) => {
    e.preventDefault();
    // router.push("/orders");
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
            BDT {startingAmt}
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
    </>
  );
};

export default ServicesDetails;
