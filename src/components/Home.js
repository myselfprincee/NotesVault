import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer';
import Reviews from "./Reviews";
import noah from "../images/review-images/noah.webp"
import shang from "../images/review-images/shang.webp"
import ava from "../images/review-images/ava.webp"
import liam from "../images/review-images/sad ash.webp"
import Olivia from "../images/review-images/daisy.webp"
import zach from "../images/review-images/zach.webp"
import lucas from "../images/review-images/lucas.webp"
import benjamin from "../images/review-images/kal-el aka superman icon_.webp"
import Charlotte from "../images/review-images/child goku.webp"
import Sam from "../images/review-images/sam.webp"
import daniel from "../images/review-images/ben.webp"
import kevin from "../images/review-images/kevin.webp"
import { HiCheckCircle } from 'react-icons/hi';
import { IconContext } from "react-icons";
import logo2 from "../images/only-written.webp";
import iphone from "../images/iphone notesvault.webp";
import macbook from "../images/laptop version.webp";
import facepalming from "../images/man facepalming.png";
import check from "../images/checkok.png"


const Home = () => {

  return (
    <>
      <Navbar />
      {/* <Alert/> */}
      <div className='home-container'>
        <span className='intro-section-notesvault'>
          <div className='intro-text-sec'>
            <h1 className='hi' >Hi There👋 <p>&</p></h1>
            <div className='head-intro'><h1>Welcome To </h1><img className='head-intro-img' src={logo2} alt="NotesVault Only Written Logo" /></div>
          </div>
          <div className='intro-img-sec'>
            <picture>
              <img className='macbook' rel="preload"  src={macbook} alt="A macbook showing NotesVault Notes" loading='eager' />
            </picture>
            <picture>
              <img className='iphone' rel="preload" src={iphone} alt="an iPhone showing NotesVault Notes" loading='eager' />
            </picture>

          </div>
        </span>

        <p className='intro'>A one stop destination to save your Important Notes securely in the Cloud. <img src={check} alt="" /></p>
        <div className='verified-spans'>
          <span className='span-qualities'><IconContext.Provider value={{ color: "#8ae595", size: "2rem", className: "check-icon" }}>
            <HiCheckCircle />
          </IconContext.Provider><p>Easy to Use</p></span>
          <span className='span-qualities'><IconContext.Provider value={{ color: "#8ae595", size: "2rem", className: "check-icon" }}>
            <HiCheckCircle />
          </IconContext.Provider><p>Data is Privately Secured on Cloud</p></span>
          <span className='span-qualities'><IconContext.Provider value={{ color: "#8ae595", size: "2rem", className: "check-icon" }}>
            <HiCheckCircle />
          </IconContext.Provider><p>Better UI</p></span>
        </div>
        <ul className='buttons-home'>
          <Link className='buttons-home1' to="/login">Login</Link>
          <Link className='buttons-home2' to="/signup">Signup</Link>
        </ul>
      </div>
      <section className='review-section'>
        <h2 className='review-heading'>What the Cutiee Kids Has to say <img src={check} alt="" /></h2>
        <div className='reviews-container'>
        <div className='card-section1' aria-hidden="true">
          <div className='card-section'>
            <Reviews name="Noah Williams" review="Great website, very simple to use" imagelink={noah} />
            <Reviews name="Ava Wilson" review="Simple UI which is less confusing" imagelink={ava} />
            <Reviews name="Shang Huang" review="I'll say that I just LOVE it so much" imagelink={shang} />
            <Reviews name="Liam Davis" review="Great website, very simple to use" imagelink={liam} />
            <Reviews name="Olivia Smith" review="Great website, very simple to use" imagelink={Olivia} />
            <Reviews name="Ethan Johnson" review="Great website, very simple to use" imagelink={zach} />
          </div>
          <div className='card-section'>
            <Reviews name="Noah Williams" review=" Great website, very simple to use " imagelink={noah} />
            <Reviews name="Ava Wilson" review="Simple UI which is less confusing" imagelink={ava} />
            <Reviews name="Shang Huang" review="I'll say that I LOVE it so much" imagelink={shang} />
            <Reviews name="Liam Davis" review=" Great website, very simple to use " imagelink={liam} />
            <Reviews name="Olivia Smith" review=" Great website, very simple to use " imagelink={Olivia} />
            <Reviews name="Ethan Johnson" review=" Great website, very simple to use " imagelink={zach} />
          </div>
        </div>
        <div className='card-section2-container'>
          <div className="class-section2">
            <Reviews name="Lucas Thompson" review=" Great website, very simple to use " imagelink={lucas} />
            <Reviews name="Benjamin Billings" review=" Great website, very simple to use " imagelink={benjamin} />
            <Reviews name="Charlotte Clark" review=" Great website, very simple to use " imagelink={Charlotte} />
            <Reviews name="Sam Miller" review=" Great website, very simple to use " imagelink={Sam} />
            <Reviews name="Daniel Carter" review=" Great website, very simple to use " imagelink={daniel} />
            <Reviews name="Matthew Sullivan" review=" Great website, very simple to use " imagelink={kevin} />
          </div>
          <div className="class-section2">
            <Reviews name="Lucas Thompson" review=" Great website, very simple to use " imagelink={lucas} />
            <Reviews name="Benjamin Billings" review=" Great website, very simple to use " imagelink={benjamin} />
            <Reviews name="Charlotte Clark" review=" Great website, very simple to use " imagelink={Charlotte} />
            <Reviews name="Sam Miller" review=" Great website, very simple to use " imagelink={Sam} />
            <Reviews name="Daniel Carter" review=" Great website, very simple to use " imagelink={daniel} />
            <Reviews name="Matthew Sullivan" review=" Great website, very simple to use " imagelink={kevin} />
          </div>
          </div>

        </div>
      </section>
      
      <div className='proofs-need'> 
        <img className='man-left' src={facepalming} alt="" draggable="false"  />
        <span className='h3s-of-proofs'>
          <h3 className='thatsall'>That's All for Now</h3>
          <h3 className='h3-proof'>How much Proofs do you need!</h3>
        </span>
        <img className='man-right' src={facepalming} alt="" draggable="false" />
      </div>
      <Footer />

    </>
  )
}

export default Home


