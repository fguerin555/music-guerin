import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./Global.css";
import Home from "./pages/HomeFile/Home";
import Chamber from "./pages/ChamberFile/Chamber";
import Orchestral from "./pages/OrchestralFile/Orchestral";
import Urban from "./pages/UrbanFile/Urban";
import Piano from "./pages/PianoFile/Piano";
import Jazz from "./pages/JazzFile/Jazz";
import West from "./pages/WestFile/West";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/music-guerin" element={<Home />} />
        <Route path="/orchestral" element={<Orchestral />} />
        <Route path="/chamber" element={<Chamber />} />
        <Route path="/urban" element={<Urban />} />
        <Route path="/piano" element={<Piano />} />
        <Route path="/jazz" element={<Jazz />} />
        <Route path="/west" element={<West />} />
      </Routes>
      <Footer />
    </Router>
  );
};
export default App;
