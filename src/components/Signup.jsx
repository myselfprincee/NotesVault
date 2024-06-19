import React, { useState } from "react";
import img3 from "../images/signup.webp";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "./Navbar";
import { Toaster, toast } from "sonner";
import { Eye, EyeSlash } from "./Icons";
import Loader from "./Loader";
// import useSpinStore from "../StateManagement/zustand"
import { z } from "zod";
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";

export default function Signup(props) {
  const [state, setState] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/notes")
    }
  }, [])
  // const [credentials, setCredentials] = useState({
  //   name: "",
  //   email: "",
  //   password: "",
  // });
  const navigate = useNavigate();

  const User = z.object({
    name: z.string().min(3, { message: "Your name must be of atleast 3 characters" }),
    email: z.string().email({ message: "Please enter a valid email" }),
    password: z.string()
      .min(5, { message: "Password must be atleast 5 characters" })
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(User), // Apply the zodResolver
  });

  const toggleBtn = () => {
    setState((prevstate) => !prevstate);
  };

  let method = props.method;
  let methoddisplay = props.methoddisplay;
  let methoddisplay2 = props.methoddisplay2;


  // const isSpinning = useSpinStore(state => state.isSpinning)
  // const resetSpin = useSpinStore(state => state.resetSpin)
  // let spin = useSpinStore((state) => state.spin)

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
      console.log(json);
      if (json.success) {
        // the the auth token to local storge
        localStorage.setItem("token", json.authtoken);
        toast.success("Account has been created Successfully");
        navigate("/notes");
        // resetSpin()
      }
    } catch (error) {
      console.error(error.message);
      toast.error(json.error);
    }
  }
    // isSpinning()


    // const onChange = (e) => {
    //   setCredentials({ ...credentials, [e.target.name]: e.target.value });
    // };

    return (
      <>
        <Navbar
        // credentials={{ credentials }}
        />
        <Toaster />
        <div className="signup-bg">
          <div
            className="signupcontainer"
            style={{ marginTop: `${methoddisplay2}` }}
          >
            <div className="form-container">
              <img
                className="signup-img"
                src={img3}
                loading="eager"
                alt=" a girl reading notes"
              />


              <form className="form" onSubmit={handleSubmit(handleRegister)}>
                <div
                  className="flex flex-col"
                  style={{ display: `${methoddisplay}` }}
                >
                  <div className="label-p">
                    <label htmlFor="name">Name</label>
                    <p className="required">*</p>
                  </div>
                  <input className="py-1 border-black border-b outline-none"
                    autoComplete="first-name"
                    // type="text"
                    name="name"
                    {...register("name")}
                    id="name"
                    required
                  // onChange={onChange}
                  />
                  {errors.name && <span className="text-red-500 my-2 text-[10px]">{errors.name.message}</span>}
                </div>

                <div className="input-label flex flex-col">
                  <div className="label-p">
                    <label htmlFor="name">Email</label>
                    <p className="required">*</p>
                  </div>
                  <input className="py-1"
                    autoComplete="email"
                    // type="email"
                    name="email"
                    id="email"
                    {...register("email")}
                  // onChange={onChange}
                  />
                  {errors.email && <span className="text-red-500 my-2 text-[10px]">{errors.email.message}</span>}
                </div>

                <div className="input-label">
                  <div className="label-p">
                    <label htmlFor="name">Password</label>
                    <p className="required">*</p>
                  </div>
                  <span className="flex"><input
                    autoComplete="current-password"
                    type={state ? "text" : "password"}
                    name="password"
                    id="Password"
                    {...register("password")}
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
                <button type="submit" className={`bg-[#8ae595] w-max text-white flex m-auto px-4 ${isSubmitting && "px-[1.9rem]"} py-2 rounded-full mt-7 items-center`}>{isSubmitting ? <Loader /> : method}</button>

                <div>
                  <p className="cont">
                    <span className="hrl"></span>
                    <Link to="/login" className="login-txt">
                      LOGIN
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
