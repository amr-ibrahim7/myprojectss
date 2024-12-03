import { motion } from "framer-motion";
import React from "react";
import { TbArrowUpLeft } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { desVariants, tagVariants, tittleVariants } from "../utills/animation";

const HeroSection = ({ translations }) => {
  const navigate = useNavigate();
  const [shouldAnimate, setShouldAnimate] = React.useState(false);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setShouldAnimate(true);
    }, 500); // Slightly reduced delay for faster rendering
    return () => clearTimeout(timeout);
  }, []);

  const handleNavigate = () => {
    navigate("/financing");
  };

  return (
    <div
      className="relative flex items-center justify-center h-[800px] lg:h-[700px] text-center bg-cover bg-center
      bg-[url('/image/backgroundlight.webp')]
      dark:bg-[url('/image/background.webp')]"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Text content */}
      <div className="relative z-10 p-4 lg:w-1/2 text-white">
        <motion.p
          initial="offscreen"
          animate={shouldAnimate ? "onscreen" : "offscreen"}
          variants={tittleVariants}
          className="tracking-widest"
        >
          {translations.mainContent.heroSection.get_financing}
        </motion.p>

        <motion.h1
          initial="offscreen"
          animate={shouldAnimate ? "onscreen" : "offscreen"}
          variants={desVariants}
          className="text-3xl lg:text-4xl font-bold"
        >
          {translations.mainContent.heroSection.flexible_financing}
        </motion.h1>

        <motion.p
          initial="offscreen"
          animate={shouldAnimate ? "onscreen" : "offscreen"}
          variants={tagVariants}
          className="mt-4 text-base lg:text-lg"
        >
          {translations.mainContent.heroSection.innovative_solutions}
        </motion.p>

        <motion.div
          initial="offscreen"
          animate={shouldAnimate ? "onscreen" : "offscreen"}
          variants={tagVariants}
          className="mt-6"
        >
          <button
            onClick={handleNavigate}
            className="relative bg-primary text-white px-8 py-3 lg:py-2  rounded-3xl text-sm md:text-lg lg:text-xl mt-2 group hover:bg-white hover:text-black hover:border hover:border-primary transition-all duration-400 overflow-hidden dark:bg-hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2"
          >
            <span className="pr-8">
              {translations.mainContent.heroSection.fund_your_dreams}
            </span>
            <span className="absolute top-1/2 translate-y-[-50%] right-1 bg-white p-[1px] lg:p-[7px] rounded-full flex justify-center items-center text-black group-hover:bg-primary group-hover:text-white transition-all duration-400">
              <TbArrowUpLeft className="text-2xl group-hover:animate-arrowGo" />
            </span>
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
