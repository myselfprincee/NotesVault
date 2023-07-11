import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import notesvault from '../images/notesvault.png'
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { VscAccount } from "react-icons/vsc";
import { IconContext } from "react-icons";
import { CgArrowTopRight } from "react-icons/cg";
import notesvaultLogo from "../images/logo.png"



const Navbar = () => {
  let location = useLocation();
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = React.useState(null);
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  useEffect(() => {
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
    // Simulating fetching user details from an API or local storage
    const fetchUserDetails = () => {
      const user = {
        name: "John Doe",
        email: "john@example.com",
        // Add more user details if needed
      };
      setUserDetails(user);
    };

    fetchUserDetails();
  }, []);

  useEffect(() => {
  }, [location]);


  const currentPath = window.location.pathname;
  const hideElement_login = currentPath === "/login" && windowWidth < 400;
  const setMarginZero_login = currentPath === "/login" && windowWidth < 400;
  const hideElement_signup = currentPath === "/signup" && windowWidth < 400;
  const setMarginZero_signup = currentPath === "/signup" && windowWidth < 400;


  return (
    <nav className='Navbar'>
      

      <div className='uls-container'>
      <Link to="/" className='logo-nav-1' draggable="false"><img className='nav-logo1 nav-logo' src={notesvault} alt="notesvault" draggable="false" /></Link>
      <Link to="/" draggable="false"><img className='nav-logo2 nav-logo' src={notesvaultLogo} alt="notesvault-logo" draggable="false" /></Link>
        <div className='ul-container'>
          {/* <hr /> */}
          <div className='dropdown' tabIndex={0}>
            <div className='links'>Additional Links
              <IconContext.Provider className="link-i-c" value={{ size: "1.2em" }}>
                <CgArrowTopRight className='link-icon' />
              </IconContext.Provider>
            </div>
            <ul className='links-dropdown'>
              <Link to="/contact-us">Wanna Talk! Contact Me</Link>
              <Link to="/about" className='contact'>About The Creator</Link>
              <Link to="/notes" style={{marginTop:"0.5rem"}}>GO to Notes Page</Link>
            </ul>
          </div>

          {!localStorage.getItem("token") ? <ul className='nav-ul'>
            <li className='nav-li'><Link to="/login" className={`a a-login ${location.pathname === "/login" ? "white" : ""}` } style={{ display: hideElement_login ? 'none' : 'block' , margin: hideElement_signup ? '0' : '' }}>Log In</Link></li>
            <li className='nav-li'><Link to="/signup" className={`a a-signup ${location.pathname === "/signup" ? "white" : ""}`}style={{ margin: hideElement_login ? '0' : '', display: hideElement_signup ? 'none' : 'block' }}>Sign Up</Link></li>
          </ul> :
            <span className='dropdown-user-cont'>
              <div className='dropdown-user' tabIndex={1}>
                <IconContext.Provider value={{ size: '2.4em', width: "100%", color: "#8ae595" }}>
                  <VscAccount className='links-user' />
                </IconContext.Provider>
                <div className='links-dropdown-user'>
                  {userDetails && (
                    <>
                      <p>{userDetails.name}</p>
                      <p>{userDetails.email}</p>
                    </>
                  )}
                </div>
              </div>

              <li onClick={handleLogout} style={{ marginRight: "10px" }} className={`a logout ${location.pathname === "/login" ? "white" : ""}`}>Log Out</li>
            </span>}
        </div>
      </div>

    </nav>
  )
}

export default Navbar
