import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import creator from "../images/myimage.jpg"
import { Helmet } from 'react-helmet-async'

export default function About() {
  return (
    <>
    <Helmet>
      <title>About The Creator - Notesvault</title>
      <meta name='description' content='About the Maker of The Notesvault' />
      <link rel="canonical" href="/about" />
    </Helmet>
      <Navbar />
      <div className='About-container'>
          <h2 className='Aboutme-heading'>About Me </h2>
        <div className='para-img-cont'>
          <p  className='about-text'>
            <p>Welcome to NotesVault!</p>
            <p>At NotesVault, we believe that knowledge is power. Our mission is to provide you with a secure and reliable platform to store, organize, and access your valuable notes effortlessly. Whether you're a student, professional, or simply someone who loves to learn, NotesVault is your trusted companion on your journey of knowledge discovery.</p>
            <p>With NotesVault, you can bid farewell to scattered notes, messy notebooks, and the frustration of searching for information. Our intuitive interface and robust features empower you to create, edit, and manage your notes with ease. No more wasting time flipping through pages or scrolling through endless documents - everything you need is just a click away.</p>
            <p>Your privacy and security are our utmost priorities. Rest assured, your notes are encrypted and stored securely, safeguarding your valuable intellectual property. With NotesVault, you can focus on capturing your ideas, insights, and inspirations without worrying about unauthorized access or data loss.</p>
          </p>
        <img className='about-img' src={creator} width={"400px"} height={"350px"} alt="" />
        </div>
        <h2 className='end-greet'>Thank so much for visiting my Website</h2>
        <p></p>
      </div>
      <Footer />
    </>
  )
}