import React, { useState } from "react";
import img3 from "../images/signup.webp";
import { Eye, EyeSlash } from "./Icons"
import { useNavigate, Link } from "react-router-dom";
import Navbar from "./Navbar";
import { Helmet } from "react-helmet-async";
import { Toaster, toast } from "sonner";
import Loader from "./Loader";
import { z } from "zod";
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";

export default function Login() {

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/notes")
    }
  }, [])

  const [state, setState] = useState(false);
  const navigate = useNavigate();

  const User = z.object({
    email: z.string().email({ message: "Please enter a valid email" }),
    password: z.string()
      .min(5, { message: "Password must be atleast 5 characters" })
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(User)
  });

  const toggleBtn = () => {
    setState((prevstate) => !prevstate);
  };

  const LoginSubmit = async (data) => {
    const response = await fetch(
      `${import.meta.env.VITE_DATABASE_URL}/auth/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: data.email,
          password: data.password,
        }),
      }
    );
    const json = await response.json();
    if (json.success) {
      localStorage.setItem("token", json.authtoken);
      toast.success('User Logged in Successfully');
      navigate("/notes");
    }
  };

  return (
    <>
      <Helmet>
        <title>Login - Notesvault</title>
        <meta
          name="description"
          content="Registered User - Login Now and access your notes !"
        />
        <link rel="canonical" href="/login" />
      </Helmet>
      <Navbar />
      <Toaster />
      <div className="signup-bg">
        <div className="signupcontainer" style={{ marginTop: `10px` }}>
          <div className="form-container">
            <img
              className="signup-img"
              src={img3}
              loading="eager"
              alt=" a girl reading notes"
            />
            <hr className="divider" />
            <form className="form" onSubmit={handleSubmit(LoginSubmit)}>
              <div className="input-label flex flex-col">
                <div className="label-p">
                  <label htmlFor="name">Email</label>
                  <p className="required">*</p>
                </div>
                <input
                  className="py-1"
                  autoComplete="email"
                  // type="email"
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
                <span className="flex items-center"><input
                  autoComplete="current-password"
                  {...register("password")}
                  type={state ? "text" : "password"}
                  name="password"
                  id="Password"
                  className="py-1"
                  // value={credentials.password}
                  required
                // onChange={onChange}
                />
                  <div onClick={toggleBtn} className="-mx-7 p-1 mb-1 border-2 border-gray-100 rounded-lg">
                    {state ? (
                      <Eye height={18} width={18} />
                    ) : (
                      <EyeSlash height={18.5} width={18.5} />
                    )}
                  </div></span>
                {errors.password && <span className="text-red-500 my-2 text-[10px]">{errors.password.message}</span>}
              </div>
              <button type="submit" disabled={isSubmitting} className={`bg-[#8ae595] w-fit text-white flex m-auto px-4 ${isSubmitting && "px-6 cursor-not-allowed"} py-2 rounded-full mt-7 items-center `}>{isSubmitting ? <Loader /> : "Login"}</button>

              <div>
                <p className="cont">
                  <span className="hrl"></span>
                  <Link to="/signup" className="login-txt">
                    SIGNUP
                  </Link>
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
