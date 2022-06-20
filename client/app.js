import React from "react";
import Home from "./components/home.js";
// Example imports below -----
// import PAGE1 from "./components/page1file.js";
// import PAGE2 from "./components/page2file.js";
// import Nav from "./components/navigation.js";

import { BrowserRouter, Routes, Route } from "react-router-dom";

//Normal App flow below
export default function App() {
  return (
    <BrowserRouter>
      {/* This is a good spot for a nav bar, that will be present accross all pages
      <Nav /> */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* Configure your routes here
        <Route exact path='/PATH1' element={<PAGE1 />} />
        <Route exact path="/PATH2" element={<PAGE2 />} /> */}
        {/* This is the "catch all" below */}
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
