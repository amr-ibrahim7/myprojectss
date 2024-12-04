import React, { useEffect, useState } from "react";

import { useLocation } from "react-router-dom";
import LanguageToggle from "./LanguageToggle";
import Logo from "./Logo";
import MobileNavigation from "./MobileNavigation";
import Nav from "./Nav";
import ThemeToggler from "./ThemeToggler";

const Header = ({ translations, language }) => {
  const [header, setHeader] = useState(false);
  const location = useLocation();

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
            {/* Languages toggler */}
            <LanguageToggle />
            {/* Mobile Navigation */}
            <div className="xl:hidden">
              <MobileNavigation
                translations={translations}
                language={language}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
