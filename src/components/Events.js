import React from "react";
import Header from "./Header";
import Marquee, { Motion, randomIntFromInterval,Box } from "react-marquee-slider";
import times from "lodash/times";

import event1 from "../images/event1.png";
import eventimg2 from "../images/eventimg2.png";
import eventimg3 from "../images/Avatar.png";
import eventimg4 from "../images/event4.png";
import eventimg5 from "../images/eventimg5.png";
import eventimg6 from "../images/eventimg6.png";
import eventimg7 from "../images/eventimg7.png";


import gallery1 from "../images/G1.png"
import gallery2 from "../images/G2.png"
import gallery3 from "../images/G3.png"
import gallery4 from "../images/G6.png"





import logo from "../images/logo.png";
import insta from "../images/insta.png";
import linkedin from "../images/linkedin.png";
import twitter from "../images/twitter.png";
import youtube from "../images/youtube.png";
import ffsend from "../images/ffsee.png";

import Teamslider1 from "./Teamslider1";

const Events = () => {
  return (
    <>
      <section id="main-event-sect">
        <Header />

        <section id="event-sec-1">
          <div className="event-img-1">
            <img src={event1} className="event-img-1" />
            <div className="container">
              <div className="row">
                <div className="col-lg-6 top-top">
                  <h1 className="h1-eevent">Event Schedule</h1>

                  <p className="p-vivamus">
                    Vivamus sodales sollicitudin ullamcorper faucibus. Id
                    dictumst a natoque a. Metus vitae proin scelerisque posuere
                    nunc. Etiam id cras scelerisque in. Tellus eget hendrerit
                    imperdiet neque sed arcu in nisi.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>



        <section id="event-sec-hide1">
            {/* <img src={event1} className="event-img-1" /> */}
            <div className="container">
              <div className="row">
                <div className="col-lg-6 top-top">
                  <h1 className="h1-eevent">Event Schedule</h1>

                  <p className="p-vivamus">
                    Vivamus sodales sollicitudin ullamcorper faucibus. Id
                    dictumst a natoque a. Metus vitae proin scelerisque posuere
                    nunc. Etiam id cras scelerisque in. Tellus eget hendrerit
                    imperdiet neque sed arcu in nisi.
                  </p>
                </div>
            </div>
          </div>
        </section>





        <section id="event-sec-2">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <h2 className="h2-first">First Event</h2>
                <p className="p-lorrem">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
                </p>

                <h2 className="day-1">Day 1 - Sept 17 2023</h2>

                <p className="lloremm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
                </p>

                <button className="btn-event-1">LEARN MORE</button>
              </div>

              <div className="col-lg-6">
                <div className="event-flex">
                  <div>
                    <img src={eventimg2} />
                    <p className="p-9">9.30 - 10.30 AM</p>
                  </div>

                  <div>
                    <h4 className="h4-steategy">Strategy and Research</h4>
                    <p className="pp-1">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>

                    <div className="d-flex">
                      <div>
                        <img className="eventimg3" src={eventimg3} />
                      </div>

                      <div>
                        <h6 className="h6-nathan">Nathan Stark</h6>
                        <p className="p-ux">UX Lead at Facebook</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="event-flex" id="event-gap">
                  <div>
                    <img src={eventimg4} />
                    <p className="p-9">9.30 - 10.30 AM</p>
                  </div>

                  <div>
                    <h4 className="h4-steategy">Strategy and Research</h4>
                    <p className="pp-1">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>

                    <div className="d-flex">
                      <div>
                        <img className="eventimg3" src={eventimg6} />
                      </div>

                      <div>
                        <h6 className="h6-nathan">Nathan Stark</h6>
                        <p className="p-ux">UX Lead at Facebook</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="event-flex" id="event-gap1">
                  <div>
                    <img src={eventimg5} />
                    <p className="p-9">9.30 - 10.30 AM</p>
                  </div>

                  <div>
                    <h4 className="h4-steategy">Strategy and Research</h4>
                    <p className="pp-1">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>

                    <div className="d-flex">
                      <div>
                        <img className="eventimg3" src={eventimg7} />
                      </div>

                      <div>
                        <h6 className="h6-nathan">Nathan Stark</h6>
                        <p className="p-ux">UX Lead at Facebook</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>




        <section id="event-sec-3">





<div className="container-fluid" id="zereach">
        <div className="row">
          <div className="col-12" style={{ padding: "0px" }}>
            <div className="mainVideo" style={{}}>
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




            <section id="event-sec-4">

<div className="container">
    <div className="row">
        <div className="col-lg-6">

            <h1 className="h1-last">Last Event Gallery</h1>

        </div>


        <div className="col-lg-6">

<p className="eventpara-last">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
</div>

    </div>

</div>


            </section>

            <section id="event-sec-5">


                

<Teamslider1/>

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

export default Events;
