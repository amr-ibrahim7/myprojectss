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
function MobileNavigation({ translations }) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustify
          className="cursor-pointer"
          aria-label="Open mobile navigation"
        />
      </SheetTrigger>
      <SheetContent>
         {/* العنوان لضمان الوصولية */}
        <SheetTitle className="sr-only">{translations.nav.Mobile_Nav}</SheetTitle>
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
