import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";
import { Link } from "react-router-dom";

function Premium() {
  const [book, setBook] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const getBook = async () => {
      try {
        // Updated to your live Render URL
        const res = await axios.get("https://book-store-app-w0c0.onrender.com/book");
        
        // Filter to only show Premium (Paid) books in this section
        const premiumData = res.data.filter((item) => item.category !== "Free");
        setBook(premiumData);
      } catch (error) {
        console.log("Error fetching premium books:", error);
      }
    };
    getBook();
  }, []);

  // Filter books based on search input
  const filteredBooks = book.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 pb-20">
      {/* Hero Section */}
      <div className="pt-28 flex flex-col items-center text-center">
        <h1 className="text-3xl md:text-5xl font-bold">
          Unlock <span className="text-pink-500">Premium</span> Knowledge
        </h1>
        <p className="mt-8 max-w-2xl text-gray-600 dark:text-gray-300">
          Gain access to industry-leading technical content. These resources are 
          specifically curated to help you master Full-Stack Development and 
          System Design.
        </p>
        
        {/* Search Bar */}
        <div className="mt-10 w-full max-w-md px-4">
          <label className="input input-bordered flex items-center gap-2 dark:bg-slate-800 border-pink-500/30 focus-within:border-pink-500 transition-all shadow-sm">
            <input 
              type="text" 
              className="grow" 
              placeholder="Search by book name or category..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70">
              <path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" />
            </svg>
          </label>
        </div>

        <Link to="/">
          <button className="mt-8 bg-pink-500 text-white px-8 py-2 rounded-full font-medium hover:bg-pink-700 transition-all duration-300 shadow-lg shadow-pink-500/20 active:scale-95">
            Back to Home
          </button>
        </Link>
      </div>

      <hr className="mt-16 border-gray-200 dark:border-gray-700" />

      {/* Grid for Book Cards */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((item) => (
            <Cards key={item._id || item.id} item={item} />
          ))
        ) : (
          <div className="col-span-full text-center py-20">
            <h2 className="text-xl text-gray-500 italic">
              {searchQuery ? `No premium books found matching "${searchQuery}"` : "Loading your premium library..."}
            </h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default Premium;