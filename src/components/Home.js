import React from 'react'
import Navbar from './Navbar'
import { HiCheckCircle } from 'react-icons/hi'
import { IconContext } from "react-icons";
import { Link } from 'react-router-dom'
import Alert from './Alert';

const Home = () => {
  return (
    <div>
      <Navbar />
      {/* <Alert/> */}
      <div className='home-container'>
        <h1>Hi There</h1>
        <h2>Welcome to NotesVault</h2>
        <p className='intro'>A one stop destination to save your Important Notes securely in the Cloud.</p>

        <div className='verified-spans'>
          <span className='span-qualities'><IconContext.Provider value={{ color: "#8ae595", size: "2rem",className:"check-icon" }}>
            <HiCheckCircle />
          </IconContext.Provider><p>Easy to Use</p></span>
          <span className='span-qualities'><IconContext.Provider value={{ color: "#8ae595", size: "2rem",className:"check-icon" }}>
            <HiCheckCircle />
          </IconContext.Provider><p>Better UI</p></span>
          <span className='span-qualities'><IconContext.Provider value={{ color: "#8ae595", size: "2rem",className:"check-icon" }}>
            <HiCheckCircle />
          </IconContext.Provider><p>Data is Privately Secured on Cloud</p></span>
        </div>
        <ul className='nav-ul btn-container'>
          <li className='nav-li login-container'><Link to="/login" className='a login'>Log In</Link></li>
          <li className='nav-li signup-container'><Link to="/signup" className='a signup'>Sign Up</Link></li>
        </ul>
      </div>

    </div>
  )
}

export default Home


