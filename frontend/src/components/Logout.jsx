import React from "react";
import toast from "react-hot-toast";

function Logout() {
  const handleLogout = () => {
    try {
      // Clear user from local storage
      localStorage.removeItem("Users");
      toast.success("Logout successfully");

      // Refresh to update the Navbar state
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (error) {
      toast.error("Error: " + error.message);
    }
  };

  return (
    <div>
      <button
        className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}

export default Logout;