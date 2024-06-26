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
import logo2 from "../images/only-written.webp";
import iphone from "../images/iphone notesvault.webp";
import macbook from "../images/laptop version.webp";
import facepalming from "../images/man facepalming.png";
import check from "../images/checkok.png"
import { Helmet } from 'react-helmet-async';


const Home = () => {


  return (
    <>
      <Helmet>
        <title>NotesVault - Notes Make Easy</title>
        <meta name='description' content='Discover Notesvault' />
        <link rel="canonical" href="/" />
      </Helmet>
      <Navbar />
      <div className='home-container'>
        <span className='intro-section-notesvault'>
          <div className='intro-text-sec'>
            <h1 className='hi' >Hi There👋 <p>&</p></h1>
            <div className='head-intro'><h1>Welcome To </h1><img className='head-intro-img' fetchpriority="high" rel="preload" type="image/webp" as="image" src={logo2} alt="NotesVault Only Written Logo" /></div>
          </div>
          <div className='intro-img-sec'>
            <picture>
              <img className='macbook' fetchpriority="high" rel="preload" type="image/webp" as="image" src={macbook} alt="A macbook showing NotesVault Notes" loading='eager' />
            </picture>
            <picture>
              <img className='iphone' fetchpriority="high" as="image" type="image/webp" rel="preload" src={iphone} alt="an iPhone showing NotesVault Notes" loading='eager' />
            </picture>

          </div>
        </span>

        <p className='intro'>A one stop destination to save your Important Notes securely in the Cloud. <img fetchpriority="high" rel="preload" type="image/webp" as="image" src={check} alt="" /></p>
        <div className='flex justify-evenly flex-wrap my-7 w-[100%] Mobile:space-y-2'>
          <span className='flex items-center space-x-1'><svg height={"2rem"} xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" id="Approve"><path d="M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10s10-4.5,10-10C22,6.5,17.5,2,12,2z M16.2,10.3l-4.8,4.8c-0.4,0.4-1,0.4-1.4,0l0,0
	l-2.2-2.2c-0.4-0.4-0.4-1,0-1.4c0.4-0.4,1-0.4,1.4,0c0,0,0,0,0,0l1.5,1.5l4.1-4.1c0.4-0.4,1-0.4,1.4,0C16.6,9.3,16.6,9.9,16.2,10.3z
	" fill="#8ae595" className="color000000 svgShape"></path></svg><p>Easy to Use</p></span>
          <span className='flex items-center space-x-1'><svg height={"2rem"} xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" id="Approve"><path d="M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10s10-4.5,10-10C22,6.5,17.5,2,12,2z M16.2,10.3l-4.8,4.8c-0.4,0.4-1,0.4-1.4,0l0,0
	l-2.2-2.2c-0.4-0.4-0.4-1,0-1.4c0.4-0.4,1-0.4,1.4,0c0,0,0,0,0,0l1.5,1.5l4.1-4.1c0.4-0.4,1-0.4,1.4,0C16.6,9.3,16.6,9.9,16.2,10.3z
	" fill="#8ae595" className="color000000 svgShape"></path></svg><p>Data is Privately Secured on Cloud</p></span>
          <span className='flex items-center space-x-1'><svg height={"2rem"} xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" id="Approve"><path d="M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10s10-4.5,10-10C22,6.5,17.5,2,12,2z M16.2,10.3l-4.8,4.8c-0.4,0.4-1,0.4-1.4,0l0,0
	l-2.2-2.2c-0.4-0.4-0.4-1,0-1.4c0.4-0.4,1-0.4,1.4,0c0,0,0,0,0,0l1.5,1.5l4.1-4.1c0.4-0.4,1-0.4,1.4,0C16.6,9.3,16.6,9.9,16.2,10.3z
	" fill="#8ae595" className="color000000 svgShape"></path></svg><p>Better UI</p></span>
        </div>
        <ul className='buttons-home'>
          <Link className='buttons-home1' to="/login">Login</Link>
          <Link className='buttons-home2' to="/signup">Signup</Link>
        </ul>
      </div>
      <section className='review-section'>
        <h2 className='review-heading'>What the Cutiee Kids Has to say <img fetchpriority="medium" rel="preload" type="image/webp" as="image" src={check} alt="" /></h2>
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
        <img className='mt-24 w-40 h-40 select-none pointer-events-none -rotate-[7deg] Mobile:rotate-0' fetchpriority="high" rel="preload" type="image/webp" as="image" src={facepalming} alt="" draggable="false" />
        <span className='flex flex-col'>
          <h3>That's All for Now</h3>
          <h3 className='mt-0'>How much Proofs do you need!</h3>
        </span>
        <img className='man-right mt-24 w-40 h-40 select-none pointer-events-none rotate-[7deg]' fetchpriority="high" rel="preload" type="image/webp" as="image" src={facepalming} alt="" draggable="false" />
      </div>
      <Footer />
    </>

  )
}

export default Home


