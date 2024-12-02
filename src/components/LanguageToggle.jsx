// import React, { useContext, useEffect, useRef, useState } from "react";
// import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
// import { LanguageContext } from "../context/LanguageContext";

// const LanguageToggle = () => {
//   // استخراج قيم اللغة من السياق
//   const { language, toggleLanguage, translations } =
//     useContext(LanguageContext);

//   // حالة فتح وإغلاق القائمة المنسدلة
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   // مرجع للقائمة المنسدلة
//   const dropdownRef = useRef(null);

//   // دالة إغلاق القائمة عند النقر خارج العنصر
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (
//         isDropdownOpen &&
//         dropdownRef.current &&
//         !dropdownRef.current.contains(event.target)
//       ) {
//         setIsDropdownOpen(false);
//       }
//     };

//     if (isDropdownOpen) {
//       document.addEventListener("mousedown", handleClickOutside);
//     }

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [isDropdownOpen]);

//   // معالجة تغيير اللغة
//   const handleLanguageChange = (newLanguage) => {
//     // تغيير اللغة فقط إذا كانت مختلفة
//     if (language !== newLanguage) {
//       toggleLanguage();
//     }

//     // إغلاق القائمة المنسدلة في كل الحالات
//     setIsDropdownOpen(false);
//   };

//   return (
//     <div
//       ref={dropdownRef}
//       className="relative text-foreground cursor-pointer flex items-center"
//       onClick={() => setIsDropdownOpen((prev) => !prev)}
//     >
//       {/* عرض اللغة الحالية */}
//       {language === "en" ? translations.English : translations.Arabic}

//       {/* أيقونة السهم */}
//       {isDropdownOpen ? (
//         <IoMdArrowDropup className="mx-2" />
//       ) : (
//         <IoMdArrowDropdown className="mx-2" />
//       )}

//       {/* القائمة المنسدلة */}
//       {isDropdownOpen && (
//         <ul className="absolute top-full mt-1 right-0 bg-background rounded-md shadow-lg p-2 z-50 w-24 text-center flex flex-col gap-1">
//           {/* زر اللغة العربية */}
//           <LanguageItem
//             language="ar"
//             currentLanguage={language}
//             translations={translations}
//             onClick={handleLanguageChange}
//           />

//           {/* زر اللغة الإنجليزية */}
//           <LanguageItem
//             language="en"
//             currentLanguage={language}
//             translations={translations}
//             onClick={handleLanguageChange}
//           />
//         </ul>
//       )}
//     </div>
//   );
// };

// // مكون فرعي لعنصر اللغة
// const LanguageItem = ({ language, currentLanguage, translations, onClick }) => {
//   const isActive = currentLanguage === language;

//   return (
//     <li
//       onClick={() => onClick(language)}
//       className={`py-2 text-sm rounded cursor-pointer ${
//         isActive ? "bg-primary text-primary-foreground" : ""
//       } hover:bg-primary hover:text-primary-foreground`}
//     >
//       {language === "ar" ? translations.Arabic : translations.English}
//     </li>
//   );
// };

// export default LanguageToggle;
import React, { useContext, useEffect, useRef, useState } from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { LanguageContext } from "../context/LanguageContext";

const LanguageToggle = () => {
  const { language, toggleLanguage, translations } =
    useContext(LanguageContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // إغلاق القائمة عند النقر خارج العنصر
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isDropdownOpen &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  // معالجة تغيير اللغة
  const handleLanguageChange = (newLanguage) => {
    if (language !== newLanguage) {
      toggleLanguage();
    }
    setIsDropdownOpen(false); // إغلاق القائمة دائمًا بعد تغيير اللغة
  };

  return (
    <div
      ref={dropdownRef}
      className="relative text-foreground cursor-pointer flex items-center"
      onClick={(e) => {
        e.stopPropagation(); // منع التفاعل مع الأحداث الأخرى
        setIsDropdownOpen((prev) => !prev);
      }}
    >
      {/* عرض اللغة الحالية */}
      {language === "en" ? translations.English : translations.Arabic}

      {/* أيقونة السهم */}
      {isDropdownOpen ? (
        <IoMdArrowDropup className="mx-2" />
      ) : (
        <IoMdArrowDropdown className="mx-2" />
      )}

      {/* القائمة المنسدلة */}
      {isDropdownOpen && (
        <ul className="absolute top-full mt-1 right-0 bg-background rounded-md shadow-lg p-2 z-50 w-24 text-center flex flex-col gap-1">
          <LanguageItem
            language="ar"
            currentLanguage={language}
            translations={translations}
            onClick={handleLanguageChange}
          />
          <LanguageItem
            language="en"
            currentLanguage={language}
            translations={translations}
            onClick={handleLanguageChange}
          />
        </ul>
      )}
    </div>
  );
};

// مكون فرعي لعنصر اللغة
const LanguageItem = ({ language, currentLanguage, translations, onClick }) => {
  const isActive = currentLanguage === language;

  return (
    <li
      onClick={(e) => {
        e.stopPropagation(); // منع إغلاق القائمة أثناء اختيار اللغة
        onClick(language);
      }}
      className={`py-2 text-sm rounded cursor-pointer ${
        isActive ? "bg-primary text-primary-foreground" : ""
      } hover:bg-primary hover:text-primary-foreground`}
    >
      {language === "ar" ? translations.Arabic : translations.English}
    </li>
  );
};

export default LanguageToggle;
