import React, { useState } from "react";
import img3 from "../images/signup.webp";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { Helmet } from "react-helmet-async";
import { toast, Toaster } from "sonner";
import { useForm } from "react-hook-form";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [state, setState] = useState(false);
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const toggleBtn = () => {
    setState((prevstate) => !prevstate);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await fetch(
      `${process.env.REACT_APP_DATABASE_URL}/auth/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: credentials.email,
          password: credentials.password,
        }),
      }
    );
    const json = await response.json();
    console.log(json);
    if (json.success) {
      // the auth token to local storge
      localStorage.setItem("token", json.authtoken);
      navigate("/notes");
      toast.success("Logged In Successfully", {
        duration: 1000,
      });
    } else {
      toast.error("Invalid Credentials, Please Check the Details", {
        duration: 1000,
      });
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <>
      {/* <Signup method="Login" ormethod="SIGNUP" methodlink="/signup" methoddisplay="none" onSubmit={handleSubmit}/> */}
      <Helmet>
        <title>Login - Notesvault</title>
        <meta
          name="description"
          content="Registered User - Login Now and access your notes !"
        />
        <link rel="canonical" href="/login" />
      </Helmet>
      <Navbar />
      <Toaster
        richColors
        className="notification"
        position="bottom-right"
        expand={false}
      />
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
            <form onSubmit={handleSubmit(handleLogin)}>
              <div className="input-label">
                <div className="label-p">
                  <label htmlFor="name">Email</label>
                  <p className="required">*</p>
                </div>
                <input
                  type="email"
                  {...register("email")}
                  id="email"
                  required
                  onChange={onChange}
                  value={credentials.email}
                />
                {errors.email && <span>This field is required</span>}
              </div>

              <div className="input-label">
                <div className="label-p">
                  <label htmlFor="name">Password</label>
                  <p className="required">*</p>
                </div>
                <input
                  type={state ? "text" : "password"}
                  {...register("password")}
                  id="Password"
                  required
                  value={credentials.password}
                  onChange={onChange}
                />
                <i onClick={toggleBtn}>
                  {state ? (
                    <FaRegEye className="eye" />
                  ) : (
                    <FaRegEyeSlash className="eye" />
                  )}
                </i>
              </div>
              <input type="submit" className="signup-btn" value="Login" />

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
