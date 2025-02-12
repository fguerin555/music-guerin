import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./Global.css";
import Home from "./pages/HomeFile/Home";
import About from "./pages/AboutFile/About";
import Orchestral from "./pages/OrchestralFile/Orchestral";
import Urban from "./pages/UrbanFile/Urban";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />

        <Routes>
          <Route path="/site-music" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/orchestral" element={<Orchestral />} />
          <Route path="/urban" element={<Urban />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};
export default App;
