import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import notesvault from '../images/notesvault.png'
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import notesvaultLogo from "../images/logo.png"
import { jwtDecode } from "jwt-decode";



const Navbar = ({ credentials }) => {
  let location = useLocation();
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = React.useState(null);
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decoded = jwtDecode(token);
      console.log(decoded)

      console.log(userDetails)
    }



    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");

  }
  useEffect(() => {
  }, [location]);

  const currentPath = window.location.pathname;
  const hideElement_login = currentPath === "/login" && windowWidth < 400;
  const setMarginZero_login = currentPath === "/login" && windowWidth < 400;
  const hideElement_signup = currentPath === "/signup" && windowWidth < 400;
  const setMarginZero_signup = currentPath === "/signup" && windowWidth < 400;


  return (
    <nav className='Navbar Mobile:py-1'>


      <div className='uls-container'>
        <Link to="/" className='logo-nav-1' draggable="false"><img className='nav-logo1 nav-logo' src={notesvault} alt="notesvault" draggable="false" /></Link>
        <Link to="/" draggable="false"><img className='nav-logo2 nav-logo' src={notesvaultLogo} alt="notesvault-logo" draggable="false" /></Link>
        <div className='ul-container'>
          <div className='dropdown' tabIndex={0}>
            <div className='flex mt-0.5 text-[#8ae595] w-max mx-4 text-[15px] cursor-pointer'>Additional Links
              <svg height={20} className='rotate-45' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="Arrow"><path d="M17 10c-.3 0-.5-.1-.7-.3l-5-5c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l5 5c.4.4.4 1 0 1.4-.2.2-.4.3-.7.3z" fill="#8ae595" className="color000000 svgShape"></path><path d="M7 10c-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l5-5c.4-.4 1-.4 1.4 0s.4 1 0 1.4l-5 5c-.2.2-.4.3-.7.3z" fill="#8ae595" className="color000000 svgShape"></path><path d="M12 21c-.6 0-1-.4-1-1V4c0-.6.4-1 1-1s1 .4 1 1v16c0 .6-.4 1-1 1z" fill="#8ae595" className="color000000 svgShape"></path></svg>
            </div>
            <div className='links-dropdown Mobile:w-max Mobile:mt-2 gap-1'>
              <Link className='text-white' to="/contact-us">Wanna Talk! Contact Me</Link>
              <Link className='text-white' to="/about">About The Creator</Link>
              <Link className='text-white' to="/notes">GO to Notes Page</Link>
            </div>
          </div>
          {!localStorage.getItem("token") ? <ul className='flex gap-6 mr-5'>
            <Link to="/login" className={`nav-btn ${location.pathname === "/login" ? "white" : ""}
            `} style={{ display: hideElement_login ? 'none' : 'block', margin: setMarginZero_signup ? '0' : '' }}><button className='nav-li Mobile:mx-3'>Log In</button></Link>
            <Link to="/signup" className={`nav-btn ${location.pathname === "/signup" ? "white" : ""} ${setMarginZero_login ? 'm-0' : ''} ${hideElement_signup ? 'hidden' : 'block'} ${location.pathname === "/" && "Mobile:hidden"}`}><button className='nav-li Mobile:mx-3'>Sign Up</button></Link>
          </ul> : 
            <span className='dropdown-user-cont cursor-pointer'>
              <div className='dropdown-user' tabIndex={1}>
                <svg className='links-user' width={30} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="account"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2a7.2 7.2 0 0 1-6-3.22c.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08a7.2 7.2 0 0 1-6 3.22z" fill="#8ae595" className="color000000 svgShape"></path></svg>
                <div className='links-dropdown-user'>
                  {/* {userDetails && ( */}
                  <p className='text-lg font-medium'>@prince</p>
                  <p>princegupta@duck.com</p>
                  <span>
                    <button className='btn my-2 pt-1.5 pb-0.5'><Link to={"/prince/account-info"}>Account Info</Link></button>
                  </span>
                  {/* )} */}
                </div>
              </div>

              <button onClick={handleLogout} style={{ marginRight: "10px" }} className={`btn-m bg-white border-x-green-gradient-start text-[#8ae595] font-semibold ${location.pathname === "/login" ? "white" : ""}`}>Log Out</button>
            </span>}
        </div>
      </div>

    </nav>
  )
}

export default Navbar
