import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./Global.css";
import Home from "./pages/HomeFile/Home";
import Chamber from "./pages/ChamberFile/Chamber";
import Orchestral from "./pages/OrchestralFile/Orchestral";
import Urban from "./pages/UrbanFile/Urban";
import Etnic from "./pages/EtnicFile/Etnic";
import Jazz from "./pages/JazzFile/Jazz";
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
          <Route path="/orchestral" element={<Orchestral />} />
          <Route path="/chamber" element={<Chamber />} />
          <Route path="/urban" element={<Urban />} />
          <Route path="/etnic" element={<Etnic />} />
          <Route path="/jazz" element={<Jazz />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};
export default App;
