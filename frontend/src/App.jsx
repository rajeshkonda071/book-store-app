import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import Premium from "./components/Premium";
import Signup from "./components/Signup";
import Contact from "./contact/Contact";
import About from "./about/About"; // 1. Import About
import { Toaster } from "react-hot-toast";
import FreeLibrary from './components/FreeLibrary';

function App() {
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/premium" element={<Premium />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<Contact />} />
<Route path="/free-library" element={<FreeLibrary />} />
          <Route path="/about" element={<About />} /> {/* 2. Add Route */}
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;