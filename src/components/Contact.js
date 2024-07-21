import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

import Header from "./Header";

import logo from "../images/logo.png";

import cont1 from "../images/time.png";
import cont2 from "../images/map-pin.png";
import cont3 from "../images/briefcase.png";
import cont4 from "../images/phone.png";

import insta from "../images/insta.png";
import linkedin from "../images/linkedin.png";
import twitter from "../images/twitter.png";
import youtube from "../images/youtube.png";
import ffsend from "../images/ffsee.png";

import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Contact = () => {

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");


  // function of sending email data
  const handleSubmit = async (e) => {
      e.preventDefault();
      console.log("Form submitted with email:", email, "and message:", message, "name:", name);


      try {
          const res = await axios.post("http://localhost:5000/email-data", {name, email, message });
          console.log(res);
          toast.error("Email Send Successfully!");

          window.location.reload(); // This will refresh the page

      } catch (error) {
          console.log(error);
          toast.error("Something Went Wrong in Input Form");
      }
  };


  return (
    <>
      <section id="contpage">
        <Header />

        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h5 className="h5con">CONTACT US</h5>

              <h2 className="h2get">
                Get in Touch with Our<br></br> haprow Office
              </h2>

              <div className="two-div">
                <div className="time-display">
                  <div id="ziet-res">
                    <img src={cont1} />
                  </div>

                  <div className="office-hr">
                    <h5>Office Hours</h5>
                    <p>Monday-Friday</p>
                    <p>8:00 am to 5:00 pm</p>
                  </div>
                </div>

                <div className="time-display" id="set-loc">
                  <div id="ziet-res">
                    <img src={cont2} />
                  </div>

                  <div className="office-hr">
                    <h5>Our Address</h5>
                    <p>46-K Street 46</p>
                    <p>Block 6 PECHS</p>
                  </div>
                </div>
              </div>

              <div className="two-div1">
                <div className="time-display">
                  <div id="ziet-res">
                    <img src={cont3} />
                  </div>

                  <div className="office-hr">
                    <h5>Mail Us</h5>
                    <p>contact@haprow.com</p>
                  </div>
                </div>

                <div className="time-display" id="left-one">
                  <div id="ziet-res">
                    <img className="cont4" src={cont4} />
                  </div>

                  <div className="office-hr">
                    <h5>Call Us</h5>
                    <p>+92 346 1013395</p>
                  </div>
                </div>
              </div>

              <h2 className="follow">FOLLOW Our SOCIALS </h2>

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

            <div className="col-lg-6 center">

            <form onSubmit={handleSubmit} >

              
              <div className="back-color">
                <div className="adjust-name">
                  <label>Full Name</label>
                </div>

                <div>
                  <input
                    className="inputfield"
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>

                <div className="adjust-name">
                  <label>Email Address</label>
                </div>

                <div>
                  <input
                    className="inputfield"
                    type="text"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="adjust-name">
                  <label>Your Message</label>
                </div>

                <div>
                  <textarea className="inputfield1" placeholder="Write here" 
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  />
                </div>


                <div className="sup-btn-cen">
                <button type="submit" className="sup-btn">SEND MESSAGE</button>
              </div>


              </div>

              </form>




            </div>
          </div>
        </div>

        <div className="container" id="consec3">
          <div className="row">
            <div className="col-12">
              <h1 className="h1we">We are located here</h1>
            </div>
          </div>
        </div>

        <div className="container" id="seccont">
          <div className="row">
            <div className="col-12">
              <div className="gmap_canvas">
                <iframe
                  id="map"
                  class="gmap_iframe"
                  width="100%"
                  frameborder="0"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"
                  src="https://maps.google.com/maps?width=650&amp;height=850&amp;hl=en&amp;q=haprow robotics pvt ltd. 46-k block 6&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

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

export default Contact;
