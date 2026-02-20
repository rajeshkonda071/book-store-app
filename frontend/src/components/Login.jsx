import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    
    // Updated to your live Render URL
    await axios
      .post("https://book-store-app-w0c0.onrender.com/user/login", userInfo)
      .then((res) => {
        if (res.data) {
          toast.success("Logged in Successfully!");
          
          // Close modal
          const modal = document.getElementById("my_modal_3");
          if (modal) modal.close();
          
          // Store user in LocalStorage
          localStorage.setItem("Users", JSON.stringify(res.data.user));
          
          // Refresh after success to update Navbar UI
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        }
      })
      .catch((err) => {
        if (err.response) {
          // Failure Message from Backend (e.g., "User not found")
          toast.error("Error: " + err.response.data.message);
        } else {
          // Handle cases where server is down or URL is wrong
          toast.error("Server is not responding. Please try again later.");
        }
      });
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box dark:bg-slate-900 dark:text-white border dark:border-slate-700">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_3").close()}
            >✕</Link>

            <h3 className="font-bold text-2xl text-pink-500">Login</h3>
            
            <div className="mt-4 space-y-2">
              <span className="font-medium">Email</span><br />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full md:w-80 px-3 py-2 border rounded-md outline-none dark:bg-slate-800 dark:border-slate-600 focus:border-pink-500 transition-all"
                {...register("email", { required: "Email is required" })}
              />
              <br />
              {errors.email && <span className="text-sm text-red-500">{errors.email.message}</span>}
            </div>

            <div className="mt-4 space-y-2">
              <span className="font-medium">Password</span><br />
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full md:w-80 px-3 py-2 border rounded-md outline-none dark:bg-slate-800 dark:border-slate-600 focus:border-pink-500 transition-all"
                {...register("password", { required: "Password is required" })}
              />
              <br />
              {errors.password && <span className="text-sm text-red-500">{errors.password.message}</span>}
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between mt-6 gap-4">
              <button className="w-full md:w-auto bg-pink-500 text-white rounded-md px-6 py-2 hover:bg-pink-700 duration-300 font-semibold shadow-md active:scale-95 transition-all">
                Login
              </button>
              <p className="text-sm">
                Not registered?{" "}
                <Link to="/signup" className="underline text-blue-500 hover:text-blue-700 cursor-pointer">
                  Signup
                </Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;