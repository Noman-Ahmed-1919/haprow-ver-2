import React from "react";
import orderimg1 from "../images/ordimg1.png";
import orderimg2 from "../images/star.png";

import logo from "../images/logo.png";
import insta from "../images/insta.png";
import linkedin from "../images/linkedin.png";
import twitter from "../images/twitter.png";
import youtube from "../images/youtube.png";
import ffsend from "../images/ffsee.png";


import { NavLink } from "react-router-dom";

import Header from "./Header";

const Order = () => {
  return (
    <>
      <section id="main-sec-order">
        <Header />

        <div className="container">
          <div className="row">
            <div className="col-lg-8" id="order-top">
              <img src={orderimg1} className="orderimg1" />
            </div>

            <div className="col-lg-4" id="order-top">
              <h6 className="h6-robot">Robot</h6>
              <h2 className="h2-tim-tim">Tim Tim Ai Robot</h2>
              <img src={orderimg2} className="orderimg2" />
              <p className="p-thearu">
                The argument in favor of use filler text goes something like
                this you use real content a design process an time you reach
                review point you end up review an negotiating a content itself
                and the design inevitable argumentation.
              </p>

              <h2 className="h2-color">Color:</h2>

              <h2 className="h2-color">$69.00</h2>

              <div className="order-btns">
                <div>
                  <button className="order-btn1">1</button>
                </div>

                <div>
                  <NavLink to="/order2" className="" href="#">
                    <button className="order-btn2">ADD TO CART</button>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="order-three-btn">
                <div>
                  <button className="btn-ord-3">Description</button>
                </div>

                <div>
                  <button className="btn-ord-4">Additional Information</button>
                </div>

                <div>
                  <button className="btn-ord-5">Reviews (3)</button>
                </div>
              </div>

              <h2 className="description">Description:</h2>

              <p className="p-autism">
                Autism Spectrum Disorder (ASD) is a complex neurodevelopmental
                condition that affects millions of people worldwide. It is
                characterized by a range of challenges related to communication,
                social interaction, and repetitive behaviors.For individuals
                with autism and their caregivers, navigating these challenges
                can be both rewarding and demanding.
              </p>
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

                <a href="https://www.linkedin.com/company/haprowrobotics/" target="_blank" rel="noopener noreferrer">

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

export default Order;
