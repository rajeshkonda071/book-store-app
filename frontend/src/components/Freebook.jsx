import React from "react";
import { useNavigate } from "react-router-dom";

function Freebook() {
  const navigate = useNavigate();

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 mt-10">
      <div className="space-y-4">
        <h1 className="font-semibold text-2xl text-pink-500">
          Free Offered Books
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          Take a look at our curated collection of free books to help you get 
          started on your learning journey. From JavaScript basics to advanced 
          MERN stack patterns, we've got you covered.
        </p>
        <button 
          onClick={() => navigate("/free-library")}
          className="bg-pink-500 text-white px-6 py-2 rounded-md hover:bg-pink-700 duration-300 transition-all cursor-pointer"
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Freebook;