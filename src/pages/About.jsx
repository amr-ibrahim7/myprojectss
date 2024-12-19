import { desVariants, tagVariants, tittleVariants } from "@/utills/animation";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { TbArrowUpLeft, TbArrowUpRight } from "react-icons/tb";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import MetaTags from "../components/MetaTags";
// import TeamMember from "../components/TeamMember";
import { Button } from "../components/ui/button";

function About({ translations, language, fetchDynamicData }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  // استخدام useQuery لجلب البيانات
  const {
    data: globalData,
    isLoading,
    isError,
  } = useQuery(
    ["aboutData", language],
    () => fetchDynamicData("about-us", language),
    {
      // خيارات إضافية
      enabled: !!language, // تشغيل الفيتش فقط عند وجود اللغة
      onError: (error) => {
        console.error("Error fetching global data", error);
      },
    }
  );

  const scale = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  const arrowIcon =
    language === "ar" ? (
      <TbArrowUpRight className="w-5 h-5 mr-2" />
    ) : (
      <TbArrowUpLeft className="w-5 h-5 ml-2" />
    );

  const metaTags =
    language === "en"
      ? {
          title: "About Us - TRUST Real Estate",
          description:
            "TRUST Real Estate provides innovative financing solutions for property purchases in Saudi Arabia.",
          keywords:
            "TRUST, Real Estate Finance, Property Purchase, Financing Solutions, Investors, Saudi Real Estate",
          ogTitle: "TRUST Real Estate",
          ogDescription:
            "We provide innovative financing solutions to facilitate the property purchase process and achieve your goals.",
          twitterTitle: "TRUST Real Estate",
          twitterDescription:
            "We provide innovative financing solutions to facilitate the property purchase process and achieve your goals.",
        }
      : {
          title: "من نحن - شركة تراست العقارية",
          description:
            "شركة تراست العقارية تقدم حلول تمويلية مبتكرة لشراء العقارات في السعودية.",
          keywords:
            "شركة تراست العقارية , تمويل عقاري, شراء عقارات, حلول تمويلية, مستثمرين, عقارات السعودية",
          ogTitle: "شركة تراست العقارية",
          ogDescription:
            "نحن نقدم حلول تمويلية مبتكرة لتسهيل عملية شراء العقارات وتحقيق أهدافك.",
          twitterTitle: "شركة تراست العقارية",
          twitterDescription:
            "نحن نقدم حلول تمويلية مبتكرة لتسهيل عملية شراء العقارات وتحقيق أهدافك.",
        };

  // Custom Spinner Component
  const CustomSpinner = () => (
    <div className="flex justify-center items-center w-full py-16">
      <div className="animate-spin w-12 h-12 border-4 border-primary border-t-transparent rounded-full" />
    </div>
  );

  return (
    <div>
      <MetaTags
        title={metaTags.title}
        description={metaTags.description}
        keywords={metaTags.keywords}
        ogTitle={metaTags.ogTitle}
        ogDescription={metaTags.ogDescription}
        twitterTitle={metaTags.twitterTitle}
        twitterDescription={metaTags.twitterDescription}
      />

      <div className="bg-[url('/image/whoweare.webp')] bg-center bg-cover">
        <h1 className="container py-32 text-6xl font-bold text-black tracking-widest text-center lg:py-64">
          {translations.pages.page_about.Whos}
        </h1>
      </div>

      <div className="container mx-auto">
        <div className="pt-4">
          <motion.h2
            initial="offscreen"
            whileInView={"onscreen"}
            variants={tittleVariants}
            className="text-3xl font-semibold text-center lg:p-10 lg:text-5xl"
          >
            {translations.pages.page_about.We_are}
          </motion.h2>
          <motion.p
            initial="offscreen"
            whileInView={"onscreen"}
            variants={desVariants}
            className="text-2xl text-center font-medium pb-10 mt-5"
          >
            {translations.pages.page_about.Dar_AlSondos_facilitates}
          </motion.p>
        </div>

        {isLoading ? (
          <CustomSpinner />
        ) : isError ? (
          <p>هناك خطأ في جلب البيانات.</p>
        ) : (
          <div className="items-center lg:flex gap-x-8 md:mr-9">
            {/* right section */}
            <motion.div style={{ scale }} ref={ref} className="w-full">
              <img src="/image/About22.webp" width={700} height={700} />
            </motion.div>
            {/* left section */}
            <motion.div
              initial="offscreen"
              whileInView={"onscreen"}
              variants={tagVariants}
            >
              <p className="pb-8 tracking-wide mt-6">
                {globalData.data} {/* عرض الداتا المستلمة هنا */}
                <br /> <br />
                <span className="text-xl font-extrabold tracking-tight">
                  {translations.pages.page_about.Our_Goal}
                </span>
              </p>
              <Link to="/financing">
                <Button className="inline-flex items-center px-8 py-3 shadow-lg hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2">
                  {translations.pages.page_about.YourـFinancingـAwaits}
                  {arrowIcon}
                </Button>
              </Link>
            </motion.div>
          </div>
        )}

        {/* team section */}

        <div className="lg:py-20"></div>
      </div>
    </div>
  );
}

export default About;
