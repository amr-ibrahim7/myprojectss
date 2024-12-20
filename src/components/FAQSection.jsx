import React, { useState } from "react";

const FAQSection = ({ translations, language, data }) => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  return (
    <section className="w-full mx-auto" id="faq">
      <div className="py-8 lg:py-28 overflow-hidden px-8 lg:px-12 bg-white dark:bg-[#1a1a1a]">
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

        <div className="flex flex-col lg:flex-row items-center lg:gap-12">
          {/* Section Photo */}
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <img
              src="/image/fa.webp"
              alt="FAQ Illustration"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>

          {/* FAQ Section */}
          <div className="w-full lg:w-1/2">
            <div className="space-y-4">
              {data.data.fqs.map((item, index) => (
                <div
                  key={item.id}
                  className="bg-tertiary dark:bg-[#201c1c] rounded-lg shadow"
                >
                  <button
                    onClick={() => toggleQuestion(index)}
                    className={`flex justify-between items-center w-full px-4 py-2 text-sm font-medium 
                      ${language === "ar" ? "text-right" : "text-left"} 
                      text-gray-800 dark:text-gray-200 focus:outline-none`}
                  >
                    <span className="text-base dark:text-white font-semibold">
                      {item.title}
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
                    className={`
                      text-sm text-gray-600 dark:text-gray-300 px-4
                      overflow-hidden transition-transform duration-300 ease-in-out
                      ${
                        activeQuestion === index
                          ? "scale-y-100 opacity-100 py-2"
                          : "scale-y-0 opacity-0 py-0"
                      }
                      origin-top
                    `}
                    style={{
                      transformOrigin: "top",
                    }}
                  >
                    {item.description}
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
