import React from "react";
import { useQuery } from "react-query";
import MetaTags from "/src/components/MetaTags.jsx";
function Projects({ translations, language, fetchDynamicData }) {
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

  const { data: globalData, isLoading } = useQuery(
    ["serviceData", language],
    () => fetchDynamicData("intro-services", language),
    {
      // خيارات إضافية
      enabled: !!language, // تشغيل الفيتش فقط عند وجود اللغة
      onError: (error) => {
        console.error("Error fetching global data", error);
      },
    }
  );

  // Custom Spinner Component
  const CustomSpinner = () => (
    <div className="flex justify-center items-center w-full py-16">
      <div className="animate-spin w-12 h-12 border-4 border-primary border-t-transparent rounded-full" />
    </div>
  );

  return (
    <div>
      {/* {isLoading && <CustomSpinner />} */}
      <MetaTags
        title={metaTags.title}
        description={metaTags.description}
        keywords={metaTags.keywords}
        ogTitle={metaTags.ogTitle}
        ogDescription={metaTags.ogDescription}
        twitterTitle={metaTags.twitterTitle}
        twitterDescription={metaTags.twitterDescription}
      />
      <div className="bg-[url('/image/aboutp.webp')] bg-center bg-cover">
        <h1 className="container py-64 text-6xl font-bold tracking-widest text-white">
          {translations.pages.page_project.Our_projectss}
        </h1>
      </div>

      <div className="container grid lg:grid-cols-2 gap-8 py-8 mx-auto">
        {isLoading ? (
          <CustomSpinner />
        ) : (
          globalData.data?.map((service) => (
            <div
              key={service.id}
              className="relative overflow-hidden rounded-xl group"
              onClick={() => (window.location.href = `#service-${service.id}`)}
            >
              <div>
                <img
                  src={service.image}
                  width={480}
                  height={380}
                  alt={`صورة لخدمة: ${service.title}`}
                  className="w-full"
                />
              </div>
              <div
                className={`absolute bottom-0 bg-white/90 dark:bg-black/40 flex-col items-center justify-end w-96 gap-32 p-12 text-xl transition duration-300 ease-in-out translate-y-full from-transparent to-black group-hover:translate-y-0 ${
                  language === "en" ? "left-0" : "right-0"
                }`}
              >
                <h1 className="text-2xl font-semibold">{service.title}</h1>
                <p className="py-4">{service.description}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
export default Projects;
