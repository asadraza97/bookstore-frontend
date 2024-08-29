import React from "react";
import Home from "./home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Courses from "./courses/Courses";
import Sign from "./components/Sign/Sign";
import Contact from "./Contact/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Courses />} />
        <Route path="/signup" element={<Sign />} />
        <Route path="/contact" element={<Contact />} />;

      </Routes>
    </BrowserRouter>
  );
}

export default App;
