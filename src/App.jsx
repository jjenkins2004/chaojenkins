import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import About from "./pages/About";
import Services from "./pages/Services";
// import Portfolio from "./pages/Portfolio";
// import Support from "./pages/Support";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
