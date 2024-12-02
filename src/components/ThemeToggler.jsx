import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { Button } from "/src/components/ui/button.jsx";
export default function ThemeToggler() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";
  return (
    <div>
      <Button
        onClick={() => setTheme(isDark ? "light" : "dark")}
        aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
      >
        <SunIcon
          className={`h-[1.2rem] w-[1.2rem] transition-all ${
            isDark ? "scale-100 rotate-0" : "scale-0 -rotate-90"
          }`}
        />
        <MoonIcon
          className={`h-[1.2rem] w-[1.2rem] transition-all ${
            isDark ? "scale-0 rotate-90" : "scale-100 rotate-0"
          }`}
        />
      </Button>
    </div>
  );
}
