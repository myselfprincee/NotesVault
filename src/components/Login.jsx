import React, { useState } from "react";
import img3 from "../images/signup.webp";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import Navbar from "./Navbar";
import Alert from "./Alert";
import { Helmet } from "react-helmet-async";

export default function Login() {

  const [state, setState] = useState(false);
  const [alert, setAlert] = useState(null);
  const [credentials, setCredentials] = useState({email: "", password: ""});
  const navigate = useNavigate();
  
  



  const toggleBtn = () => {
    setState((prevstate) => !prevstate);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${process.env.REACT_APP_DATABASE_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email: credentials.email, password:credentials.password }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success){
      // the auth token to local storge
      localStorage.setItem('token', json.authtoken);
      navigate("/notes");
      setAlert({ type: 'Success', message: "Logged in successfully"});
      // setTimeout(() => setAlert(null), 1000);
      
    }else {
      setAlert({ type: 'Error', message: 'Invalid Credentials' });
      setTimeout(() => setAlert(null), 1000);
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <>
      {/* <Signup method="Login" ormethod="SIGNUP" methodlink="/signup" methoddisplay="none" onSubmit={handleSubmit}/> */}
      <Helmet>
      <title>Login - notesVault.tk</title>
      <meta name='description' content='Registered User - Login Now and access your notes !' />
      <link rel="canonical" href="/login" />
    </Helmet>
      <Navbar/>
      
      {alert && <Alert type={alert.type} message={alert.message} />}
      <div className="signup-bg">
        <div className="signupcontainer" style={{ marginTop: `10px` }}>
          <div className="form-container">
            <img className="signup-img" src={img3} loading='eager' alt=" a girl reading notes" />
            <hr className="divider" />
            <form className="form" onSubmit={handleSubmit}>
              <div className="input-label">
                <div className="label-p">
                  <label htmlFor="name">Email</label>
                  <p className="required">*</p>
                </div>
                <input type="email" name="email" id="email" value={credentials.email} required onChange={onChange} />
              </div>

              <div className="input-label">
                <div className="label-p">
                  <label htmlFor="name">Password</label>
                  <p className="required">*</p>
                </div>
                <input
                  type={state ? "text" : "password"}
                  name="password"
                  id="Password"
                  value={credentials.password}
                  required onChange={onChange}
                />
                <i onClick={toggleBtn}>
                  {state ? (
                    <FaRegEye className="eye" />
                  ) : (
                    <FaRegEyeSlash className="eye" />
                  )}
                </i>
              </div>
              <input type="submit" className="signup-btn" value="Login"/>

              <div>
                <p className="cont">
                  <span className="hrl"></span>
                  <Link to="/signup" className="login-txt">SIGNUP</Link>
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
