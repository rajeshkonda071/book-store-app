import React from "react";

function UserDashboard() {
  const user = JSON.parse(localStorage.getItem("Users"));

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 pt-32 pb-20">
      {/* Personalized Creative Header */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-700 rounded-3xl p-10 text-white shadow-2xl">
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Welcome back, <span className="text-yellow-400">{user.fullname}</span>! ✨
          </h1>
          <p className="mt-4 text-lg md:w-2/3 opacity-90">
            Your personal library is synchronized. We've found 12 new titles matching your interest in MERN stack development since your last visit.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <button className="bg-white text-blue-700 px-8 py-3 rounded-full font-bold hover:bg-yellow-400 hover:text-blue-900 transition duration-300 transform hover:scale-105">
              Continue Reading
            </button>
            <button className="backdrop-blur-md bg-white/20 border border-white/30 px-8 py-3 rounded-full font-bold hover:bg-white/30 transition duration-300">
              View My Stats
            </button>
          </div>
        </div>
        
        {/* Creative Abstract Background Shape */}
        <div className="absolute -right-20 -top-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
      </div>

      {/* Statistics Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        <div className="p-6 bg-base-100 rounded-2xl shadow-xl border-b-4 border-blue-500">
          <h3 className="text-gray-500 font-medium">Books Finished</h3>
          <p className="text-3xl font-bold mt-2">24</p>
        </div>
        <div className="p-6 bg-base-100 rounded-2xl shadow-xl border-b-4 border-purple-500">
          <h3 className="text-gray-500 font-medium">Learning Hours</h3>
          <p className="text-3xl font-bold mt-2">128h</p>
        </div>
        <div className="p-6 bg-base-100 rounded-2xl shadow-xl border-b-4 border-pink-500">
          <h3 className="text-gray-500 font-medium">Community Rank</h3>
          <p className="text-3xl font-bold mt-2">#412</p>
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;