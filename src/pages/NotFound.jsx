import React from "react";
import { Link } from "react-router-dom";
import MetaTags from "../components/MetaTags";

function NotFound({ translations, language }) {
  const metaTags =
    language === "en"
      ? {
          title: "Page Not Found - Dar Al-Sundus Real Estate",
          description:
            "Sorry, the page you're looking for doesn't exist. Please go back to the homepage or contact Dar Al-Sundus Real Estate for assistance.",
          keywords:
            "Page Not Found, Dar Al-Sundus Real Estate, Saudi Real Estate, Inquiries, Go Back to Home",
          ogTitle: "Page Not Found - Dar Al-Sundus Real Estate",
          ogDescription:
            "Sorry, the page you're looking for doesn't exist. Please go back to the homepage or contact Dar Al-Sundus Real Estate for assistance.",
          twitterTitle: "Page Not Found - Dar Al-Sundus Real Estate",
          twitterDescription:
            "Sorry, the page you're looking for doesn't exist. Please go back to the homepage or contact Dar Al-Sundus Real Estate for assistance.",
        }
      : {
          title: "الصفحة غير موجودة - تراست العقارية",
          description:
            "عذراً، الصفحة التي تبحث عنها غير موجودة. يرجى العودة إلى الصفحة الرئيسية أو التواصل مع تراست العقارية للحصول على المساعدة.",
          keywords:
            "الصفحة غير موجودة, تراست العقارية, عقارات السعودية, استفسارات, عودة إلى الصفحة الرئيسية",
          ogTitle: "الصفحة غير موجودة - تراست العقارية",
          ogDescription:
            "عذراً، الصفحة التي تبحث عنها غير موجودة. يرجى العودة إلى الصفحة الرئيسية أو التواصل مع تراست العقارية للحصول على المساعدة.",
          twitterTitle: "الصفحة غير موجودة - تراست العقارية",
          twitterDescription:
            "عذراً، الصفحة التي تبحث عنها غير موجودة. يرجى العودة إلى الصفحة الرئيسية أو التواصل مع تراست العقارية للحصول على المساعدة.",
        };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-black">
      <MetaTags
        title={metaTags.title}
        description={metaTags.description}
        keywords={metaTags.keywords}
        ogTitle={metaTags.ogTitle}
        ogDescription={metaTags.ogDescription}
        twitterTitle={metaTags.twitterTitle}
        twitterDescription={metaTags.twitterDescription}
      />
      <h1
        className={`md:text-[35vh] font-bold bg-clip-text text-transparent ${
          language === "en" ? "text-[15vh]" : "text-[6vh]"
        } `}
        style={{
          backgroundImage: "url('/image/erro.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          pointerEvents: "none",
        }}
      >
        {translations.pages.pageNotFound.Oops}
      </h1>
      <p className={`mb-4 ${language === "en" ? "text-base" : "text-xl"}`}>
        {translations.pages.pageNotFound.Sorry_page}
      </p>
      <Link
        to="/"
        className="text-primary text-lg hover:underline hover:text-secondary-foreground"
      >
        {translations.pages.pageNotFound.Go_Home}
      </Link>
    </div>
  );
}

export default NotFound;
