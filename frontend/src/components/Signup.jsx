import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Signup() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };

    // Swapped localhost for your live Render URL
    await axios
      .post("https://book-store-app-w0c0.onrender.com/user/signup", userInfo)
      .then((res) => {
        if (res.data) {
          toast.success("Signup Successfully!");
          // Store user info in browser local storage
          localStorage.setItem("Users", JSON.stringify(res.data.user));
          
          // Redirect to home and refresh to update Navbar
          setTimeout(() => {
            navigate("/");
            window.location.reload();
          }, 1000);
        }
      })
      .catch((err) => {
        if (err.response) {
          // Specifically targeting the error message from your backend
          toast.error("Error: " + (err.response.data.message || "Signup failed"));
        } else {
          toast.error("Server not responding. Please try again later.");
        }
      });
  };

  return (
    <div className="flex h-screen items-center justify-center p-4">
      <div className="modal-box border shadow-md p-8 dark:bg-slate-900 dark:text-white border-gray-200 dark:border-gray-700">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
          <h3 className="font-bold text-2xl text-pink-500">Create Account</h3>
          
          <div className="mt-6">
            <span className="font-medium">Full Name</span><br />
            <input type="text" placeholder="Enter your fullname" 
              className="w-full md:w-80 px-3 py-2 border rounded-md outline-none dark:bg-slate-800 focus:border-pink-500 transition-all" 
              {...register("fullname", { required: "Full name is required" })} />
            {errors.fullname && <p className="text-sm text-red-500 mt-1">{errors.fullname.message}</p>}
          </div>
          
          <div className="mt-4">
            <span className="font-medium">Email</span><br />
            <input type="email" placeholder="Enter your email" 
              className="w-full md:w-80 px-3 py-2 border rounded-md outline-none dark:bg-slate-800 focus:border-pink-500 transition-all" 
              {...register("email", { required: "Email is required" })} />
            {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>}
          </div>

          <div className="mt-4">
            <span className="font-medium">Password</span><br />
            <input type="password" placeholder="Enter your password" 
              className="w-full md:w-80 px-3 py-2 border rounded-md outline-none dark:bg-slate-800 focus:border-pink-500 transition-all" 
              {...register("password", { required: "Password is required" })} />
            {errors.password && <p className="text-sm text-red-500 mt-1">{errors.password.message}</p>}
          </div>

          <button className="w-full md:w-auto bg-pink-500 text-white rounded-md px-6 py-2 mt-6 hover:bg-pink-700 duration-300 font-semibold shadow-md active:scale-95 transition-all">
            Signup
          </button>
          
          <p className="mt-4 text-sm text-center md:text-left">
            Already have an account?{" "}
            <Link to="/" className="text-blue-500 underline hover:text-blue-700">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;