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
    
    await axios
      .post("http://localhost:5050/user/login", userInfo)
      .then((res) => {
        if (res.data) {
          // Success Message
          toast.success("Logged in Successfully!");
          
          // Close modal
          document.getElementById("my_modal_3").close();
          
          // Store user in LocalStorage
          localStorage.setItem("Users", JSON.stringify(res.data.user));
          
          // Reload to update Navbar state
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        }
      })
      .catch((err) => {
        if (err.response) {
          // Failure Message (e.g., "Invalid email or password")
          toast.error("Error: " + err.response.data.message);
        } else {
          toast.error("Server not responding. Check your backend!");
        }
      });
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box dark:bg-slate-900 dark:text-white">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_3").close()}
            >✕</Link>

            <h3 className="font-bold text-lg">Login</h3>
            
            {/* Email Input */}
            <div className="mt-4 space-y-2">
              <span>Email</span><br />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-80 px-3 py-1 border rounded-md outline-none dark:bg-slate-800"
                {...register("email", { required: true })}
              />
              <br />
              {errors.email && <span className="text-sm text-red-500">Email is required</span>}
            </div>

            {/* Password Input */}
            <div className="mt-4 space-y-2">
              <span>Password</span><br />
              <input
                type="password"
                placeholder="Enter your password"
                className="w-80 px-3 py-1 border rounded-md outline-none dark:bg-slate-800"
                {...register("password", { required: true })}
              />
              <br />
              {errors.password && <span className="text-sm text-red-500">Password is required</span>}
            </div>

            {/* Buttons */}
            <div className="flex justify-around mt-6">
              <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                Login
              </button>
              <p>Not registered? <Link to="/signup" className="underline text-blue-500 cursor-pointer">Signup</Link></p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;