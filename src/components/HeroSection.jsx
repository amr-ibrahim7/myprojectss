import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { TbArrowUpLeft } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { desVariants, tagVariants, tittleVariants } from "../utills/animation";

// استيراد الاستايلات المطلوبة للـ Swiper
import "swiper/css";
import "swiper/css/effect-fade";

const HeroSection = ({ translations, language }) => {
  const isRtl = language === "ar";
  const navigate = useNavigate();
  const [shouldAnimate, setShouldAnimate] = useState(false);

  // الشرائح باللغة العربية والإنجليزية
  const slidersAr = [
    {
      id: 1,
      image: "/image/backgroundlight.webp",
      title: "تمويل عقاري لبناء منزل يعكس أسلوبك الشخصي",
      description:
        "نقدم حلول تمويل مبتكرة في المملكة، مما يتيح لك اختيار أفضل صفقات العقارات بأسعار تنافسية. اخط خطوتك الأولى نحو امتلاك منزل أحلامك اليوم مع خطط تمويل مرنة ومعدلات فائدة تنافسية.",
    },
    {
      id: 2,
      image: "/image/background.webp",
      title: "حلول تمويل سكني مصممة خصيصًا لاحتياجاتك",
      description:
        "استكشف خيارات التمويل المتنوعة التي تناسب طموحاتك وميزانيتك. نسعى لتحويل حلمك في امتلاك منزل إلى واقع ملموس.",
    },
  ];

  const slidersEn = [
    {
      id: 1,
      image: "/image/backgroundlight.webp",
      title:
        "Mortgage financing to build a home that reflects your personal style",
      description:
        "We offer innovative mortgage solutions in the Kingdom, allowing you to choose from the best real estate deals at competitive prices. Take your first step toward owning your dream home today with flexible financing plans and competitive interest rates.",
    },
    {
      id: 2,
      image: "/image/background.webp",
      title: "Tailored mortgage solutions for your unique needs",
      description:
        "Explore diverse financing options that match your aspirations and budget. We strive to turn your home ownership dream into a tangible reality.",
    },
  ];

  // اختيار الشرائح بناءً على اللغة
  const sliders = isRtl ? slidersAr : slidersEn;

  useEffect(() => {
    const animationTimeout = setTimeout(() => {
      setShouldAnimate(true);
    }, 500);

    return () => {
      clearTimeout(animationTimeout);
    };
  }, []);

  const handleNavigate = () => {
    navigate("/financing");
  };

  return (
    <Swiper
      touchEventsTarget="container"
      simulateTouch={true}
      modules={[Autoplay, EffectFade]}
      effect="fade"
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      speed={1000}
      loop={true}
      className="relative h-[800px] lg:h-[700px]"
    >
      {sliders.map((slide) => (
        <SwiperSlide key={slide.id} className="relative">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('${slide.image}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black opacity-40"></div>

            <div className="relative z-10 flex items-center justify-center h-full p-4">
              <div className="text-center text-white lg:w-1/2">
                <motion.h1
                  initial="offscreen"
                  animate={shouldAnimate ? "onscreen" : "offscreen"}
                  variants={desVariants}
                  className="text-3xl lg:text-4xl font-bold"
                >
                  {slide.title}
                </motion.h1>

                <motion.p
                  initial="offscreen"
                  animate={shouldAnimate ? "onscreen" : "offscreen"}
                  variants={tagVariants}
                  className="mt-4 text-base lg:text-lg"
                >
                  {slide.description}
                </motion.p>

                <motion.div
                  initial="offscreen"
                  animate={shouldAnimate ? "onscreen" : "offscreen"}
                  variants={tagVariants}
                  className="mt-6"
                >
                  <button
                    onClick={handleNavigate}
                    className="relative bg-primary text-white px-8 py-3 lg:py-2 rounded-3xl text-sm md:text-lg lg:text-xl mt-2 group hover:bg-white hover:text-black hover:border hover:border-primary transition-all duration-400 overflow-hidden dark:bg-hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2"
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
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSection;
