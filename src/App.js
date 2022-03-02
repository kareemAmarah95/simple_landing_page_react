import React from "react";
import {Routes, Route} from "react-router-dom";
import Home from './components/Home';
import PricingRoute from "./routes/PricingRoute";
import Faq from "./routes/Faq";
import Contact from "./routes/Contact";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/pricing" element={<PricingRoute />}></Route>
        <Route path="/faq" element={<Faq />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </>
  );
}

export default App;
