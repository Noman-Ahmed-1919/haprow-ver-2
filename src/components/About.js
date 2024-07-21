import React, {useState, useEffect} from "react";
import $ from 'jquery';

import Header from "./Header";
import aboutimg1 from "../images/aboutauto.png";
import aboutimg2 from "../images/aboutvector.png";
import aboutimg3 from "../images/arroww.png";
import aboutimg4 from "../images/abouttim2.png";
import aboutimg5 from "../images/sicon.png";
import aboutimg6 from "../images/frame1.png";
import aboutimg7 from "../images/image-box.png";
import logo from "../images/logo.png";
import insta from "../images/insta.png";
import linkedin from "../images/linkedin.png";
import twitter from "../images/twitter.png";
import youtube from "../images/youtube.png";
import ffsend from "../images/ffsee.png";


import Teamslider from "./Teamslider";

const About = () => {


  useEffect(()=>{
    window.scrollTo(0, 0);
},[])


var [project,setproject] =useState(+ 0)
var [customer,setcustomer] =useState(+ 0)
var [developer,setdeveloper] =useState(+ 0)
var [clientCount,setClientCount] =useState(+ 0)


useEffect(()=>{
    // Projects()
    
    CounterAnimate()
   },[])

   function CounterAnimate() {
            
    // Function which adds the 'animated' class to any '.animatable' in view
    var doAnimations = function() {
    "use strict";
      
        // Calc current offset and get all animatables
        var offset = $(window).scrollTop() + $(window).height(),
            $counterSec = $('.counterSec');
        
        // Unbind scroll handler if we have no counterSec
        if ($counterSec.length == 0) {
          $(window).off('scroll', doAnimations);
        }
        
        // Check all counterSec and animate them if necessary
            $counterSec.each(function(i) {
           var $counterS = $(this);
                if (($counterS.offset().top + $counterS.height() - 100) < offset) {
                $counterS.removeClass('counterSec').addClass('counterOn');
                console.log(offset);
                handleCounter()
                handleCustomersData()
                }
                 
        });
    
        };
      
      // Hook doAnimations on scroll, and trigger a scroll
        $(window).on('scroll', doAnimations);
      $(window).trigger('scroll');
  
  }


  
  const handleCounter =() =>{
       
      
    var startproject=project
    var endproject= + 15;
    var startCustomer=customer
    var endCustomer= + 1800;
    var startDeveloper=developer
    var endDeveloper= + 3500;
    var startClient=clientCount
    var endClient= 98 ;

    var projectCounting = setInterval(function(){
        if(startproject < endproject) {
            startproject++
        } else {
            clearInterval(projectCounting)
        }
        console.log(startproject);
        setproject(startproject)
    }, 100);

    var developerCounting = setInterval(function(){
        if(startDeveloper < endDeveloper) {
          startDeveloper++
        } else {
            clearInterval(developerCounting)
        }
        console.log(startDeveloper);
        setdeveloper(startDeveloper)
    }, 1);

    var clientCounting = setInterval(function(){
        if(startClient < endClient) {
          startClient++
        } else {
            clearInterval(clientCounting)
        }
        console.log(startClient);
        setClientCount(startClient)
    }, 100);
  }




  const handleCustomersData =() =>{
    var startCustomer=customer
    var endCustomer= 1800;

    var customerCounting = setInterval(function(){
      if(startCustomer < endCustomer) {
        startCustomer++
      } else {
          clearInterval(customerCounting)
      }
      console.log(startCustomer);
      setcustomer(startCustomer)
  }, 5);
  }



  return (
    <>

      <section id="aboutsec1">

      <Header />

        <div className="container" id="aboutme">
          <div className="row">
            <div className="col-12">
              <h5 className="usabout">ABOUT US</h5>
              <h2 className="inno">
                Innovating the Future with<br></br> AI and Robotics
              </h2>
              <p className="inage">
                In the age of technological marvels, "Haprow" stands as a
                shining testament to the rapid progress of robotics.
                Combining cutting-edge engineering with AI sophistication,
                Haprow emerges as a symbol of the future, where
                machinery seamlessly integrates with human lives.
              </p>
            </div>
          </div>
        </div>

        <div className="container" id="aboutsec2">
          <div className="row">
            <div className="col-lg-4">
              {/* <div id="flex-all"> */}

              <div className="autoback">
                <div className="aboutautomate">
                  <div>
                    <img className="aboutimg1" src={aboutimg1} alt="" />
                  </div>

                  <div>
                    <h4 className="h4autom">Empowerment
                    </h4>
                  </div>
                </div>

                <div>
                  <p className="tinciduntabout">
                  We aim to stimulate cognitive development by engaging your child in problem-solving, critical thinking, and decision-making activities.
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
                    <h4 className="h4autom">Healthcare Experts</h4>
                  </div>
                </div>

                <div>
                  <p className="tinciduntabout">
                  We’ve on board the best healthcare experts to ensure the autism therapy our robots provide is effective and customized for each child.


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
                    <h4 className="h4autom">Adaptability</h4>
                  </div>
                </div>

                <div>
                  <p className="tinciduntabout">
                  Our robots adapt to your child’s unique way of learning, creating a happy and growing space just for them.
                  </p>
                </div>
              </div>
            </div>

            {/* </div> */}
          </div>
        </div>

        <section id="aboutsec3">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h6 className="vision">Vision & Mission</h6>
                <h4 className="shapp">
                Humanizing AI <br></br>
Enriching Lives
                </h4>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <img className="aboutimg4" src={aboutimg4} />
              </div>

              <div className="col-lg-6">
                <h4 className="h4our">Our Vision</h4>

                <div className="colored-underline"> </div>

                <p className="top">
                We envision a world where every individual, regardless of their abilities, can flourish, where technology and compassion unite to nurture a society that values inclusivity and celebrates diversity.
                </p>

                <h4 className="mission">Our Mission</h4>

                <div className="colored-underline"> </div>

                <div id="flex-icons">
                  <div>
                    <img src={aboutimg5} />
                  </div>

                  <div style={{ marginLeft: "20px" }}>
                    <h5 className="h5develop">
                    Fostering a Community
                    </h5>
                    <p className="suspen">
                    To build a compassionate and inclusive society by raising awareness about autism and create a supportive community through interactions.
                    </p>
                  </div>
                </div>

                <div id="flex-icons">
                  <div>
                    <img src={aboutimg5} />
                  </div>

                  <div style={{ marginLeft: "20px" }}>
                    <h5 className="h5develop">
                    Cultural Attenuation
                    </h5>
                    <p className="suspen">
                    To prioritize cultural sensitivity, ensuring our solutions resonate with local nuances and values, fostering a sense of comfort and belonging.
                    </p>
                  </div>
                </div>

                <div id="flex-icons">
                  <div>
                    <img src={aboutimg5} />
                  </div>

                  <div style={{ marginLeft: "20px" }}>
                    <h5 className="h5develop">
                    Empowering Autistic Individuals
                    </h5>
                    <p className="suspen">
                    To empower autistic individuals by overcoming the challenges they face while understanding, interacting with people and expressing themselves.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        <Teamslider/>


        <section id="aboutsec4">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <h6 className="journey">Our JOURNEY</h6>
                <h4 className="ways">How TimTim was Born</h4>

                <div className="about-flex1">
                  <div>
                    <img className="aboutimg6" src={aboutimg6} />
                  </div>

                  <div>
                    <p className="research1">
                    Research & Design - We collaborated with healthcare professionals to understand autistic children's needs, guiding the creation of culturally sensitive TimTim.
                    </p>
                    <p className="research2">
                    Development & Engineering - We integrated AI and robotics to bring our bot, TimTim, to life, focusing on improving cognitive skills.
                    </p>
                    <p className="research3">
                    Deployment & Support - Our mobile app offers ongoing support and parental control, ensuring TimTim becomes a safe and integral part of your child’s daily life.
                    </p>
                  </div>
                </div>

               
              </div>

              <div className="col-lg-6" id="colimg">
                <img className="aboutimg7" src={aboutimg7} />
              </div>
            </div>
          </div>
        </section>

        {/* <section id="aboutsec5">
          <div className="container">
            <div className="row">
             

              <div className="col-lg-3 col-md-6">
                <div className="seccpro">
                  <h1 className="k">{project} +</h1>
                  <p className="succp">Success Projects</p>
                </div>
              </div>


              <div className="col-lg-3 col-md-6" id="set-gape01">
                <div className="seccpro1">
                  <h1 className="k">{customer} +</h1>
                  <p className="succp">Expert Team</p>
                </div>
              </div>


              <div className="col-lg-3 col-md-6" id="set-gape">
                <div className="seccpro">
                  <h1 className="k">{clientCount} +</h1>
                  <p className="succp">Satisfied Clients</p>
                </div>
              </div>


              <div className="col-lg-3 col-md-6" id="set-gape">
                <div className="seccpro">
                  <h1 className="k">{developer } +</h1>
                  <p className="succp">Awards Wining</p>
                </div>
              </div>




            </div>
          </div>
        </section> */}


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

export default About;
