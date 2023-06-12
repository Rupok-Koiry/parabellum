import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Espionage from "./pages/Espionage";
import Desert from "./pages/Desert";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<About />} />
      <Route path="/espionage-challenge" element={<Espionage />} />
      <Route path="/desert-challenge" element={<Desert />} />
    </Routes>
  );
}

export default App;
