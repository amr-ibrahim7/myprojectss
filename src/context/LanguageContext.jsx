// import React, { createContext, useContext, useEffect, useState } from "react";
// import { fetchData } from "../apis/apiService";
// import arTranslations from "../translations/ar";
// import enTranslations from "../translations/en";

// export const LanguageContext = createContext();

// export function LanguageProvider({ children }) {
//   const [language, setLanguage] = useState(() => {
//     return localStorage.getItem("appLanguage") || "ar";
//   });

//   const [translations, setTranslations] = useState(
//     language === "ar" ? arTranslations : enTranslations
//   );
//   const [dynamicData, setDynamicData] = useState(null);

//   // Update localStorage and document language when language changes
//   useEffect(() => {
//     localStorage.setItem("appLanguage", language);
//     document.documentElement.lang = language;
//   }, [language]);

//   //
//   const fetchDynamicData = async (endpoint, currentLanguage) => {
//     try {
//       const data = await fetchData(endpoint, currentLanguage);
//       setDynamicData(data);
//       return data;
//     } catch (error) {
//       console.error("Error fetching dynamic data:", error);
//       return null;
//     }
//   };

//   // وظيفة تغيير اللغة
//   const toggleLanguage = () => {
//     const newLanguage = language === "ar" ? "en" : "ar";
//     setLanguage(newLanguage);
//     setTranslations(newLanguage === "ar" ? arTranslations : enTranslations);
//     // document.documentElement.lang = newLanguage;
//     fetchDynamicData(newLanguage);
//   };

//   return (
//     <LanguageContext.Provider
//       value={{
//         language,
//         setLanguage,
//         toggleLanguage,
//         fetchDynamicData,
//         dynamicData,
//         translations,
//       }}
//     >
//       {children}
//     </LanguageContext.Provider>
//   );
// }

// export function useLanguage() {
//   return useContext(LanguageContext);
// }

// LanguageContext.jsx
import React, { createContext, useContext, useEffect, useState } from "react";
import { fetchData } from "../apis/apiService";
import arTranslations from "../translations/ar";
import enTranslations from "../translations/en";

export const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("appLanguage") || "ar";
  });

  const [translations, setTranslations] = useState(
    language === "ar" ? arTranslations : enTranslations
  );
  const [dynamicData, setDynamicData] = useState(null);

  useEffect(() => {
    localStorage.setItem("appLanguage", language);
    document.documentElement.lang = language;
  }, [language]);

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

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "ar" ? "en" : "ar"));
  };

  useEffect(() => {
    setTranslations(language === "ar" ? arTranslations : enTranslations);
    fetchDynamicData("home", language);
  }, [language]);

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
