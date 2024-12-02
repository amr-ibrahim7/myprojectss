import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Template from "./components/Template";
import { ThemeProvider } from "./components/ThemeProvider";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Financing from "./components/pages/Financing";
import NotFound from "./components/pages/NotFound";
import Privacy from "./components/pages/Privacy";
import Projects from "./components/pages/Projects";
import Terms from "./components/pages/Terms";
import ThankYou from "./components/pages/ThankYou";

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