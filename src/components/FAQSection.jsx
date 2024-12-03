import React, { useEffect, useRef, useState } from "react";

const FAQSection = ({ translations, language }) => {
  const [activeQuestion, setActiveQuestion] = useState(null);
  const [heights, setHeights] = useState({});
  const answerRefs = useRef({});

  const isRtl = language === "ar";
  useEffect(() => {
    const newHeights = {};
    translations.mainContent.faqSection.faqs.forEach((_, index) => {
      if (answerRefs.current[index]) {
        newHeights[index] = answerRefs.current[index].scrollHeight;
      }
    });
    setHeights(newHeights);
  }, [translations.mainContent.faqSection.faqs]);

  const toggleQuestion = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  return (
    <section className="w-full mx-auto" id="faq">
      <div className="py-8 lg:py-28 overflow-hidden px-8 lg:px-12 bg-white dark:bg-[#1a1a1a] ">
        <div className="flex flex-col items-start justify-center mb-6">
          <p className="text-primary">
            {translations.mainContent.faqSection.frequentlyـaskedـquestions}
          </p>
          <h2 className="py-6 text-2xl sm:text-3xl font-extrabold leading-tight">
            {translations.mainContent.faqSection.some_frequently_asked}
          </h2>
          <p className="text-gray-500">
            {translations.mainContent.faqSection.here_you_will_find}
          </p>
        </div>
        <div className="flex flex-col lg:flex-row items-center lg:gap-12 ">
          {/* Section Photo */}
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <img
              src="/image/faaq.webp"
              alt="FAQ Illustration"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>

          {/* القسم الخاص بالأسئلة */}
          <div className="w-full lg:w-1/2">
            <div className="space-y-4">
              {translations.mainContent.faqSection.faqs.map((item, index) => (
                <div
                  key={index}
                  className="bg-tertiary dark:bg-[#201c1c] rounded-lg shadow py-2"
                >
                  <button
                    onClick={() => toggleQuestion(index)}
                    className="flex justify-between items-center w-full px-4 py-2 text-left text-sm font-medium text-gray-800 dark:text-gray-200 focus:outline-none"
                  >
                    <span className="text-base dark:text-white font-semibold">
                      {item.question}
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`w-5 h-5 text-primary transition-transform duration-300 ${
                        activeQuestion === index ? "rotate-180" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  <div
                    ref={(el) => (answerRefs.current[index] = el)}
                    className={`
                      overflow-hidden transition-all duration-200 ease-in-out 
                      text-sm text-gray-600 dark:text-gray-300
                    `}
                    style={{
                      maxHeight: activeQuestion === index ? "500px" : "0px", //
                      overflow: "hidden",
                      transition: "max-height 0.3s ease-in-out",
                      paddingTop: activeQuestion === index ? "2rem" : "0px",
                      paddingBottom: activeQuestion === index ? "2rem" : "0px",
                    }}
                  >
                    {item.answer}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
