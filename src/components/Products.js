import React from "react";
import Header from "./Header";
import pro1 from "../images/timboat.png";
import pro2 from "../images/prorobo2.png";
import pro3 from "../images/pro3.png";
import pro4 from "../images/roboside.png";
import logo from "../images/logo.png";
import insta from "../images/insta.png";
import linkedin from "../images/linkedin.png";
import twitter from "../images/twitter.png";
import youtube from "../images/youtube.png";
import ffsend from "../images/ffsee.png";
import ReactPlayer from 'react-player';

import { Modal, Button } from "react-bootstrap";

import aboutimg1 from "../images/aboutauto.png";
import aboutimg2 from "../images/aboutvector.png";
import aboutimg3 from "../images/arroww.png";

import gallery1 from "../images/gallery1.png";
import gallery2 from "../images/gallery2.png";
import gallery3 from "../images/gallery3.png";

import video from "../images/video.png";
import Footer from "./Footer";

const Products = () => {
  return (
    <>
      <section id="proback">
        <Header />

        <div>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h5 className="usapro">OUR PRODUCTS</h5>
                <h2 className="inno">Robots for The Real World</h2>
                <p className="inage">
                  Tincidunt duis suspendisse euismod integer aenean. Suspendisse
                  aliquet diam ut<br></br> vulputate eu metus nulla facilisi.
                  Tristique tincidunt nisi.
                </p>
              </div>
            </div>
          </div>

          <div className="container" id="prosec2">
            <div className="row">
              <div className="col-md-6" id="modalback">
                <h6 className="h6modal">Model Tim Tim</h6>
                <h4 className="h4tim">TimTim Bot </h4>
                <p className="pthe">
                  The argument in favor of use filler text goes<br></br>{" "}
                  something like this you use real content a design<br></br>{" "}
                  process an time you reach review point you end<br></br> up
                  review an negotiating a content itself and the<br></br> design
                  inevitable argumentation.
                </p>
                <div className="probtn">
                <a href="/blog">

                <button className="btnpro1">LEARN MORE</button>
                </a>

               
                </div>
              </div>

              <div className="col-md-6" style={{ padding: "0px" }}>
                <img className="pro1img" src={pro1} />
              </div>
            </div>
          </div>

          <section id="prosec3">
            <div className="container">
              <div className="row">
                <div className="col-lg-4">
                  {/* <div id="flex-all"> */}

                  <div className="autoback">
                    <div className="aboutautomate">
                      <div>
                        <img className="aboutimg1" src={aboutimg1} alt="" />
                      </div>

                      <div>
                        <h4 className="h4autom">Automation</h4>
                      </div>
                    </div>

                    <div>
                      <p className="tinciduntabout">
                        Tincidunt nisi orci sodales non. Netus integer nunc mi
                        nibh cursus vitae ut nulla lobortis. Risus duis
                        bibendum.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="autoback">
                    <div className="aboutautomate">
                      <div>
                        <img className="aboutimg1" src={aboutimg2} alt="" />
                      </div>

                      <div>
                        <h4 className="h4autom">Precision</h4>
                      </div>
                    </div>

                    <div>
                      <p className="tinciduntabout">
                        Tincidunt nisi orci sodales non. Netus integer nunc mi
                        nibh cursus vitae ut nulla lobortis. Risus duis
                        bibendum.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="autoback">
                    <div className="aboutautomate">
                      <div>
                        <img className="aboutimg1" src={aboutimg3} alt="" />
                      </div>

                      <div>
                        <h4 className="h4autom">Accuracy</h4>
                      </div>
                    </div>

                    <div>
                      <p className="tinciduntabout">
                        Tincidunt nisi orci sodales non. Netus integer nunc mi
                        nibh cursus vitae ut nulla lobortis. Risus duis
                        bibendum.
                      </p>
                    </div>
                  </div>
                </div>

                {/* </div> */}
              </div>
            </div>
          </section>

          <section id="prosec4">
            <div className="container proinfo">
              <div className="row">
                <div className="col-12 ">
                  <h1 className="h1proinfo">Product Information</h1>
                  <p className="pourrobo">
                    Our Robot has following unique design and technology
                    features:
                  </p>
                </div>

                <div className="col-lg-6">
                  <img className="pro222" src={pro2} />
                </div>

                <div className="col-lg-6" id="iconpro">
                  <div className="checkmate" >
                    <div>
                      <img src={pro3} />
                    </div>

                    <div>
                      <h4 className="h4light1">Social guide
                      </h4>
                    </div>
                  </div>

                  <div className="checkmate" >
                    <div className="pro3icon">
                      <img src={pro3} />
                    </div>

                    <div>
                      <h4 className="h4light">Educational mentor</h4>
                    </div>
                  </div>

                  <div className="checkmate" >
                    <div className="pro3icon">
                      <img src={pro3} />
                    </div>

                    <div>
                      <h4 className="h4light">Emotional support</h4>
                    </div>
                  </div>

                  <div className="checkmate" >
                    <div className="pro3icon">
                      <img src={pro3} />
                    </div>

                    <div>
                      <h4 className="h4light">Entertainment partner</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="prosec5">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <h4 className="h4gallery">Gallery</h4>
                  <p className="pview">
                    View gallery of our products and make yourself satisfied
                    with our creation.
                  </p>
                </div>

                <div className="col-lg-6" id="gallerysec1">
                  <img className="gallery1" src={gallery1} />
                </div>

                <div className="col-lg-6" id="gallerysec1">
                  <img className="gallery2" src={gallery2} />
                </div>

                <div className="col-lg-6" id="gallerysec11">
                  <div style={{ textAlign: "center" }}>
                    <button className="probtn2">Battery Images</button>
                  </div>

                  <div style={{ textAlign: "center" }}>
                    <button className="probtn3">Spare Parts Images</button>
                  </div>

                  <div style={{ textAlign: "center" }}>
                    <button className="probtn4">Charging Cable Images</button>
                  </div>
                </div>

                <div className="col-lg-6" id="gallerysec11">
                  <img className="gallery3" src={gallery3} />
                </div>
              </div>
            </div>
          </section>

          <section id="prosec6">
            <div className="container-fluid" id="videofix">
              <div className="row">
                <div className="col-12" id="video-product">
                <ReactPlayer url="https://youtu.be/JtTBmh5ioS4?si=lhRIJVc2h4zvHGMR" controls
                width="100%"
                height="100%" />

                      </div>
              </div>
            </div>
          </section>

          <section id="prosec7">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
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
                            Vivamus sodales sollicitudin ullamcorper faucibus.
                            Id dictumst a natoque a. Metus vitae proin
                            scelerisque posuere nunc. Etiam id cras scelerisque
                            in. Tellus eget hendrerit imperdiet neque sed arcu
                            in nisi.
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
                            Vivamus sodales sollicitudin ullamcorper faucibus.
                            Id dictumst a natoque a. Metus vitae proin
                            scelerisque posuere nunc. Etiam id cras scelerisque
                            in. Tellus eget hendrerit imperdiet neque sed arcu
                            in nisi.
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
                            Vivamus sodales sollicitudin ullamcorper faucibus.
                            Id dictumst a natoque a. Metus vitae proin
                            scelerisque posuere nunc. Etiam id cras scelerisque
                            in. Tellus eget hendrerit imperdiet neque sed arcu
                            in nisi.
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
                            Vivamus sodales sollicitudin ullamcorper faucibus.
                            Id dictumst a natoque a. Metus vitae proin
                            scelerisque posuere nunc. Etiam id cras scelerisque
                            in. Tellus eget hendrerit imperdiet neque sed arcu
                            in nisi.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="box-center">
                    <div className="siderobo">
                      <img className="proimg4" src={pro4} />

                      <h4 className="h4still">Still Have Questions?</h4>
                      <p className="ptincidunt">
                        Tincidunt nisi orci sodales non. Netus integer nunc mi
                        nibh cursus vitae ut nulla lobortis.
                      </p>
                      <div style={{ textAlign: "left" }}>
                        <a href="/contact">
                        <button className="btnpro5">
                        CONTACT US</button>
                        </a>
                      </div>
                    </div>
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
        </div>
      </section>
    </>
  );
};

export default Products;
