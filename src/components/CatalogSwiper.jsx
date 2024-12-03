import { TbArrowNarrowLeft, TbArrowNarrowRight } from "react-icons/tb";
import { Button } from "/src/components/ui/button.jsx";

import {
  desVariants,
  tagVariants,
  tittleVariants,
} from "/src/utills/animation.js";

import { motion } from "framer-motion";

import { Link } from "react-router-dom";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
export default function CatalogSwiperSection({ translations, language }) {
  const arrowIcon =
    language === "en" ? (
      <TbArrowNarrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-[8px] group-hover:text-primary" />
    ) : (
      <TbArrowNarrowLeft className="mr-2 transition-transform duration-300 group-hover:translate-x-[-8px] group-hover:text-primary" />
    );

  return (
    <div
      // dir={translate.direction || undefined}
      className="py-8 lg:py-28 overflow-hidden ml-8 md:ml-4"
    >
      <div
        className={`container grid pb-8 lg:grid-cols-1 mr-4 md:pr-8 ${
          language === "ar" ? "ml-4 md:pl-8" : ""
        }`}
      >
        <div>
          <motion.h1
            initial="offscreen"
            whileInView={"onscreen"}
            variants={tittleVariants}
            className="py-4 text-4xl font-medium lg:text-6xl lg:py-0"
          >
            {translations.mainContent.catalogswipersection.peace}
          </motion.h1>
          <motion.h2
            initial="offscreen"
            whileInView={"onscreen"}
            variants={desVariants}
            className="pb-6 text-xl font-bold tracking-wider mt-5"
          >
            {translations.mainContent.catalogswipersection.discover}
          </motion.h2>
        </div>
        <motion.div
          initial="offscreen"
          whileInView={"onscreen"}
          variants={tagVariants}
          className={`grid grid-cols-2 text-gray-500 gap-x-8`}
        >
          <p>{translations.mainContent.catalogswipersection.we_believe}</p>
          <p>
            {translations.mainContent.catalogswipersection.seamless_ownership}
          </p>
        </motion.div>
        <Link to="/financing">
          <Button className="inline-flex items-center px-8 py-3 mt-4 text-white rounded-full shadow-lg hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2">
            {
              translations.mainContent.catalogswipersection
                .yourـfinancingـawaits
            }
            {arrowIcon}
          </Button>
        </Link>
      </div>
      <Swiper
        className="marquee-container"
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {[
          "/image/swiper11.webp",
          "/image/swiper22.webp",
          "/image/swiper33.webp",
          "/image/swiper44.webp",
          "/image/swiper55.webp",
          "/image/swiper66.webp",
          "/image/swiper77.webp",
        ].map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt={`Swiper ${index + 1}`}
              width={520}
              height={220}
              className="w-full"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
