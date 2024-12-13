import { Button } from "@/components/ui/button";
import React from "react";
import { Link } from "react-router-dom";
import MetaTags from "/src/components/MetaTags.jsx";

const ThankYou = ({ translations, language }) => {
  const isRtl = language === "ar";

  const metaTags =
    language === "en"
      ? {
          title: "Thank You - TRUST Real Estate",
          description:
            "We appreciate your choice! Your inquiry has been received.",
          keywords: "Thank You, TRUST, Real Estate, Inquiry, Success",
          ogTitle: "Thank You for Choosing Us - TRUST Real Estate",
          ogDescription:
            "Thank you for your inquiry! We appreciate your trust.",
          twitterTitle: "Thank You - TRUST Real Estate",
          twitterDescription:
            "Thank you for your inquiry. We will get back to you soon.",
        }
      : {
          title: "شكراً - تراست العقارية",
          description: "نحن نقدر اختيارك لنا! تم استلام استفسارك.",
          keywords: "شكراً,  تراست العقارية , العقارات, استفسار, نجاح",
          ogTitle: "شكراً لاختيارك لنا - تراست العقارية",
          ogDescription: "شكراً لاستفسارك! نحن نقدر ثقتك.",
          twitterTitle: "شكراً - تراست العقارية",
          twitterDescription: "شكراً لاستفسارك. سنعاود الاتصال بك قريباً.",
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

      <div className="bg-[url('/image/thankyouu.webp')] bg-cover bg-center text-white">
        <div className="container mx-auto py-32 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 ">
            {translations.pages.pageThankYou.Thank_You}
          </h1>
          <p className="text-lg lg:text-xl mb-8 ">
            {translations.pages.pageThankYou.We_Appreciate_Your_Inquiry}
          </p>
          <div className="bg-white dark:bg-[#1a1a1a] rounded-full p-8 mb-8 inline-block shadow-2xl animate-bounce">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-20 h-20 text-green-500 mx-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                trokeWidth="2"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <p className="text-lg lg:text-xl mb-8 font-semibold">
            {translations.pages.pageThankYou.We_Will_Get_Back_To_You_Soon}
          </p>
          <Link to="/">
            <Button className="inline-flex items-center px-8 py-3 text-white rounded-lg shadow-lg hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2">
              {translations.pages.pageThankYou.Go_Home}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
