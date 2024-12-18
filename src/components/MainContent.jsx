import React from "react";
import AboutComponent from "./AboutComponent";
import CatalogSwiperSection from "./CatalogSwiper";
import CatalogueSection from "./CatalogueSection";
import FAQSection from "./FAQSection";
import HeroSection from "./HeroSection";
import MarqueeSwiper from "./MarqueeSwiper";

function MainContent({ translations, language, data }) {
  return (
    <>
      <HeroSection
        translations={translations}
        language={language}
        data={data}
      />
      <MarqueeSwiper
        translations={translations}
        language={language}
        data={data}
      />
      <AboutComponent
        translations={translations}
        language={language}
        data={data}
      />
      <CatalogueSection translations={translations} language={language} />
      <FAQSection translations={translations} language={language} data={data} />
      <CatalogSwiperSection translations={translations} language={language} />
    </>
  );
}

export default MainContent;
