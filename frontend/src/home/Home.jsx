import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Freebook from "../components/Freebook";
import Footer from "../components/Footer";
import UserDashboard from "../components/Test"; // Import the new dashboard

function Home() {
  // Check if user is logged in
  const authUser = localStorage.getItem("Users");

  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        {authUser ? (
          /* DISPLAY THIS AFTER LOGIN */
          <UserDashboard />
        ) : (
          /* DISPLAY THIS BEFORE LOGIN */
          <>
            <Banner />
            <Freebook />
          </>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Home;