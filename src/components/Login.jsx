import React, { useContext, useState } from "react";
import img3 from "../images/signup.png";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import Navbar from "./Navbar";
import Alert from "./Alert";

export default function Login() {

  const [state, setState] = useState(false);
  useContext(message);
  const [credentials, setCredentials] = useState({email: "", password: ""});
  const navigate = useNavigate();
  const [alert, setAlert] = useState({type: ' ', message: ' '});
  createContext



  const toggleBtn = () => {
    setState((prevstate) => !prevstate);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:5000/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email: credentials.email, password:credentials.password }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success){
      // the the auth token to local storge
      localStorage.setItem('token', json.authtoken);
      setAlert({message: 'Success : Logged in successfully!' });
      console.log(alert.type + "this is alert type")
      console.log(alert.message  + "this is alert type")
      console.log(alert + "this is alert")
      message = "Success : Logged in successfully!";
      navigate("/notes");
      
    }else {
      setMessage('Error : Invalid Credentials' );
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <>
      {/* <Signup method="Login" ormethod="SIGNUP" methodlink="/signup" methoddisplay="none" onSubmit={handleSubmit}/> */}
      <Navbar/>
      
      {alert && <Alert type={alert.type} message={alert.message} />}
      <div className="signup-bg">
        <div className="signupcontainer" style={{ marginTop: `10px` }}>
          <div className="form-container">
            <img className="signup-img" src={img3} alt="" />
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
