import React from 'react'

const Footer = () => {
  return (
    <footer className='footer-section' >
      <span >
        <div className='footer-cont'>
        <h3>Watch Our Socials</h3>
        <p>Instagram</p>
        <p>Discord</p>
        <p>Github</p>
        </div>
        <div className='hr'/>
        <div className='footer-cont'>
          <h3>Contact Me</h3>
          <p>princegupta@duck.com</p>
          <p>9871890758</p>
          <p>www.princegupta.dev</p>

        </div>
        <div className='last-footer-cont'>
        <div className='hr'/>
        <div className='footer-cont'>
        <h3>Watch Our Socials</h3>
        <p>Instagram</p>
        <p>Discord</p>
        <p>Github</p>
        </div>
        </div>
        

      </span>
      <div style={{display:"flex", alignItems:"center", justifyContent:"space-evenly"}}>
      <p className='copyright'>© www.notesvault.co | All Rights Reserved.</p>
      <p className='year'>2023</p>
      </div>
      
      
    </footer>
  )
}

export default Footer
