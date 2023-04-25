import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import notesvault from '../images/notesvault.png'
import { useLocation } from 'react-router-dom';


const Navbar = () => {
  let location = useLocation();

  useEffect(() => {
  }, [location]);
  return (
    <nav className='Navbar'>
      <Link to="/"><img className='nav-logo' src={notesvault} alt="notesvault" /></Link>
      
      <div className='uls-container'>
        {/* <div className='hamburger'>
        <ul className='ham-ul'>
          <li className='ham-li'></li>
          <li className='ham-li'></li>
          <li className='ham-li'></li>
        </ul>
        </div> */}

      <div className='ul-container'>
        {/* <ul className='nav-ul'>
            <li className='nav-li'><Link to="/about" className='a'>About</Link></li>
            <li className='nav-li'><Link to="/contact-us" className='a'>Contact us</Link></li>
        </ul> */}
        <hr />
        <ul className='nav-ul'>
          <li className='nav-li'><Link to="/login" className={`a ${location.pathname === "/login" ? "white": "" }`}>Log In</Link></li>
        <li className='nav-li'><Link to="/signup" className={`a ${location.pathname === "/signup" ? "white": "" }`}>Sign Up</Link></li>
        </ul>
        </div>
        </div>
      
    </nav>
  )
}

export default Navbar
