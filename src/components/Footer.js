import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {

  const currentYear = new Date().getFullYear();

  return (
    <footer className='footer-section' >
      <span >
        <div className='footer-cont'>
          <h3>Watch Our Socials</h3>
          <p>Instagram</p>
          <p>Discord</p>
          <p>Github</p>
        </div>
        <div className='hr' />
        <div className='footer-cont'>
          <h3>Contact Me</h3>
          <Link to={"mailto:https://blogs.princegupta.me"} target='_blank' className='footer-Links'><p>princegupta@duck.com</p></Link>
          <Link to={"tel:9871890758"} target='_blank' className='footer-Links'><p>9871890758</p></Link>
          <Link to={"https://blogs.princegupta.me"} target='_blank' className='footer-Links'>www.princegupta.me</Link>

        </div>
        <div className='last-footer-cont'>
          <div className='hr' />
          <div className='footer-cont'>
            <h3>Watch Our Socials</h3>
            <p>Instagram</p>
            <p>Discord</p>
            <p>Github</p>
          </div>
        </div>


      </span>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-evenly" }}>
        <p className='copyright'>© Notesvault  |  All Rights Reserved.</p>
        <p className='year'>{currentYear}</p>
      </div>


    </footer>
  )
}

export default Footer
