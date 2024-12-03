import { ChevronUpIcon } from "@radix-ui/react-icons";
import { throttle } from "lodash";
import React, { useCallback, useEffect, useState } from "react";
import { animateScroll as scroll } from "react-scroll";

const BackToTopBtn = ({ language }) => {
  const [show, setShow] = useState(false);

  // const isArabic = translate.Arabic === "Arabic";
  const isRTL = language === "ar";
  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 1500,
      smooth: "easeInOutQuart",
    });
  };

  const handleScroll = useCallback(
    throttle(() => {
      setShow(window.scrollY > 600);
    }, 200),
    []
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      handleScroll.cancel();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    show && (
      <button
        onClick={scrollToTop}
        className={`bg-primary w-10 h-10 hover:bg-gray-800 text-white rounded-full fixed bottom-[4.5rem] cursor-pointer flex justify-center items-center transition-all z-50 ${
          isRTL ? "left-6" : "right-6"
        }`}
      >
        <ChevronUpIcon className="w-6 h-6" />
      </button>
    )
  );
};

export default BackToTopBtn;
