import React, { useState, useEffect } from "react";
import Header from "./Header";

import search from "../images/search.png";
import pro4 from "../images/roboside.png";
import supimg1 from "../images/support1.png";

import book1 from "../images/book1.png";
import book2 from "../images/book2.png";
import book3 from "../images/book3.png";

import logo from "../images/logo.png";
import insta from "../images/insta.png";
import linkedin from "../images/linkedin.png";
import twitter from "../images/twitter.png";
import youtube from "../images/youtube.png";
import ffsend from "../images/ffsee.png";

import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Support = () => {

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
      <section id="support-main-sec">
        <Header />

        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 className="h3-get">Get Support</h3>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-12" id="sup">
              <div className="back-support-search">
                <div class="search-container">
                  <input
                    type="text"
                    placeholder="Search what you are looking for"
                    className="search-inp"
                  />
                  <img src={search} alt="Search Icon" class="search-icon" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h3 className="h3-what">What are you looking for today?</h3>

              <div className="mainsupport-flex">
                <div className="support-book">
                  <img src={book1} />

                  <p className="p-user">User Manual (PDF)</p>
                </div>

                <div className="support-book">
                  <img src={book2} />

                  <p className="p-user">User Guide (PDF)</p>
                </div>

                <div className="support-book">
                  <img src={book3} />

                  <p className="p-user">Tim Tim Tutorial</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*======================== faqs section start from here ==================================*/}

        <section id="prosec7">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 faq-backks">
                <h6 className="h6faqs">Faqs</h6>

                <h4 className="h4looking">Looking for Answers?</h4>

                <div id="boot-back">
                  <div class="accordion" id="accordionPanelsStayOpenExample">
                    <div class="accordion-item">
                      <h2
                        class="accordion-header"
                        id="panelsStayOpen-headingOne"
                      >
                        <button
                          class="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#panelsStayOpen-collapseOne"
                          aria-expanded="true"
                          aria-controls="panelsStayOpen-collapseOne"
                        >
                          What is Artificial Intelligence?{" "}
                        </button>
                      </h2>
                      <div
                        id="panelsStayOpen-collapseOne"
                        class="accordion-collapse collapse show"
                        aria-labelledby="panelsStayOpen-headingOne"
                      >
                        <div class="accordion-body">
                          Vivamus sodales sollicitudin ullamcorper faucibus. Id
                          dictumst a natoque a. Metus vitae proin scelerisque
                          posuere nunc. Etiam id cras scelerisque in. Tellus
                          eget hendrerit imperdiet neque sed arcu in nisi.
                        </div>
                      </div>
                    </div>

                    <div className="colored-underline"> </div>

                    <div class="accordion-item">
                      <h2
                        class="accordion-header"
                        id="panelsStayOpen-headingTwo"
                      >
                        <button
                          style={{ backgroundColor: "black", color: "white" }}
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#panelsStayOpen-collapseTwo"
                          aria-expanded="false"
                          aria-controls="panelsStayOpen-collapseTwo"
                        >
                          What is robotic engineering?{" "}
                        </button>
                      </h2>
                      <div
                        id="panelsStayOpen-collapseTwo"
                        class="accordion-collapse collapse"
                        aria-labelledby="panelsStayOpen-headingTwo"
                      >
                        <div class="accordion-body">
                          Vivamus sodales sollicitudin ullamcorper faucibus. Id
                          dictumst a natoque a. Metus vitae proin scelerisque
                          posuere nunc. Etiam id cras scelerisque in. Tellus
                          eget hendrerit imperdiet neque sed arcu in nisi.
                        </div>
                      </div>
                    </div>

                    <div className="colored-underline"> </div>

                    <div class="accordion-item">
                      <h2
                        class="accordion-header"
                        id="panelsStayOpen-headingThree"
                      >
                        <button
                          style={{ backgroundColor: "black", color: "white" }}
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#panelsStayOpen-collapseThree"
                          aria-expanded="false"
                          aria-controls="panelsStayOpen-collapseThree"
                        >
                          How does AI intersect with robotic?{" "}
                        </button>
                      </h2>
                      <div
                        id="panelsStayOpen-collapseThree"
                        class="accordion-collapse collapse"
                        aria-labelledby="panelsStayOpen-headingThree"
                      >
                        <div class="accordion-body">
                          Vivamus sodales sollicitudin ullamcorper faucibus. Id
                          dictumst a natoque a. Metus vitae proin scelerisque
                          posuere nunc. Etiam id cras scelerisque in. Tellus
                          eget hendrerit imperdiet neque sed arcu in nisi.
                        </div>
                      </div>
                    </div>

                    <div className="colored-underline"> </div>

                    <div class="accordion-item">
                      <h2
                        class="accordion-header"
                        id="panelsStayOpen-headingfour"
                      >
                        <button
                          style={{ backgroundColor: "black", color: "white" }}
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#panelsStayOpen-collapseThree"
                          aria-expanded="false"
                          aria-controls="panelsStayOpen-collapseThree"
                        >
                          What are the applications of robotics?{" "}
                        </button>
                      </h2>
                      <div
                        id="panelsStayOpen-collapsefour"
                        class="accordion-collapse collapse"
                        aria-labelledby="panelsStayOpen-headingThree"
                      >
                        <div class="accordion-body">
                          Vivamus sodales sollicitudin ullamcorper faucibus. Id
                          dictumst a natoque a. Metus vitae proin scelerisque
                          posuere nunc. Etiam id cras scelerisque in. Tellus
                          eget hendrerit imperdiet neque sed arcu in nisi.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="box-center">
                  <div className="siderobo1">
                    <img className="proimg4" src={pro4} />

                    <h4 className="h4still">Still Have Questions?</h4>
                    <p className="ptincidunt">
                      Tincidunt nisi orci sodales non. Netus integer nunc mi
                      nibh cursus vitae ut nulla lobortis.
                    </p>
                    <div style={{ textAlign: "left" }}>
                    <a href="/contact">

                      <button className="btnpro5">CONTACT US</button>
                      </a>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*======================== faqs section end from here ==================================*/}

        <div className="container">
          <div className="row" id="supp-back">
            <div className="col-lg-6">
              <img className="supimg1" src={supimg1} />
            </div>

            <div className="col-lg-6">
              <h2 className="h2-coon">Contact Us</h2>

              <form onSubmit={handleSubmit} >


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
                <textarea className="inputfield1" 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write here" />
              </div>

              <div className="sup-btn-cen">
                <button type="submit" className="sup-btn">SEND MESSAGE</button>
              </div>

              </form>

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

export default Support;
