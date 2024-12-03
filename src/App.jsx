import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { ThemeProvider } from "./components/ThemeProvider";

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

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Template>
              <MainContent />
            </Template>
          }
        />
        <Route
          path="/about"
          element={
            <Template>
              <About />
            </Template>
          }
        />
        <Route
          path="/projects"
          element={
            <Template>
              <Projects />
            </Template>
          }
        />
        <Route
          path="/contact"
          element={
            <Template>
              <Contact />
            </Template>
          }
        />
        <Route
          path="/financing"
          element={
            <Template>
              <Financing />
            </Template>
          }
        />
        <Route
          path="/terms"
          element={
            <Template>
              <Terms />
            </Template>
          }
        />
        <Route
          path="/privacy-policy"
          element={
            <Template>
              <Privacy />
            </Template>
          }
        />
        <Route
          path="/thank-you"
          element={
            <Template>
              <ThankYou />
            </Template>
          }
        />
        <Route
          path="*"
          element={
            <Template>
              <NotFound />
            </Template>
          }
        />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
