import React from 'react'
import img1 from "../images/img1.png";
import Header from "./Header";
import img2 from "../images/img2.png";
import auto1 from "../images/automate.png";
import vector from "../images/Vector.png";
import accuracy from "../images/accuracy.png";
import Slider1 from "./Slider1";
import logo from "../images/logo.png";
import insta from "../images/insta.png";
import linkedin from "../images/linkedin.png";
import twitter from "../images/twitter.png";
import youtube from "../images/youtube.png";
import ffsend from "../images/ffsee.png";
import Newsslider from './Newsslider';
import pdf1 from "../images/haprow1.pdf";


import gallery1 from "../images/G1.png"
import gallery2 from "../images/G2.png"
import gallery3 from "../images/G3.png"
import gallery4 from "../images/G6.png"

import Marquee, { Motion, randomIntFromInterval,Box } from "react-marquee-slider";
import times from "lodash/times";


const Home = () => {


  return (
    <>
      <section id="main-page">
        <Header />

        <section id="sec2">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <h6 className="aiboat">Inclusive - Innovative - Impactive
                </h6>

                <div className='changing'>
                  <h1>Robots Building
                  </h1>
                  <h1>
                    an Inclusive World
                  </h1>
                </div>

                <p className="leo">
                  Here technology meets compassion to empower individuals, inspire growth and strengthen communities.
                </p>

                <div id='discover'>
                <a
                    href={pdf1}
                    target="_blank"
        rel="noopener noreferrer"
     
      >
                  <button className="btn1" >DISCOVER MORE</button>
                  </a>

                </div>
              </div>

              <div className="col-lg-6">
                <img className="img1" src={img1} />
              </div>
            </div>
          </div>
        </section>



        <section id="sec3">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <img className="img2" src={img2} />
              </div>

              <div className="col-lg-6">
                <p className="aboutus">Our Flagship Robot

                </p>
                <h2 className="innovating">
                  Haprow’s TimTim: Your Autism Companion                </h2>

                <div className="sec2flex">
                  <div className="automate">
                    <div>
                      <img src={auto1} className="auto1" />
                    </div>

                    <div>
                      <h4 className="h4auto">Social Guide
                      </h4>
                      <p className="tincidunt">
                        TimTim recognizes faces and improves interactive learning with storytelling and practice of real-world scenarios.
                      </p>
                    </div>
                  </div>

                  <div className="automate" id='upper-top'>
                    <div>
                      <img src={vector} className="auto1" />
                    </div>

                    <div>
                      <h4 className="h4auto">Educational Mentor</h4>
                      <p className="tincidunt">
                        ncludes learning games, quizzes and Picture Exchange Communication for better understanding.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="sec2flex">
                  <div className="automate">
                    <div>
                      <img src={accuracy} className="auto1" />
                    </div>

                    <div>
                      <h4 className="h4auto">Emotional Support</h4>
                      <p className="tincidunt">
                        TimTim offers emotion regulation and expert-supervised therapeutic exercises for autism.
                      </p>
                    </div>
                  </div>

                  <div className="automate" id='upper-top'>
                    <div>
                      <img src={vector} className="auto1" />
                    </div>

                    <div>
                      <h4 className="h4auto">Entertainment Partner</h4>
                      <p className="tincidunt">
                        TimTim tells you poems and fun jokes, captures photos and videos, and walks around with you.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="sec4">
          <h5 className="our">OUR TESTIMONIAL</h5>
          <h3 className="Trusted">
            Trusted by <span className="threek"> 30k+ World Class </span>{" "}
            Companies
          </h3>

          <Slider1 />

          {/* ================================================= slider1 code start from here ============================= */}






          {/* ================================================= slider1 code start end here ============================= */}



        </section>

        <section id='news-sec5'>
          <Newsslider />

        </section>


        <section id="event-sec-3">





<div className="container-fluid" id="zereach">
        <div className="row">
          <div className="col-12" style={{ padding: "0px" }}>
        
          <h2 className='h2-showcase'>Showcase</h2>


            <div className="mainVideo" id='showcase-main'>
              <Marquee velocity={12} minScale={0.7}>
                {times(2, Number).map((id) => (
                  <div style={{}}>
                   

                   
<img src={gallery1} alt="gal1"/> 
<img src={gallery2} alt="gal1"/>   
<img src={gallery3} alt="gal1"/>   
<img src={gallery4} className="galleryimg22" alt="gal1"/>   



                    
                  </div>
                ))}
              </Marquee>
            </div>
          </div>
        </div>
      </div>








            </section>


        <div className="container" id='footer-res'>
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <img id="logo" src={logo} width={135} height={35} alt="" />

              <p className="copy">Copyright © 2023 Haprow.</p>
              <p className="all">All rights reserved</p>

              <div className="social">
                <a href="https://www.instagram.com/haprowrobotics?igsh=MW82cTdtdW8xcmN4bA==" target="_blank" rel="noopener noreferrer">

                  <img src={insta} alt="insta" />
                </a>

                <a href="https://twitter.com/haprowrobotics" target="_blank" rel="noopener noreferrer">

                  <img src={twitter} id='twitterr' alt="twitter" />
                </a>

                <a href="https://www.linkedin.com/company/haprowrobotics/" target="_blank" rel="noopener noreferrer">

                  <img src={youtube} id='twitterr' alt="youtube" />
                </a>

                <a href="https://www.linkedin.com/company/haprowrobotics/" target="_blank" rel="noopener noreferrer">

                  <img src={linkedin} id='twitterr' alt="linked" />
                </a>


              </div>
            </div>

            <div className="col-lg-2 col-sm-6" id="col1">
              <h2 className='com11'>Company</h2>
              <div className='main-about'>
                <a className='footabout' href='/about'>About us</a>

              </div>

              <div className='blog-main'>
                <a className='footabout' href='/blog'>Blog</a>

              </div>

              <div className='contact-main'>
                <a className='footabout' href='/contact'>Contact us</a>

              </div>

              <div className='test-main'>
                <a className='footabout' href='/about'>Testimonials</a>

              </div>

            </div>

            <div className="col-lg-2 col-sm-6" id="col2">
              <h2 className='res11'>Resources</h2>



              <div className='main-about'>
                <a className='footabout' href='/about'>Case Studies</a>

              </div>

              <div className='blog-main'>
                <a className='footabout' href='/blog'>Webinar</a>

              </div>

              <div className='contact-main'>
                <a className='footabout' href='/blog'>Documentation</a>

              </div>




            </div>

            <div className="col-lg-2 col-sm-6" id="col3">
              <h2 className='supp11'>Support</h2>

              <div className='main-about'>
                <a className='footabout' href='/contact'>Help Center</a>

              </div>

              <div className='blog-main'>
                <a className='footabout' href='/blog'>Terms of Services</a>

              </div>

              <div className='contact-main'>
                <a className='footabout' href='/about'>Privacy policy</a>

              </div>
            </div>

            <div className="col-lg-3 col-sm-6" id="col31">
              <h2 className='stay11'>Stay up to date</h2>

              <div class="custom-search-container1">

                <input className="input" class="custom-search-input1" placeholder="Your email address" />
                <img src={ffsend} alt="Search Icon" className="custom-search-icon1" />


              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
