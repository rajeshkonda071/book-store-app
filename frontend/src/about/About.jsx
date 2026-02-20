import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function About() {
  return (
    <>
      <Navbar />
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 pt-32 pb-10">
        <div className="bg-[#1e1e1e] rounded-lg shadow-2xl overflow-hidden border border-gray-700 font-mono">
          {/* Editor Header */}
          <div className="bg-[#333333] px-4 py-2 flex items-center justify-between">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span className="text-gray-400 text-sm italic">AboutUs.json — bookStore</span>
            <div></div>
          </div>

          {/* Editor Body */}
          <div className="p-6 text-sm md:text-base leading-relaxed overflow-x-auto">
            <div className="flex gap-4">
              <span className="text-gray-500 text-right w-5">1</span>
              <p><span className="text-pink-500">{"{"}</span></p>
            </div>
            <div className="flex gap-4">
              <span className="text-gray-500 text-right w-5">2</span>
              <p className="ml-4">
                <span className="text-blue-400">"mission"</span>: <span className="text-yellow-200">"To bridge the gap between students and quality coding literature."</span>,
              </p>
            </div>
            <div className="flex gap-4">
              <span className="text-gray-500 text-right w-5">3</span>
              <p className="ml-4">
                <span className="text-blue-400">"developer"</span>: <span className="text-yellow-200">"Rajesh Konda"</span>,
              </p>
            </div>
            <div className="flex gap-4">
              <span className="text-gray-500 text-right w-5">4</span>
              <p className="ml-4">
                <span className="text-blue-400">"stack"</span>: <span className="text-pink-500">[</span>
                <span className="text-yellow-200">"MongoDB"</span>, 
                <span className="text-yellow-200">"Express"</span>, 
                <span className="text-yellow-200">"React"</span>, 
                <span className="text-yellow-200">"Node"</span>
                <span className="text-pink-500">]</span>,
              </p>
            </div>
            <div className="flex gap-4">
              <span className="text-gray-500 text-right w-5">5</span>
              <p className="ml-4">
                <span className="text-blue-400">"location"</span>: <span className="text-yellow-200">"Hyderabad, India"</span>,
              </p>
            </div>
            <div className="flex gap-4">
              <span className="text-gray-500 text-right w-5">6</span>
              <p className="ml-4">
                <span className="text-blue-400">"vision"</span>: <span className="text-yellow-200">"Empowering the next generation of full-stack developers through shared knowledge."</span>
              </p>
            </div>
            <div className="flex gap-4">
              <span className="text-gray-500 text-right w-5">7</span>
              <p><span className="text-pink-500">{"}"}</span></p>
            </div>
            <div className="mt-6 flex gap-4 animate-pulse">
              <span className="text-gray-500 text-right w-5">8</span>
              <span className="w-2 h-5 bg-white"></span>
            </div>
          </div>
        </div>

        {/* Normal text below the editor */}
        <div className="mt-10 text-center">
          <h2 className="text-2xl font-bold">Our Story</h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Founded in 2026, our bookstore started as a small project to help students find technical books easily. 
            Today, we are growing into a community of passionate learners.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;