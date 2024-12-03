import React from "react";
import Marquee from "react-fast-marquee";

function MarqueeSwiper({ translations, language }) {
  const isRtl = language === "ar";
  const row1 = [
    "https://aqarek.s3.eu-central-1.amazonaws.com/Media/%20website/23D2YCWA.svg",
    "https://aqarek.s3.eu-central-1.amazonaws.com/Media/%20website/24IG9EKV.png",
    "https://aqarek.s3.eu-central-1.amazonaws.com/Media/%20website/23SEF5I6.svg",
    "https://aqarek.s3.eu-central-1.amazonaws.com/Media/%20website/233NE86Z.svg",
    "https://aqarek.s3.eu-central-1.amazonaws.com/Media/%20website/230VFGEX.svg",
    "https://aqarek.s3.eu-central-1.amazonaws.com/Media/%20website/23JD9F6Q.svg",
    "https://aqarek.s3.eu-central-1.amazonaws.com/Media/%20website/23ALGMRS.svg",
    "https://aqarek.s3.eu-central-1.amazonaws.com/Media/%20website/23D2YCWA.svg",
    "https://aqarek.s3.eu-central-1.amazonaws.com/Media/%20website/233NE86Z.svg",
    "https://aqarek.s3.eu-central-1.amazonaws.com/Media/%20website/230VFGEX.svg",
    "https://aqarek.s3.eu-central-1.amazonaws.com/Media/%20website/23D2BJNN.svg",
  ];

  return (
    <div className="container py-12 xl:py-24 h-auto mx-auto">
      <div className="flex flex-col items-center justify-center">
        <h1
          className={`relative inline-block text-[20px] font-sans text-gray-400 uppercase before:content-[attr(data-text)] 
                 before:absolute before:top-0 ${
                   isRtl ? "before:right-0" : "before:left-0"
                 }  before:text-gray-800 before:dark:text-gray-200  before:w-0 
                 before:overflow-hidden before:whitespace-nowrap before:transition-all 
                 before:duration-1000 hover:before:w-full`}
          data-text={translations.mainContent.marqueeSwiperSection.dar_alsondos}
        >
          {translations.mainContent.marqueeSwiperSection.dar_alsondos}
        </h1>
        <p className="text-primary">
          {translations.mainContent.marqueeSwiperSection.our_partners}
        </p>

        <h2 className="py-6 text-2xl sm:text-3xl font-extrabold leading-tight">
          {translations.mainContent.marqueeSwiperSection.we_take}
        </h2>
      </div>
      <Marquee
        pauseOnHover={false}
        speed={40}
        loop={0}
        gradient={false}
        className="w-full marquee-container my-10 p-4 bg-[#fff] dark:bg-background clip-path-custom"
      >
        {row1.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`partner-${index}`}
            className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 mx-2 sm:mx-4 md:mx-10 object-contain dark:bg-[hsl(0,0%,96%)] dark:rounded-lg dark:filter dark:brightness-80 dark:shadow-md dark:shadow-black transition-transform duration-300 hover:scale-110 hover:rotate-3"
            loading="lazy"
          />
        ))}
      </Marquee>
    </div>
  );
}

export default MarqueeSwiper;