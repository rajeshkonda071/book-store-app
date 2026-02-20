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

    // This triggers the POST request to your backend on port 5050
    await axios
      .post("http://localhost:5050/user/signup", userInfo)
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
          toast.error("Error: " + err.response.data.message);
        }
      });
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="modal-box border shadow-md p-5 dark:bg-slate-900 dark:text-white">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
          <h3 className="font-bold text-lg">Signup</h3>
          
          <div className="mt-4">
            <span>Full Name</span><br />
            <input type="text" placeholder="Enter your fullname" className="w-80 px-3 py-1 border rounded-md outline-none dark:bg-slate-800" 
              {...register("fullname", { required: true })} />
          </div>
          
          <div className="mt-4">
            <span>Email</span><br />
            <input type="email" placeholder="Enter your email" className="w-80 px-3 py-1 border rounded-md outline-none dark:bg-slate-800" 
              {...register("email", { required: true })} />
          </div>

          <div className="mt-4">
            <span>Password</span><br />
            <input type="password" placeholder="Enter your password" className="w-80 px-3 py-1 border rounded-md outline-none dark:bg-slate-800" 
              {...register("password", { required: true })} />
          </div>

          <button className="bg-pink-500 text-white rounded-md px-3 py-1 mt-4 hover:bg-pink-700 duration-200">
            Signup
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;