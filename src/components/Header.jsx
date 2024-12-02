import React, { useContext, useEffect, useState } from "react";

import { useLocation } from "react-router-dom";
import { LanguageContext } from "../context/LanguageContext";
import LanguageToggle from "./LanguageToggle";
import Logo from "./Logo";
import MobileNavigation from "./MobileNavigation";
import Nav from "./Nav";
import ThemeToggler from "./ThemeToggler";

const Header = () => {
  const { language, translations } = useContext(LanguageContext);
  const [header, setHeader] = useState(false);
  const location = useLocation();

  // تأثير تغيير لغة المتصفح
  // useEffect(() => {
  //   document.documentElement.lang = language;
  // }, [language]);

  // معالجة التمرير لتغيير Header
  useEffect(() => {
    const handleScroll = () => {
      setHeader(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={`${
        header
          ? "pt-12 pb-4 lg:py-4  bg-tertiary shadow-lg dark:bg-accent"
          : "py-6 dark:bg-transparent"
      } sticky top-0 z-30 transition-all ${
        location.pathname === "/" && "bg-[#fff]  "
      } `}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <Logo />
          <div className="flex items-center gap-x-6">
            {/* Nav Section */}
            <Nav
              containerStyles="hidden xl:flex gap-x-8 items-center"
              linkStyles="relative hover-text-primary transition-all"
              underlineStyles="absolute left-0 top-full h-[2px] bg-primary w-full"
              translations={translations}
            />
            {/* Theme  toggler */}
            <ThemeToggler />
            {/* <div
              ref={dropdownRef}
              className="relative text-foreground cursor-pointer flex items-center"
              onClick={() => setIsLanguageDropdownOpen((prev) => !prev)}
            >
              {language === "en" ? translations.English : translations.Arabic}
              {isLanguageDropdownOpen ? (
                <IoMdArrowDropup className="mx-2" />
              ) : (
                <IoMdArrowDropdown className="mx-2" />
              )}
              {isLanguageDropdownOpen && (
                <ul className="absolute top-full mt-1 right-0 bg-background rounded-md shadow-lg p-2 z-50 w-24 text-center flex flex-col gap-1">
                  <li
                    onClick={() => {
                      if (language !== "ar") toggleLanguage();
                      setIsLanguageDropdownOpen(false);
                    }}
                    className={`py-2 text-sm rounded cursor-pointer ${
                      language === "ar" && "bg-primary text-primary-foreground"
                    } hover:bg-primary hover:text-primary-foreground`}
                  >
                    {translations.Arabic}
                  </li>
                  <li
                    onClick={() => {
                      if (language !== "en") toggleLanguage();
                      setIsLanguageDropdownOpen(false);
                    }}
                    className={`py-2 text-sm rounded cursor-pointer ${
                      language === "en" && "bg-primary text-primary-foreground"
                    } hover:bg-primary hover:text-primary-foreground`}
                  >
                    {translations.English}
                  </li>
                </ul>
              )}
            </div> */}
            {/* Languages toggler */}
            <LanguageToggle />
            {/* Mobile Navigation */}
            <div className="xl:hidden">
              <MobileNavigation translations={translations} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
