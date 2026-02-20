import React from "react";

function Cards({ item }) {
  return (
    <div className="mt-4 my-3 p-3">
      {/* Set a fixed height for the card container to keep the slider uniform */}
      <div className="card w-full h-[450px] bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
        <figure>
          <img 
            src={item.image} 
            alt={item.name} 
            className="h-48 w-full object-cover" 
          />
        </figure>
        <div className="card-body flex flex-col justify-between">
          <div>
            <h2 className="card-title text-lg">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            {/* Truncate long descriptions to keep height consistent */}
            <p className="text-sm line-clamp-2 mt-2">{item.title}</p>
          </div>
          
          <div className="card-actions justify-between items-center mt-4">
            <div className="badge badge-outline text-md font-semibold">
              {item.price === 0 ? "FREE" : `$${item.price}`}
            </div>
            <div className="cursor-pointer px-3 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200 text-sm font-medium">
              {item.price === 0 ? "Read Now" : "Buy Now"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;