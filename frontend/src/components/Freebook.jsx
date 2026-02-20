import React, { useEffect, useState } from "react";
import axios from "axios";
import Cards from "./Cards";

function Freebook() {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:5050/book"); // Your backend port
        const data = res.data.filter((data) => data.price === 0);
        setBook(data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div>
        <h1 className="font-semibold text-xl pb-2">Free Offered Books</h1>
        <p>Take a look at our collection of free books to help you get started on your learning journey.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        {book.map((item) => (
          <Cards item={item} key={item._id} />
        ))}
      </div>
    </div>
  );
}

export default Freebook;