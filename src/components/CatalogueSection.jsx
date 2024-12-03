import React from "react";
import { TbArrowNarrowLeft, TbArrowNarrowRight } from "react-icons/tb";

import { Link } from "react-router-dom";

export default function CatalogueSection({ translations, language }) {
  const arrowIcon =
    language === "en" ? (
      <TbArrowNarrowRight className="mr-2 transition-transform duration-300 group-hover:translate-x-[8px] group-hover:text-primary" />
    ) : (
      <TbArrowNarrowLeft className="ml-2 transition-transform duration-300 group-hover:translate-x-[-8px] group-hover:text-primary" />
    );
  return (
    <div className="grid gap-8 lg:grid-cols-4 md:grid-cols-2 lg:gap-0 divide-gray-300 divide-x divide-border rtl:divide-x-reverse">
      <div className="relative overflow-hidden group">
        <div>
          <img
            src="/image/2280.webp"
            alt="شقة فاخرة في قلب المدينة"
            width={380}
            height={100}
            className="w-full object-cover"
          />
        </div>

        <div className="absolute top-0 p-8 bg-white text-black bg-opacity-60 backdrop-blur m-12">
          <div className="flex justify-between pb-4">
            <p className="text-sm">
              {translations.mainContent.catalogueSection.categorya}
            </p>
            <span className="text-sm">
              {translations.mainContent.catalogueSection.one}
            </span>
          </div>
          <Link className=" block text-xl font-semibold" to="/project">
            {translations.mainContent.catalogueSection.titlea}
          </Link>
          <p className="py-4">
            {translations.mainContent.catalogueSection.descriptiona}
          </p>
          <Link
            className="inline-flex items-center font-medium transition-transform duration-300 group-hover:text-primary"
            to="/projects"
          >
            {translations.mainContent.catalogueSection.info}
            {arrowIcon}
          </Link>
        </div>

        <div className="inset-0 bg-tertiary flex-col items-center justify-end md:flex md:absolute gap-32 pb-16 text-xl transition duration-300 ease-in-out border-b-2 group-hover:translate-y-full md:border-b-0 hidden">
          <p className="tracking-wider -rotate-90">
            {" "}
            {translations.mainContent.catalogueSection.categorya}
          </p>
          <span>{translations.mainContent.catalogueSection.one}</span>
        </div>
      </div>

      <div className="relative overflow-hidden group">
        <div>
          <img
            src="/image/villas1.webp"
            alt="فيلا رائعة مع حديقة خاصة"
            width={380}
            height={100}
            className="w-full object-cover"
          />
        </div>

        <div className="absolute top-0 p-8 bg-white text-black bg-opacity-60 backdrop-blur m-12">
          <div className="flex justify-between pb-4">
            <p className="text-sm">
              {translations.mainContent.catalogueSection.categoryv}
            </p>
            <span className="text-sm">
              {translations.mainContent.catalogueSection.two}
            </span>
          </div>
          <Link className=" block text-xl font-semibold" to="/projects">
            {translations.mainContent.catalogueSection.titlev}
          </Link>
          <p className="py-4">
            {translations.mainContent.catalogueSection.descriptionv}
          </p>
          <Link
            className="inline-flex items-center font-medium transition-transform duration-300 group-hover:text-primary"
            to="/projects"
          >
            {translations.mainContent.catalogueSection.info}
            {arrowIcon}
          </Link>
        </div>

        <div className="inset-0 bg-tertiary flex-col items-center justify-end md:flex md:absolute gap-32 pb-16 text-xl transition duration-300 ease-in-out border-b-2 group-hover:translate-y-full md:border-b-0 hidden">
          <p className="tracking-wider -rotate-90">
            {translations.mainContent.catalogueSection.categoryv}
          </p>
          <span> {translations.mainContent.catalogueSection.two}</span>
        </div>
      </div>
      <div className="relative overflow-hidden group">
        <div>
          <img
            src="/image/building.webp"
            alt="عمارة سكنية في موقع استراتيجي"
            width={380}
            height={100}
            className="w-full object-cover"
          />
        </div>

        <div className="absolute top-0 p-8 bg-white text-black bg-opacity-60 backdrop-blur m-12">
          <div className="flex justify-between pb-4">
            <p className="text-sm">
              {translations.mainContent.catalogueSection.categoryb}
            </p>
            <span className="text-sm">
              {translations.mainContent.catalogueSection.three}
            </span>
          </div>
          <Link className=" block text-xl font-semibold" to="/projects">
            {translations.mainContent.catalogueSection.titleb}
          </Link>
          <p className="py-4">
            {translations.mainContent.catalogueSection.descriptionb}
          </p>
          <Link
            className="inline-flex items-center font-medium transition-transform duration-300 group-hover:text-primary"
            to="/projects"
          >
            {translations.mainContent.catalogueSection.info}
            {arrowIcon}
          </Link>
        </div>

        <div className="inset-0 bg-tertiary flex-col items-center justify-end md:flex md:absolute gap-32 pb-16 text-xl transition duration-300 ease-in-out border-b-2 group-hover:translate-y-full md:border-b-0 hidden">
          <p className="tracking-wider -rotate-90">
            {translations.mainContent.catalogueSection.categoryb}
          </p>
          <span> {translations.mainContent.catalogueSection.three}</span>
        </div>
      </div>

      {/* العنصر الرابع */}
      <div className="relative overflow-hidden group">
        <div>
          <img
            src="/image/land.webp"
            alt="أرض في منطقة سكنية هادئة"
            width={380}
            height={100}
            className="w-full object-cover"
          />
        </div>

        <div className="absolute top-0 p-8 bg-white text-black bg-opacity-60 backdrop-blur m-12">
          <div className="flex justify-between pb-4">
            <p className="text-sm">
              {translations.mainContent.catalogueSection.categoryl}
            </p>
            <span className="text-sm">
              {translations.mainContent.catalogueSection.four}
            </span>
          </div>
          <Link className=" block text-xl font-semibold" to="/projects">
            {translations.mainContent.catalogueSection.titlel}
          </Link>
          <p className="py-4">
            {translations.mainContent.catalogueSection.descriptionl}
          </p>
          <Link
            className="inline-flex items-center font-medium transition-transform duration-300 group-hover:text-primary"
            to="/projects"
          >
            {translations.mainContent.catalogueSection.info}
            {arrowIcon}
          </Link>
        </div>

        <div className="inset-0 bg-tertiary flex-col items-center justify-end md:flex md:absolute gap-32 pb-16 text-xl transition duration-300 ease-in-out border-b-2 group-hover:translate-y-full md:border-b-0 hidden">
          <p className="tracking-wider -rotate-90">
            {translations.mainContent.catalogueSection.categoryl}
          </p>
          <span>{translations.mainContent.catalogueSection.four}</span>
        </div>
      </div>
    </div>
  );
}
