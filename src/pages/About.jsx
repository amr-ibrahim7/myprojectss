import { desVariants, tagVariants, tittleVariants } from "@/utills/animation";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { TbArrowUpLeft, TbArrowUpRight } from "react-icons/tb";
import { Link } from "react-router-dom";
import MetaTags from "../components/MetaTags";
import TeamMember from "../components/TeamMember";
import { Button } from "../components/ui/button";
function About({ translations, language }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  const arrowIcon =
    language === "ar" ? (
      <TbArrowUpRight className="w-5 h-5 mr-2" />
    ) : (
      <TbArrowUpLeft className="w-5 h-5 ml-2" />
    );
  // meta tags based on language
  const metaTags =
    language === "en"
      ? {
          title: "About Us - Dar Al-Sundus Real Estate",
          description:
            "Dar Al-Sundus Real Estate provides innovative financing solutions for property purchases in Saudi Arabia.",
          keywords:
            "Dar Al-Sundus, Real Estate Finance, Property Purchase, Financing Solutions, Investors, Saudi Real Estate",
          ogTitle: "Dar Al-Sundus Real Estate",
          ogDescription:
            "We provide innovative financing solutions to facilitate the property purchase process and achieve your goals.",
          twitterTitle: "Dar Al-Sundus Real Estate",
          twitterDescription:
            "We provide innovative financing solutions to facilitate the property purchase process and achieve your goals.",
        }
      : {
          title: "من نحن - شركة تراست العقارية",
          description:
            "شركة تراست العقارية تقدم حلول تمويلية مبتكرة لشراء العقارات في السعودية.",
          keywords:
            "شركة دار السندس, تمويل عقاري, شراء عقارات, حلول تمويلية, مستثمرين, عقارات السعودية",
          ogTitle: "شركة تراست العقارية",
          ogDescription:
            "نحن نقدم حلول تمويلية مبتكرة لتسهيل عملية شراء العقارات وتحقيق أهدافك.",
          twitterTitle: "شركة تراست العقارية",
          twitterDescription:
            "نحن نقدم حلول تمويلية مبتكرة لتسهيل عملية شراء العقارات وتحقيق أهدافك.",
        };

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
              {translations.pages.page_about.At_Dar_AlSondos}
              <br /> <br />
              {translations.pages.page_about.We_act}
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

        {/* team section */}

        <div className="lg:py-20">
          <div className="pt-8 pb-4">
            <motion.h1
              initial="offscreen"
              whileInView={"onscreen"}
              variants={tittleVariants}
              className="text-4xl font-bold tracking-wider text-center"
            >
              {translations.pages.page_about.Experts}
            </motion.h1>
          </div>

          <div className="grid py-8 gap-20 lg:grid-cols-3 mr-9">
            {/* <div className="hidden">
              <TeamMember
                name="حسام النحيط"
                image="/image/ceo.jpg"
                description="الإبداع هو القدرة على توليد أو إنشاء أو اكتشاف أفكار وحلول وإمكانيات جديدة"
                variants={tittleVariants}
              />
            </div> */}
            <div className="flex justify-center lg:col-span-3">
              <TeamMember
                name={translations.pages.page_about.Owner_Name}
                image="/image/ceo.jpg"
                description={translations.pages.page_about.CEOـofـDarـAlSondos}
                variants={desVariants}
              />
            </div>
            {/* <div className="hidden">
              <TeamMember
                name="فاطمة الزهراء"
                image="/image/profile3.jpg"
                description="الإبداع هو القدرة على توليد أو إنشاء أو اكتشاف أفكار وحلول وإمكانيات جديدة"
                variants={tagVariants}
              />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
