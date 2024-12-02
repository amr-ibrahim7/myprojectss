import React, { createContext, useContext, useEffect, useState } from "react";
import { fetchData } from "../apis/apiService";
import arTranslations from "../translations/ar";
import enTranslations from "../translations/en";
export const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("ar");
  const [translations, setTranslations] = useState(arTranslations);
  const [dynamicData, setDynamicData] = useState(null);

  // جلب البيانات الديناميكية بشكل عام
  const fetchDynamicData = async (endpoint, currentLanguage) => {
    try {
      const data = await fetchData(endpoint, currentLanguage);
      setDynamicData(data);
      return data;
    } catch (error) {
      console.error("Error fetching dynamic data:", error);
      return null;
    }
  };

  // وظيفة تغيير اللغة
  const toggleLanguage = () => {
    const newLanguage = language === "ar" ? "en" : "ar";
    setLanguage(newLanguage);
    setTranslations(newLanguage === "ar" ? arTranslations : enTranslations);
    document.documentElement.lang = newLanguage;
    fetchDynamicData(newLanguage);
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
        fetchDynamicData,
        dynamicData,
        translations,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
