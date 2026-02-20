import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Contact() {
  return (
    <>
      <Navbar />
      <div className="flex h-screen items-center justify-center">
        <div className="w-full max-w-md p-8 space-y-3 rounded-xl border shadow-lg dark:bg-slate-900 dark:text-white">
          <h1 className="text-2xl font-bold text-center">Contact Us</h1>
          <form className="space-y-6">
            <div>
              <label className="block text-sm">Name</label>
              <input type="text" placeholder="Enter your name" className="w-full px-4 py-3 rounded-md border outline-none dark:bg-slate-800" />
            </div>
            <div>
              <label className="block text-sm">Email</label>
              <input type="email" placeholder="Email address" className="w-full px-4 py-3 rounded-md border outline-none dark:bg-slate-800" />
            </div>
            <div>
              <label className="block text-sm">Message</label>
              <textarea placeholder="Type your message..." className="w-full px-4 py-3 rounded-md border outline-none dark:bg-slate-800"></textarea>
            </div>
            <button className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-md hover:bg-blue-700">Submit</button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;