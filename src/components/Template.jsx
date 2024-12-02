import { motion } from "framer-motion";
import useScrollprogress from "../hooks/useScrollprogress";

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
};

const Template = ({ children }) => {
  const completion = useScrollprogress();
  // const translate = useSelector((state) => state.language.translation);

  return (
    <>
      <motion.main
        variants={variants}
        initial="hidden"
        animate="enter"
        transition={{ type: "linear", delay: 0.2, duration: 0.4 }}
      >
        {children}
      </motion.main>
      <span
        style={{ transform: `translateY(${completion - 100}%)` }}
        className="fixed z-50 bg-primary w-2 top-0 right-0 bottom-0 transition-all duration-700"
      ></span>
      <div className="h-[2500px]"></div>
    </>
  );
};

export default Template;
