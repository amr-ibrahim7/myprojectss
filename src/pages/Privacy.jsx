// import React, { useContext, useEffect, useState } from "react";
// import Loader from "../components/Loader";
// import { LanguageContext } from "../context/LanguageContext";

// function Privacy() {
//   const { language, translations, fetchDynamicData } =
//     useContext(LanguageContext);
//   const [privacyData, setPrivacyData] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const loadPrivacyData = async () => {
//       try {
//         setIsLoading(true);
//         const data = await fetchDynamicData("privacy", language);
//         setPrivacyData(data);
//         setError(null);
//       } catch (error) {
//         console.error("Error loading privacy data:", error);
//         setError("حدث خطأ أثناء تحميل بيانات الخصوصية");
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     loadPrivacyData();
//   }, [language]);

//   if (isLoading) return <Loader />;
//   if (error) return <div>{error}</div>;
//   return (
//     <div>
//       <h1>{translations.pages.page_privacy.HowـHandleـPersonal}</h1>
//       {privacyData && (
//         <div className="privacy-content">
//           {privacyData.data.split("\n").map((paragraph, index) => (
//             <p key={index} className="privacy-paragraph">
//               {paragraph}
//             </p>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default Privacy;

import { Button } from "@/components/ui/button";
import React from "react";
import { Link } from "react-router-dom";
import MetaTags from "/src/components/MetaTags.jsx";

const Privacy = ({ translations, language }) => {
  const isRtl = language === "ar";
  const metaTags =
    language === "en"
      ? {
          title: "Privacy Policy - Dar Al-Sundus Real Estate",
          description:
            "Learn about how Dar Al-Sundus Real Estate handles your privacy and personal data with the utmost care and security.",
          keywords:
            "Privacy, Data Protection, Personal Information, Dar Al-Sundus, Saudi Arabia",
          ogTitle: "Privacy Policy - Dar Al-Sundus Real Estate",
          ogDescription:
            "Learn about how Dar Al-Sundus Real Estate handles your privacy and personal data.",
          twitterTitle: "Privacy Policy - Dar Al-Sundus Real Estate",
          twitterDescription:
            "Learn about how Dar Al-Sundus Real Estate handles your privacy and personal data.",
        }
      : {
          title: "سياسة الخصوصية - شركة تراست العقارية",
          description:
            "تعرف على كيفية تعامل شركة تراست العقارية مع خصوصيتك وبياناتك الشخصية بعناية وأمان.",
          keywords: "الخصوصية, حماية البيانات, المعلومات الشخصية, دار السندس",
          ogTitle: "سياسة الخصوصية - شركة تراست العقارية",
          ogDescription:
            "تعرف على كيفية تعامل شركة تراست العقارية مع خصوصيتك وبياناتك الشخصية.",
          twitterTitle: "سياسة الخصوصية - شركة تراست العقارية",
          twitterDescription:
            "تعرف على كيفية تعامل شركة تراست العقارية مع خصوصيتك وبياناتك الشخصية.",
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

      <div className="bg-[url('/image/privacy.webp')]  bg-center bg-cover text-white">
        <h1
          className={`container py-36 lg:text-5xl text-4xl font-bold tracking-wide xl:text-center ${
            isRtl ? "" : "xl:text-right"
          } lg:py-48 text-black text-right `}
        >
          {translations.pages.page_privacy.PrivacyـPolicy}
        </h1>
      </div>

      <div className="container mx-auto px-4 md:px-0">
        <div className="pt-8">
          <h2 className="text-3xl font-semibold text-center lg:p-10 lg:text-5xl">
            {translations.pages.page_privacy.HowـHandleـPersonal}
          </h2>
          <p className="text-xl text-center font-medium pb-10 mt-5">
            {translations.pages.page_privacy.Weـtakeـprivacy}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
          <div className="bg-white dark:bg-[#1a1a1a] rounded-lg shadow-lg p-6 dark:shadow-lg dark:shadow-gray-800">
            <h3 className="text-2xl text-primary font-bold mb-3">
              {translations.pages.page_privacy.HowـWeـUseـYourـData_q}
            </h3>
            <p className="text-lg">
              {translations.pages.page_privacy.HowـWeـUseـYourـData_a}
            </p>
          </div>

          <div className="bg-white dark:bg-[#1a1a1a] rounded-lg shadow-lg p-6 dark:shadow-lg dark:shadow-gray-800">
            <h3 className="text-2xl text-primary font-bold mb-3">
              {translations.pages.page_privacy.Data_Protection_q}
            </h3>
            <p className="text-lg">
              {translations.pages.page_privacy.Data_Protection_a}
            </p>
          </div>
          <div className="bg-white dark:bg-[#1a1a1a] rounded-lg shadow-lg p-6 dark:shadow-lg dark:shadow-gray-800">
            <h3 className="text-2xl text-primary font-bold mb-3">
              {translations.pages.page_privacy.Reviewing_Privacy_Policy_q}
            </h3>
            <p className="text-lg">
              {translations.pages.page_privacy.Reviewing_Privacy_Policy_a}
            </p>
          </div>
          <div className="bg-white dark:bg-[#1a1a1a] rounded-lg shadow-lg p-6 dark:shadow-lg dark:shadow-gray-800">
            <h3 className="text-2xl text-primary font-bold mb-3">
              {" "}
              {translations.pages.page_privacy.Your_Inquiries_Important_to_Us_q}
            </h3>
            <p className="text-lg">
              {translations.pages.page_privacy.Your_Inquiries_Important_to_Us_a}
            </p>
          </div>
        </div>

        <div className="my-16">
          <h3 className="text-2xl font-semibold text-center mb-4">
            {translations.pages.page_privacy.When_Share_Data_q}
          </h3>
          <p className="text-lg text-center pb-4">
            {translations.pages.page_privacy.When_Share_Data_a}
          </p>
        </div>

        <div className="my-8">
          <h3 className="text-2xl font-semibold text-center mb-4">
            {" "}
            {translations.pages.page_privacy.Your_Rights_Access_q}
          </h3>
          <p className="text-lg text-center pb-4">
            {translations.pages.page_privacy.Your_Rights_Access_a}
          </p>
        </div>

        <div className="text-center my-8">
          <Link to="/">
            <Button className="inline-flex items-center px-8 py-3 text-white rounded-lg shadow-lg hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2">
              {translations.pages.page_privacy.Go_Home}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
