import React, { useContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import BackToTopBtn from "./components/BackToTopBtn";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Loader from "./components/Loader";
import SEO from "./components/SEO";
import { ThemeProvider } from "./components/ThemeProvider";
import WhatsAppIcon from "./components/WhatsAppIcon";
import { LanguageContext } from "./context/LanguageContext";
import { getMetaTags } from "./utills/getMetaTags";

// Lazy load components
const MainContent = React.lazy(() =>
  import(/* webpackPrefetch: true */ "/src/components/MainContent.jsx")
);
const Template = React.lazy(() => import("/src/components/Template.jsx"));
const About = React.lazy(() => import("/src/pages/About.jsx"));
const Contact = React.lazy(() => import("/src/pages/Contact.jsx"));
const Financing = React.lazy(() => import("/src/pages/Financing.jsx"));
const Projects = React.lazy(() => import("/src/pages/Projects.jsx"));
const NotFound = React.lazy(() => import("/src/pages/NotFound.jsx"));
const Terms = React.lazy(() => import("/src/pages/Terms.jsx"));
const Privacy = React.lazy(() => import("/src/pages/Privacy.jsx"));
const ThankYou = React.lazy(() => import("/src/pages/ThankYou.jsx"));
// const Blog = React.lazy(() => import("/src/pages/Blog.jsx"));

function App() {
  const [globalData, setGlobalData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { language, translations, fetchDynamicData } =
    useContext(LanguageContext);
  const metaTags = getMetaTags(language);

  useEffect(() => {
    async function fetchAllData() {
      try {
        setIsLoading(true);
        const homeData = await fetchDynamicData("home", language);
        setGlobalData(homeData);
      } catch (error) {
        console.error("Error fetching global data", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchAllData();
  }, [language]);

  if (isLoading) {
    return (
      <ThemeProvider attribute="class" defaultTheme="dark">
        <div className="flex justify-center items-center min-h-screen">
          <Loader />
        </div>
      </ThemeProvider>
    );
  }
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <SEO metaTags={metaTags} />
      <Header translations={translations} language={language} />
      <Routes>
        <Route
          path="/"
          element={
            <Template>
              <MainContent
                translations={translations}
                language={language}
                data={globalData}
              />
            </Template>
          }
        />
        <Route
          path="/about-us"
          element={
            <Template>
              <About translations={translations} language={language} />
            </Template>
          }
        />
        <Route
          path="/our-service"
          element={
            <Template>
              <Projects translations={translations} language={language} />
            </Template>
          }
        />
        <Route
          path="/contact-us"
          element={
            <Template>
              <Contact translations={translations} language={language} />
            </Template>
          }
        />
        {/* <Route
          path="/blog"
          element={
            <Template>
              <Blog />
            </Template>
          }
        /> */}
        <Route
          path="/financing"
          element={
            <Template>
              <Financing translations={translations} language={language} />
            </Template>
          }
        />
        <Route
          path="/terms"
          element={
            <Template>
              <Terms translations={translations} language={language} />
            </Template>
          }
        />
        <Route
          path="/privacy-policy"
          element={
            <Template>
              <Privacy translations={translations} language={language} />
            </Template>
          }
        />
        <Route
          path="/thank-you"
          element={
            <Template>
              <ThankYou translations={translations} language={language} />
            </Template>
          }
        />
        <Route
          path="*"
          element={
            <Template>
              <NotFound translations={translations} language={language} />
            </Template>
          }
        />
      </Routes>
      <BackToTopBtn language={language} />
      <WhatsAppIcon data={globalData} language={language} />
      <Footer
        data={globalData}
        translations={translations}
        language={language}
      />
    </ThemeProvider>
  );
}

export default App;
