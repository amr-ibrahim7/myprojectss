import React, { useContext, useEffect, useState } from "react";
import Loader from "../components/Loader";
import { LanguageContext } from "../context/LanguageContext";

function Privacy() {
  const { language, translations, fetchDynamicData } =
    useContext(LanguageContext);
  const [privacyData, setPrivacyData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadPrivacyData = async () => {
      try {
        setIsLoading(true);
        const data = await fetchDynamicData("privacy", language);
        setPrivacyData(data);
        setError(null);
      } catch (error) {
        console.error("Error loading privacy data:", error);
        setError("حدث خطأ أثناء تحميل بيانات الخصوصية");
      } finally {
        setIsLoading(false);
      }
    };

    loadPrivacyData();
  }, [language]);

  if (isLoading) return <Loader />;
  if (error) return <div>{error}</div>;
  return (
    <div>
      <h1>{translations.page_privacy.HowـHandleـPersonal}</h1>
      {privacyData && (
        <div className="privacy-content">
          {privacyData.data.split("\n").map((paragraph, index) => (
            <p key={index} className="privacy-paragraph">
              {paragraph}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}

export default Privacy;
