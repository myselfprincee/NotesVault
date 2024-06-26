import React, { useState, useEffect } from "react";
import img3 from "../images/signup.webp";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "./Navbar";
import { Toaster, toast } from "sonner";
import { Eye, EyeSlash } from "./Icons";
import Loader from "./Loader";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export default function Signup(props) {
  const [state, setState] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/notes");
    }
  }, [navigate]);

  const User = z.object({
    name: z.string().min(3, { message: "Your name must be of at least 3 characters" }),
    email: z.string().email({ message: "Please enter a valid email" }),
    password: z.string().min(5, { message: "Password must be at least 5 characters" }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(User),
  });

  const toggleBtn = () => {
    setState((prevstate) => !prevstate);
  };

  const handleRegister = async (data) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_DATABASE_URL}/auth/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: data.name,
            email: data.email,
            password: data.password,
          }),
        }
      );
      const json = await response.json();
      if (json.success) {
        localStorage.setItem("token", json.authtoken);
        toast.success("Account has been created Successfully");
        navigate("/notes");
      } else {
        toast.error(json.error || "Invalid Credentials, Please Check the Details");
      }
    } catch (error) {
      console.error(error.message);
      toast.error("An error occurred while creating your account");
    }
  };

  return (
    <>
      <Navbar />
      <Toaster />
      <div className="signup-bg">
        <div className="signupcontainer" style={{ marginTop: `${props.methoddisplay2}` }}>
          <div className="form-container">
            <img className="signup-img" src={img3} loading="eager" alt="a girl reading notes" />
            <hr className="divider" />
            <form className="form" onSubmit={handleSubmit(handleRegister)}>
              <div className="flex flex-col" style={{ display: `${props.methoddisplay}` }}>
                <div className="label-p">
                  <label htmlFor="name">Name</label>
                  <p className="required">*</p>
                </div>
                <input
                  className="py-1 border-black border-b outline-none"
                  autoComplete="first-name"
                  name="name"
                  {...register("name")}
                  id="name"
                  required
                />
                {errors.name && <span className="text-red-500 my-2 text-[10px]">{errors.name.message}</span>}
              </div>

              <div className="input-label flex flex-col">
                <div className="label-p">
                  <label htmlFor="name">Email</label>
                  <p className="required">*</p>
                </div>
                <input
                  className="py-1"
                  autoComplete="email"
                  name="email"
                  id="email"
                  {...register("email")}
                  required
                />
                {errors.email && <span className="text-red-500 my-2 text-[10px]">{errors.email.message}</span>}
              </div>

              <div className="input-label">
                <div className="label-p">
                  <label htmlFor="name">Password</label>
                  <p className="required">*</p>
                </div>
                <span className="flex">
                  <input
                    autoComplete="current-password"
                    type={state ? "text" : "password"}
                    name="password"
                    id="Password"
                    {...register("password")}
                    required
                  />
                  <div onClick={toggleBtn} className="-mx-7 p-1 mb-1 border-2 border-gray-100 rounded-lg">
                    {state ? <Eye height={18} width={18} /> : <EyeSlash height={18.5} width={18.5} />}
                  </div>
                </span>
                {errors.password && <span className="text-red-500 my-2 text-[10px]">{errors.password.message}</span>}
              </div>
              <button type="submit" className={`bg-[#8ae595] w-max text-white flex m-auto px-4 ${isSubmitting && "px-[1.9rem]"} py-2 rounded-full mt-7 items-center`}>
                {isSubmitting ? <Loader /> : props.method}
              </button>
              <div>
                <p className="cont">
                  <span className="hrl"></span>
                  <Link to="/login" className="login-txt">LOGIN</Link>
                  <span className="hrl"></span>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
