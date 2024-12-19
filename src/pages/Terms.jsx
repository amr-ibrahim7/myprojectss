import { Button } from "@/components/ui/button";
import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import MetaTags from "/src/components/MetaTags.jsx";

const Terms = ({ translations, language, fetchDynamicData }) => {
  const metaTags =
    language === "en"
      ? {
          title: "Terms and Conditions - TRUST Real Estate",
          description:
            "Discover the terms and conditions governing the innovative real estate financing services offered by TRUST Real Estate in Saudi Arabia.",
          keywords:
            "Terms, Conditions, Real Estate Finance, Property Purchase, TRUST, Saudi Arabia",
          ogTitle: "Terms and Conditions - TRUST Real Estate",
          ogDescription:
            "Learn about the terms and conditions for using TRUST Real Estate's services.",
          twitterTitle: "Terms and Conditions - TRUST Real Estate",
          twitterDescription:
            "Learn about the terms and conditions for using TRUST Real Estate's services.",
        }
      : {
          title: "الشروط والأحكام - شركة تراست العقارية",
          description:
            "الشروط والأحكام الخاصة بشركة تراست العقارية في تقديم خدمات التمويل العقاري.",
          keywords:
            "الشروط, الأحكام, تمويل عقاري, شراء عقارات,  تراست العقارية ",
          ogTitle: "الشروط والأحكام - شركة تراست العقارية",
          ogDescription:
            "تعرّف على الشروط والأحكام الخاصة بشركة تراست العقارية.",
          twitterTitle: "الشروط والأحكام - شركة تراست العقارية",
          twitterDescription:
            "تعرّف على الشروط والأحكام الخاصة بشركة تراست العقارية.",
        };

  const { data: globalData, isLoading } = useQuery(
    ["termsData", language],
    () => fetchDynamicData("terms", language),
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
      <MetaTags
        title={metaTags.title}
        description={metaTags.description}
        keywords={metaTags.keywords}
        ogTitle={metaTags.ogTitle}
        ogDescription={metaTags.ogDescription}
        twitterTitle={metaTags.twitterTitle}
        twitterDescription={metaTags.twitterDescription}
      />

      <div className="bg-[url('/image/terms1.webp')]  bg-center bg-cover">
        <h1 className="container py-32 text-6xl font-bold tracking-widest text-center lg:py-64 text-white">
          {translations.pages.page_terms.Terms_and_Conditions}
        </h1>
      </div>

      <div className="container mx-auto px-4 md:px-0">
        <div className="pt-4">
          <h2 className="text-3xl font-semibold text-center lg:p-10 lg:text-5xl">
            {translations.pages.page_terms.Our_Terms_and_Conditions}
          </h2>
          <p className="text-2xl text-center font-medium pb-10 mt-5">
            {translations.pages.page_terms.Please_Read_Carefully}
          </p>
        </div>

        <div className="items-center lg:flex gap-x-8 md:mr-9">
          <div className="w-full">
            <h3 className="text-xl text-primary font-bold mb-1">
              {translations.pages.page_terms.What_Are_the_Terms}
            </h3>
            {isLoading ? (
              <CustomSpinner />
            ) : (
              <ul className="pb-8 tracking-wide mt-6 space-y-4">
                {globalData?.data?.map((item) => (
                  <li key={item.id} className="flex items-start gap-2">
                    <span className="min-w-[24px] font-bold">{item.id}.</span>
                    <span>{item.title}</span>
                  </li>
                ))}
              </ul>
            )}
            {/* <ul className="pb-8 tracking-wide mt-6 space-y-2">
              {translations.pages.page_terms.What_Are_the_Terms_Answer.map(
                (item, index) => (
                  <li key={index}>{item}</li>
                )
              )}
            </ul>

            <h3 className="text-xl text-primary font-bold mb-1">
              {translations.pages.page_terms.What_Are_the_Employee_Permissions}
            </h3>
            <ul className="pb-8 tracking-wide mt-6 space-y-4">
              {translations.pages.page_terms.Employee_Permissions_Answer.map(
                (item, index) => (
                  <li key={index}>{item}</li>
                )
              )}
            </ul>

            <h3 className="text-xl text-primary font-bold mb-1">
              {
                translations.pages.page_terms
                  .What_Are_the_Branch_Manager_Permissions
              }
            </h3>
            <ul className="pb-8 tracking-wide mt-6 space-y-4">
              {translations.pages.page_terms.Branch_Manager_Permissions_Answer.map(
                (item, index) => (
                  <li key={index}>{item}</li>
                )
              )}
            </ul>
            <h3 className="text-xl font-bold mb-4 text-primary">
              {
                translations.pages.page_terms
                  .What_Are_the_General_Manager_Permissions
              }
            </h3>
            <ul className="pb-8 tracking-wide mt-6 space-y-4">
              {translations.pages.page_terms.General_Manager_Permissions_Answer.map(
                (item, index) => (
                  <li key={index}>{item}</li>
                )
              )}
            </ul>

            <h3 className="text-xl font-bold mb-4 text-primary">
              {translations.pages.page_terms.How_Can_Clients_Contact_Us}
            </h3>
            <p className="pb-2 tracking-wide mt-6 font-bold">
              {translations.pages.page_terms.Client_Communication_Answer[0]}
            </p>
            <ul className="pb-8 tracking-wide mt-6 space-y-4">
              {translations.pages.page_terms.Client_Communication_Answer.slice(
                1
              ).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul> */}
          </div>
        </div>

        <div className="text-center my-8">
          <Link to="/">
            <Button className="inline-flex items-center px-8 py-3 shadow-lg hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2">
              {translations.pages.page_terms.Go_Home}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Terms;
