import React, { useRef } from 'react'
import Navbar from "./Navbar";
import Phone from './Phone';
import emailjs, { send } from '@emailjs/browser';
import Footer from "./Footer"


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    // e.target.reset();
     

    emailjs.sendForm('service_0dzjl6f', 'template_0kb3wuw', form.current, 'BCOozeQzabtoQU0BB')
      .then((result) => {
        alert("Your Message has been sent. I will get back to you as soon as possible.");
        form.current.reset();
      }, (error) => {
        alert(error.text);
      });
  };
  return (


    <>
      <Navbar />
      <div className='contact-page'>
        <h3 className='wanna-talk'>Wanna talk or Just Wanna give FeedBack.
          <div className='fill-form-cont'>
            <p className='fill-form'>Fill the form &rarr;</p>
          </div>
          <div className='contact-w-buttons' style={{ display: "flex", width: "100%", alignItems: "center", justifyContent: "space-around" }}>
            <a className='send-email' href='mailto:prince.kumar01129@gmail.com?subject=Lets work together!&body=Hello Prince,%0AMy name is {ENTER YOUR NAME}. I am a {DESIGNATION} working in {COMPANY}. I have reached to ask you to work on/collaborate on our Website. Reach Out as soon as you can. ' target='_blank' rel='noreferrer'>Send me an Email</a>
            <a className='send-email' style={{ width: "30%" }} href='tel:+91-9871890758'>Call Me</a>
          </div>
        </h3>
        <form className='form-contact' ref={form} onSubmit={sendEmail}>
          <div className='form-container-2'>
            <h3 style={{ display: "flex", justifyContent: "center", alignItems: "center", fontFamily: "Melody-md", fontWeight: "500", fontSize: "28px" }}>Contact Me ❤️</h3>
            <span className='name-container'>
              <div className='input-container'>
                <input type="text" placeholder="Enter your First Name" name="from_name" className='username-input first-name' autoComplete="off" required />
                <label htmlFor="username" className="labelname">First Name</label>
              </div>
              <div className='input-container'>
                <input type="text" placeholder="Enter your Last Name" name='user_lastname' className='username-input last-name' autoComplete="off" required />
                <label htmlFor="username" className="labelname">Last Name</label>
              </div>
            </span>
            <div className='input-container email-container'>
              <input type="email" placeholder="Enter your Email Address" name="user_email" className='username-input email-address' autoComplete="off" required />
              <label htmlFor="username" className="labelname">Email Address</label>
            </div>
            <div className='phone-container'>
              <Phone name="user_country" />
              <div className='input-container'>
                <input type="tel" placeholder="Enter your Phone" className='username-input' name='user_phone' autoComplete="off" required />
                <label htmlFor="username" className="labelname">Phone Number</label>
              </div>
            </div>

            <div className='input-container textarea-container'>
              <textarea type="text" placeholder="Enter your messege" className='username-input messege' name='user_messege' autoComplete="off" cols={10} rows={5} />
              <label htmlFor="username" className="labelname">Messege</label>
            </div>
          </div>

          <input type="submit" className='form2-submit' value={send && "Submit"} />
        </form>

      </div>
      <Footer />
    </>
  )
}

export default Contact
