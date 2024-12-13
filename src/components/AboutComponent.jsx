import React, { useMemo } from "react";
import { Link } from "react-router-dom";

const AboutComponent = ({ translations, language, data }) => {
  const isRtl = language === "ar";

  // Use site_advantages from backend data
  const points =
    data?.data?.site_advantages?.map((item) => ({
      id: item.id,
      content: item.content,
    })) || [];

  // قائمة الصور
  const images = useMemo(
    () => [
      {
        src: "/image/hh.webp",
        alt: "About Image 1",
        style: `image-1 relative shadow-lg mx-auto mb-8 sm:mb-0 sm:flex sm:justify-center sm:items-center sm:w-full ${
          isRtl ? "md:right-0" : "md:-left-20"
        } sm:relative`,
      },
      {
        src: "/image/bb.webp",
        alt: "About Image 2",
        style: `absolute -bottom-16 shadow-lg ${
          isRtl ? "left-0 2xl:left-20" : "right-0 md:right-20 2xl:right-20"
        } hidden md:block`,
      },
    ],
    [isRtl]
  );

  return (
    <section className="py-16 xl:pb-24 px-4">
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          {/* Content Column */}
          <div className="content-column w-full lg:w-1/2 order-2 lg:order-1 px-4">
            <div>
              <div className="mb-8">
                <span className="block text-lg text-primary font-medium mb-2">
                  {translations.mainContent.aboutSection.whos}
                </span>
                <h2 className="text-4xl font-bold leading-tight mb-4">
                  {translations.mainContent.aboutSection.firsth}
                  <br /> {translations.mainContent.aboutSection.secondh}
                </h2>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                {/* {translations.mainContent.aboutSection.experience} */}
                {data?.data.about}
              </p>

              <ul className="mb-8 space-y-3">
                {points.map((point) => (
                  <li
                    key={point.id}
                    className={`relative ${
                      isRtl ? "pr-8" : "pl-8"
                    } font-semibold`}
                  >
                    <span
                      className={`absolute ${
                        isRtl ? "right-0" : "left-0"
                      } top-0 text-primary text-xl font-bold`}
                    >
                      &#10003;
                    </span>
                    {point.content}
                  </li>
                ))}
              </ul>

              <div className="mt-24 md:mt-0">
                <Link
                  to="/contact-us"
                  className="bg-primary text-primary-foreground hover:bg-gray-800 text-white font-semibold py-3 px-6  transition rounded "
                >
                  {translations.mainContent.aboutSection.getInTouch}
                </Link>
              </div>
            </div>
          </div>

          {/* Image Column */}
          <div className="w-full lg:w-1/2 px-4 relative mb-12 md:mb-8 md:left-8">
            <div className="relative">
              {/* Decorative Circle */}
              <div
                className={`absolute ${
                  isRtl ? "left-4" : "right-4"
                } top-2 w-[520px] h-[520px] bg-center bg-no-repeat bg-cover hidden md:block dark:bg-none bg-[url('/image/about-circle-1.png')]`}
              ></div>
              {images.map((img, idx) => (
                <figure key={idx} className={img.style}>
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="rounded"
                    loading="lazy"
                  />
                </figure>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutComponent;
