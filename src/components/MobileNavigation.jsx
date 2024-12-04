import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";
import Logo from "./Logo";
import Nav from "./Nav";
function MobileNavigation({ translations, language }) {
  const isRtl = language === "ar";
  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustify
          className="cursor-pointer"
          aria-label="Open mobile navigation"
        />
      </SheetTrigger>
      <SheetContent
        className={`${
          isRtl ? "right-0" : "left-0"
        } fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out
          data-[state=open]:animate-in
          data-[state=closed]:animate-out
          data-[state=closed]:duration-300
          data-[state=open]:duration-500
          inset-y-0 sm:max-w-sm
          ${
            isRtl
              ? "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right"
              : "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left"
          }`}
      >
        {/* العنوان لضمان الوصولية */}
        <SheetTitle className="sr-only">
          {translations.nav.Mobile_Nav}
        </SheetTitle>
        <SheetDescription className="sr-only">
          {translations.nav.Mobile_Descr}
        </SheetDescription>
        <div className="flex flex-col items-center justify-between h-full py-8">
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
