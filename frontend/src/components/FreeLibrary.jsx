import React, { useState } from "react"; // 1. Import useState
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Cards from "../components/Cards";
import list from "../assets/FreeBooks.json";

function FreeLibrary() {
  // 2. State to store the user's search input
  const [searchQuery, setSearchQuery] = useState("");

  // 3. Filter the local JSON list based on the search query
  const filteredBooks = list.filter((item) => {
    return (
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <>
      <Navbar />
      <div className="min-h-screen max-w-screen-2xl container mx-auto md:px-20 px-4 pt-28">
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-pink-500">
            Free Technical Library
          </h1>
          
          {/* Search Bar Input */}
          <div className="mt-8 max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search by book name or category..."
              className="w-full px-4 py-2 border rounded-md outline-none focus:border-pink-500 dark:bg-slate-800 dark:text-white transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex justify-center gap-2 mt-4">
            <span className="badge badge-outline p-4">
              {filteredBooks.length} Books Found
            </span>
            <span className="badge badge-secondary p-4">100% Free</span>
          </div>
        </div>

        {/* 4. Display the filteredBooks instead of the original list */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {filteredBooks.length > 0 ? (
            filteredBooks.map((item) => (
              <Cards key={item.name} item={item} />
            ))
          ) : (
            <div className="col-span-full text-center py-10">
              <p className="text-gray-500 italic text-lg">
                No books found matching "{searchQuery}"
              </p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default FreeLibrary;