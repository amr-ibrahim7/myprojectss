import React from "react";
import AboutComponent from "./AboutComponent";
import CatalogSwiperSection from "./CatalogSwiper";
import CatalogueSection from "./CatalogueSection";
import FAQSection from "./FAQSection";
import HeroSection from "./HeroSection";
import MarqueeSwiper from "./MarqueeSwiper";

function MainContent({ translations, language }) {
  return (
    <>
      <HeroSection translations={translations} />
      <MarqueeSwiper translations={translations} language={language} />
      <AboutComponent translations={translations} language={language} />
      <CatalogueSection translations={translations} language={language} />
      <FAQSection translations={translations} language={language} />
      <CatalogSwiperSection translations={translations} language={language} />
    </>
  );
}

export default MainContent;
