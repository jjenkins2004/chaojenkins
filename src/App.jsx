import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Support from "./pages/Support";
import Clipirl from "./pages/clipirl/Clipirl"
import PrivacyPolicy from "./pages/clipirl/PrivacyPolicy";

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/support" element={<Support />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/clipirl" element = {<Clipirl />} />
        <Route path="/clipirl/privacy-policy" element = {<PrivacyPolicy />} />
      </Routes>
  );
};
export default App;
