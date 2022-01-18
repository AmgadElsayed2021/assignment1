import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Ratings } from "./pages";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/ratings" element={<Ratings />} />
      </Routes>
    </div>
  );
}

export default App;
