import React, { useEffect } from "react";
import { BsArrowUp } from "react-icons/bs";

const ScrollBtn = () => {
  useEffect(() => {
    let scrollBtn = document.querySelector(".scrollBtn");

    window.onscroll = function () {
      scrollFunction();
    };
    function scrollFunction() {
      if (
        document.body.scrollTop > 300 ||
        document.documentElement.scrollTop > 300
      ) {
        if (scrollBtn) {
          // @ts-ignore
          scrollBtn.style.display = "block";
        }
      } else {
        if (scrollBtn) {
          // @ts-ignore
          scrollBtn.style.display = "none";
        }
      }
    }

    function scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    if (scrollBtn) {
      scrollBtn.addEventListener("click", () => {
        scrollToTop();
      });
    }

    // Cleanup the event listener on component unmount
    return () => {
      if (scrollBtn) {
        scrollBtn.removeEventListener("click", scrollToTop);
      }
    };
  }, []);
  return (
    <div className="w-12 h-12 z-10 text-2xl hidden scrollBtn">
      <button className="w-full h-full flex items-center justify-center relative overflow-hidden group">
        <BsArrowUp />
        <span className="w-full h-[1px] bg-secondaryColor absolute top-0 inline-block -translate-y-[.3px] group-hover:translate-y-0 transition-transform duration-300"></span>
        <span className="w-full h-[1px] bg-secondaryColor absolute bottom-0 inline-block translate-y-[.3px] group-hover:translate-y-0 transition-transform duration-300"></span>
        <span className="w-[1px] h-full bg-secondaryColor absolute left-0 inline-block -translate-x-[.3px] group-hover:translate-x-0 transition-transform duration-300"></span>
        <span className="w-[1px] h-full bg-secondaryColor absolute right-0 inline-block translate-x-[.3px] group-hover:translate-x-0 transition-transform duration-300"></span>
      </button>
    </div>
  );
};

export default ScrollBtn;
