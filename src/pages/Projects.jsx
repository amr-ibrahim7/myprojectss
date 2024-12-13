import React from "react";
import MetaTags from "/src/components/MetaTags.jsx";
function Projects({ translations, language }) {
  const metaTags =
    language === "en"
      ? {
          title: "Our Services - TRUST Real Estate",
          description:
            "Explore the wide range of innovative real estate financing services offered by TRUST to help you achieve your property goals in Saudi Arabia.",
          keywords:
            "TRUST, Real Estate Finance, Property Purchase, Financing Solutions, Services, Investors, Saudi Real Estate",
          ogTitle: "TRUST Real Estate - Our Services",
          ogDescription:
            "Explore the services offered by TRUST to assist you in property financing, investments, and achieving your real estate goals in Saudi Arabia.",
          twitterTitle: "TRUST Real Estate - Our Services",
          twitterDescription:
            "Explore the services offered by TRUST to assist you in property financing, investments, and achieving your real estate goals in Saudi Arabia.",
        }
      : {
          title: "خدماتنا - شركة تراست العقارية",
          description:
            "اكتشف مجموعة واسعة من الخدمات التمويلية العقارية المبتكرة التي تقدمها شركة  تراست العقارية لمساعدتك في تحقيق أهدافك العقارية في السعودية.",
          keywords:
            "شركة  تراست العقارية, تمويل عقاري, شراء عقارات, حلول تمويلية, خدمات, مستثمرين, عقارات السعودية",
          ogTitle: "شركة تراست العقارية - خدماتنا",
          ogDescription:
            "اكتشف الخدمات التي تقدمها شركة  تراست العقارية لمساعدتك في تمويل العقارات والاستثمار وتحقيق أهدافك العقارية في السعودية.",
          twitterTitle: "شركة تراست العقارية - خدماتنا",
          twitterDescription:
            "اكتشف الخدمات التي تقدمها شركة  تراست العقارية لمساعدتك في تمويل العقارات والاستثمار وتحقيق أهدافك العقارية في السعودية.",
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
      <div className="bg-[url('/image/backgrondproject2.webp')] bg-center bg-cover">
        <h1 className="container py-64 text-6xl font-bold tracking-widest text-white">
          {translations.pages.page_project.Our_projectss}
        </h1>
      </div>

      <div className="container grid lg:grid-cols-2 gap-8 py-8 mx-auto">
        {/* Project 1 */}
        <div
          className="relative overflow-hidden rounded-xl group"
          onClick={() => (window.location.href = "#مشروع التطوير١")}
        >
          <div>
            <img
              src="/image/project11.webp"
              width={480}
              height={380}
              alt="صورة لمشروع: مشروع تطوير مجمع سكني"
              className="w-full"
            />
          </div>
          <div
            className={`absolute bottom-0 bg-white/90 dark:bg-black/40 flex-col items-center justify-end w-96 gap-32 p-12 text-xl transition duration-300 ease-in-out translate-y-full from-transparent to-black group-hover:translate-y-0 ${
              language === "en" ? "left-0" : "right-0"
            }`}
          >
            <h1 className="text-2xl font-semibold">
              {translations.pages.page_project.Developing_a_residential}
            </h1>
            <p className="py-4">
              {translations.pages.page_project.Developingـanـintegrated}
            </p>
          </div>
        </div>

        {/* Project 2 */}
        <div
          className="relative overflow-hidden rounded-xl group"
          onClick={() => (window.location.href = "#مشروع التطوير٢")}
        >
          <div>
            <img
              src="/image/mall.webp"
              width={480}
              height={380}
              alt="صورة لمشروع: مشروع إنشاء مركز تجاري"
              className="w-full"
            />
          </div>
          <div
            className={`absolute bottom-0 bg-white/90 dark:bg-black/40 flex-col items-center justify-end w-96 gap-32 p-12 text-xl transition duration-300 ease-in-out translate-y-full from-transparent to-black group-hover:translate-y-0 ${
              language === "en" ? "left-0" : "right-0"
            }`}
          >
            <h1 className="text-2xl font-semibold">
              {translations.pages.page_project.Shopsـdevelopment}
            </h1>
            <p className="py-4">
              {translations.pages.page_project.Weـdesigned}
            </p>
          </div>
        </div>

        {/* Project 3 */}
        <div
          className="relative overflow-hidden rounded-xl group"
          onClick={() => (window.location.href = "#مشروع التطوير٣")}
        >
          <div>
            <img
              src="/image/project22.webp"
              width={480}
              height={380}
              alt="صورة لمشروع: مشروع إعادة تأهيل مبنى تاريخي"
              className="w-full"
            />
          </div>
          <div
            className={`absolute bottom-0 bg-white/90 dark:bg-black/40 flex-col items-center justify-end w-96 gap-32 p-12 text-xl transition duration-300 ease-in-out translate-y-full from-transparent to-black group-hover:translate-y-0 ${
              language === "en" ? "left-0" : "right-0"
            }`}
          >
            <h1 className="text-2xl font-semibold">
              {translations.pages.page_project.Rehabilitationـhistoric}
            </h1>
            <p className="py-4">
              {
                translations.pages.page_project
                  .RehabilitatingـAhistoricـbuilding
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
