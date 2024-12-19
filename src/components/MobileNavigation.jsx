import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";
import React, { useState } from "react";
import Logo from "./Logo";
import Nav from "./Nav";

function MobileNavigation({ translations, language }) {
  const [isOpen, setIsOpen] = useState(false);
  const isRtl = language === "ar";
  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <AlignJustify
          className="cursor-pointer"
          aria-label="Open mobile navigation"
        />
      </SheetTrigger>
      <SheetContent
        side={isRtl ? "right" : "left"} // استخدام خاصية side لتحديد الاتجاه
        className={`fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out
          data-[state=open]:animate-in
          data-[state=closed]:animate-out
          data-[state=closed]:duration-300
          data-[state=open]:duration-500
          inset-y-0 sm:max-w-sm`}
      >
        {/* العنوان لضمان الوصولية */}
        <SheetTitle className="sr-only">
          {translations.nav.Mobile_Nav}
        </SheetTitle>
        <SheetDescription className="sr-only">
          {translations.nav.Mobile_Descr}
        </SheetDescription>
        <div
          className="flex flex-col items-center justify-between h-full py-8"
          onClick={handleClose}
        >
          <div className="flex flex-col items-center gap-y-32">
            <Logo />
            <Nav
              containerStyles="flex flex-col items-center gap-y-6"
              linkStyles="text-1xl font-semibold"
              translations={translations}
            />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default MobileNavigation;
