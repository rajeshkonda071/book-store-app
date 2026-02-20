import React, { useEffect, useState } from "react";
import Cards from "./Cards"; // Ensure you have a Cards component
import axios from "axios";
import { Link } from "react-router-dom";

function Course() {
  const [book, setBook] = useState([]);

  // Fetching book data from your MERN backend
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:5050/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div className="pt-28 items-center justify-center text-center">
        <h1 className="text-2xl md:text-4xl font-semibold">
          We're delighted to have you{" "}
          <span className="text-pink-500"> Here! :)</span>
        </h1>
        <p className="mt-12">
          Explore our premium collection of technical books and courses designed 
          for MERN stack developers. From beginner tutorials to advanced 
          architectural patterns, we have everything you need to grow.
        </p>
        <Link to="/">
          <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
            Back
          </button>
        </Link>
      </div>
      
      {/* Grid for Book Cards */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-4">
        {book.map((item) => (
          <Cards key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Course;