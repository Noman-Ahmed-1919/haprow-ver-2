import React, { useEffect, useRef, useState } from "react";
import Header from "./Header";

import blogimg1 from "../images/blogimg1.png";
import blogimg2 from "../images/blogimg2.png";
import blogimg4 from "../images/blogimg4.png";
import blogimg5 from "../images/blogimg5.png";
import blogimg6 from "../images/blogimg6.png";

import blogimg11 from "../images/blogimg11.jpg"
import blogimg12 from "../images/blogimg12.png"
import blogimg13 from "../images/blogimg13.jpg"
import blogimg14 from "../images/blogimg14.jpg"
import blogimg15 from "../images/blogimg15.jpg"
import blogimg16 from "../images/blogimg16.jpg"
import blogimg17 from "../images/blogimg17.jpg"



import smline from "../images/smalll.png";
import heart from "../images/heart.png";
import message from "../images/message.png";

import logo from "../images/logo.png";
import insta from "../images/insta.png";
import linkedin from "../images/linkedin.png";
import twitter from "../images/twitter.png";
import youtube from "../images/youtube.png";
import ffsend from "../images/ffsee.png";

const paragraphStyles = {
  WebkitLineClamp: 1,
  WebkitBoxOrient: 'vertical',
  overflow: "hidden",
  display: "-webKit-box"
}


const Blog = () => {

  const [isOpen, setIsOpen] = useState(false)
  const [showReadMoreButton, setShowReadMoreButton] = useState(false)

  const ref = useRef(null)

  useEffect(() => {
    if (ref.current) {
      console.log(ref.current.scrollHeight, ref.current.clientHeight)
      setShowReadMoreButton(
        ref.current.scrollHeight !== ref.current.clientHeight
      )
    }
  }, [])




  return (
    <>
      <section id="blog-main">
        <Header />

        <section id="blog-sec1">
          <div className="container">
            <div className="row">
              <div className="col-lg-8" id="bloog-wi">
                <img src={blogimg1} className="blog-imgg-1" alt="gallery"/>

                <div className="flex-heart">
                  <p className="twentysix" style={{ color: "white" }}>Sep 26, 2022</p>
                  <img src={smline} className="smline" alt="gallery" />
                  <p className="twentysix" style={{ color: "white" }}>Autism Support TimTim Robot</p>
                  <img src={smline} className="smline" alt="gallery"/>
                  <p className="twentysix" style={{ color: "white" }}>By Haprow</p>
                  <img src={smline} className="smline" alt="gallery"/>
                  <img src={heart} className="heart" alt="gallery"/>
                  <p style={{ color: "white" }} className="five">
                    5
                  </p>
                  <img src={message} className="message" alt="gallery"/>
                  <p style={{ color: "white" }} className="three">
                    3
                  </p>
                </div>

                <h3 className="h3-enchancing">
                  GEO News Captures How TimTim Empowers Autistic Kids
                </h3>

                <p className="p-aaautism"
                  style={isOpen ? null : paragraphStyles}
                  ref={ref}
                >
                  TimTim opens doors to new opportunities for autistic children by being their companion in academics, socializing and learning, helping them achieve developmental milestones on the go.

                </p>
                {showReadMoreButton && (
                  <button className="h4-read" onClick={() => setIsOpen(!isOpen)}>{isOpen ? "read less..." : "read more..."}</button>

                )}
              </div>

              <div className="col-lg-4" id="riggght-r">

                <div class="custom-search-container">
                  <input
                    type="text"
                    class="custom-search-input"
                    placeholder="Search..."
                  />
                  <img
                    src={blogimg6}
                    alt="Search Icon"
                    className="custom-search-icon"
                  />
                </div>

                {/* ================= search input with icon code end ==================================== */}

                <h2 className="h33-social">Social Interaction Support</h2>
                <img className="blogimg4" src={blogimg4} />

                <p className="ppp-tiim">
                  The TimTim Robot is equipped with facial recognition software
                  and expressive features, helping users learn to recognize and
                  interpret emotions.
                </p>

                <h4 className="h4-recent">Recent post</h4>

                <p className="ppp-understanding">
                  Understanding Autism Spectrum<br></br> Disorder (ASD)
                </p>

                <p className="p-add">
                  Advantages of Using the TimTim<br></br> Robot
                </p>

                <p className="pp-pro">
                  Promising Future for Autism<br></br> Support
                </p>

                <h4 className="h4-taggs">Tags</h4>

                <p className="pp-rrrobot"> Robot Technologies</p>
              </div>
            </div>
          </div>

          <section id="blog-sec2">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 blog-top" id="bloog-wi">
                  <img src={blogimg2} className="blog-imgg-1" alt="gallery" />

                  <div className="flex-heart">
                    <p style={{ color: "white" }}>Aug 30, 2022</p>
                    <img src={smline} className="smline" alt="gallery" />
                    <p style={{ color: "white" }}>
                      Autism Support TimTim Robot
                    </p>
                    <img src={smline} className="smline" alt="gallery"/>
                    <p style={{ color: "white" }}>By Haprow</p>
                    <img src={smline} className="smline" alt="gallery"/>
                    <img src={heart} className="heart" alt="gallery"/>
                    <p style={{ color: "white" }} className="five">
                      3
                    </p>
                    <img src={message} className="message" alt="gallery"/>
                    <p style={{ color: "white" }} className="three">
                      6
                    </p>
                  </div>

                  <h3 className="h3-enchancing">
                    ARY News Captures How TimTim is Changing Lives of Autistic Children for Better                  </h3>

                    <p className="p-aaautism"
                  style={isOpen ? null : paragraphStyles}
                  ref={ref}
                >
                  TimTim opens doors to new opportunities for autistic children by being their companion in academics, socializing and learning, helping them achieve developmental milestones on the go.

                </p>
                {showReadMoreButton && (
                  <button className="h4-read" onClick={() => setIsOpen(!isOpen)}>{isOpen ? "read less..." : "read more..."}</button>

                )}
                </div>

                <div className="col-lg-4"></div>
              </div>
            </div>
          </section>


          <section id="blog-sec2">
            <div className="container">
              <div className="row">
                <div className="col-lg-8" id="bloog-wi">
                  <img src={blogimg11} className="blog-imgg-1" />

                  <div className="flex-heart">
                    <p style={{ color: "white" }}>Sep 26, 2022</p>
                    <img src={smline} className="smline" />
                    <p style={{ color: "white" }}>
                      Autism Support TimTim Robot
                    </p>
                    <img src={smline} className="smline" />
                    <p style={{ color: "white" }}>By Haprow</p>
                    <img src={smline} className="smline" />
                    <img src={heart} className="heart" />
                    <p style={{ color: "white" }} className="five">
                      3
                    </p>
                    <img src={message} className="message" />
                    <p style={{ color: "white" }} className="three">
                      9
                    </p>
                  </div>

                  <h3 className="h3-enchancing">
                    Haprow Among Top 10 Finalists at IBA CED INVENT 2023                                </h3>

                    <p className="p-aaautism"
                  style={isOpen ? null : paragraphStyles}
                  ref={ref}
                >
                  TimTim opens doors to new opportunities for autistic children by being their companion in academics, socializing and learning, helping them achieve developmental milestones on the go.

                </p>
                {showReadMoreButton && (
                  <button className="h4-read" onClick={() => setIsOpen(!isOpen)}>{isOpen ? "read less..." : "read more..."}</button>

                )}
                </div>

                <div className="col-lg-4"></div>
              </div>
            </div>
          </section>


          <section id="blog-sec2">
            <div className="container">
              <div className="row">
                <div className="col-lg-8" id="bloog-wi">
                  <img src={blogimg12} className="blog-imgg-1" />

                  <div className="flex-heart">
                    <p style={{ color: "white" }}>Sep 26, 2022</p>
                    <img src={smline} className="smline" />
                    <p style={{ color: "white" }}>
                      Autism Support TimTim Robot
                    </p>
                    <img src={smline} className="smline" />
                    <p style={{ color: "white" }}>By Haprow</p>
                    <img src={smline} className="smline" />
                    <img src={heart} className="heart" />
                    <p style={{ color: "white" }} className="five">
                      2
                    </p>
                    <img src={message} className="message" />
                    <p style={{ color: "white" }} className="three">
                      4
                    </p>
                  </div>

                  <h3 className="h3-enchancing">
                    TimTim Captures Hearts at Health Asia’s 2nd Annual Conference 2023                                               </h3>

                    <p className="p-aaautism"
                  style={isOpen ? null : paragraphStyles}
                  ref={ref}
                >
                  TimTim opens doors to new opportunities for autistic children by being their companion in academics, socializing and learning, helping them achieve developmental milestones on the go.

                </p>
                {showReadMoreButton && (
                  <button className="h4-read" onClick={() => setIsOpen(!isOpen)}>{isOpen ? "read less..." : "read more..."}</button>

                )}
                </div>

                <div className="col-lg-4"></div>
              </div>
            </div>
          </section>


          <section id="blog-sec2">
            <div className="container">
              <div className="row">
                <div className="col-lg-8" id="bloog-wi">
                  <img src={blogimg13} className="blog-imgg-1" />

                  <div className="flex-heart">
                    <p style={{ color: "white" }}>Sep 26, 2022</p>
                    <img src={smline} className="smline" />
                    <p style={{ color: "white" }}>
                      Autism Support TimTim Robot
                    </p>
                    <img src={smline} className="smline" />
                    <p style={{ color: "white" }}>By Haprow</p>
                    <img src={smline} className="smline" />
                    <img src={heart} className="heart" />
                    <p style={{ color: "white" }} className="five">
                      1
                    </p>
                    <img src={message} className="message" />
                    <p style={{ color: "white" }} className="three">
                      2
                    </p>
                  </div>

                  <h3 className="h3-enchancing">
                    TimTim Inspires Innovation at National Incubation Center Hyderabad                                                      </h3>

                    <p className="p-aaautism"
                  style={isOpen ? null : paragraphStyles}
                  ref={ref}
                >
                  TimTim opens doors to new opportunities for autistic children by being their companion in academics, socializing and learning, helping them achieve developmental milestones on the go.

                </p>
                {showReadMoreButton && (
                  <button className="h4-read" onClick={() => setIsOpen(!isOpen)}>{isOpen ? "read less..." : "read more..."}</button>

                )}
                </div>

                <div className="col-lg-4"></div>
              </div>
            </div>
          </section>

          <section id="blog-sec2">
            <div className="container">
              <div className="row">
                <div className="col-lg-8" id="bloog-wi">
                  <img src={blogimg14} className="blog-imgg-1" alt="blog"/>

                  <div className="flex-heart">
                    <p style={{ color: "white" }}>Sep 26, 2022</p>
                    <img src={smline} className="smline" alt="blog" />
                    <p style={{ color: "white" }}>
                      Autism Support TimTim Robot
                    </p>
                    <img src={smline} className="smline" />
                    <p style={{ color: "white" }}>By Haprow</p>
                    <img src={smline} className="smline" />
                    <img src={heart} className="heart" />
                    <p style={{ color: "white" }} className="five">
                      6
                    </p>
                    <img src={message} className="message" />
                    <p style={{ color: "white" }} className="three">
                      8
                    </p>
                  </div>

                  <h3 className="h3-enchancing">
                    TimTim Ignites Hope for Autistic Children at Pakistan Centre for Autism                                                                    </h3>

                    <p className="p-aaautism"
                  style={isOpen ? null : paragraphStyles}
                  ref={ref}
                >
                  TimTim opens doors to new opportunities for autistic children by being their companion in academics, socializing and learning, helping them achieve developmental milestones on the go.

                </p>
                {showReadMoreButton && (
                  <button className="h4-read" onClick={() => setIsOpen(!isOpen)}>{isOpen ? "read less..." : "read more..."}</button>

                )}
                </div>

                <div className="col-lg-4"></div>
              </div>
            </div>
          </section>

          <section id="blog-sec2">
            <div className="container">
              <div className="row">
                <div className="col-lg-8" id="bloog-wi">
                  <img src={blogimg15} className="blog-imgg-1"  alt="blog"/>

                  <div className="flex-heart">
                    <p style={{ color: "white" }}>Sep 26, 2022</p>
                    <img src={smline} className="smline" alt="blog"/>
                    <p style={{ color: "white" }}>
                      Autism Support TimTim Robot
                    </p>
                    <img src={smline} className="smline" />
                    <p style={{ color: "white" }}>By Haprow</p>
                    <img src={smline} className="smline" />
                    <img src={heart} className="heart" />
                    <p style={{ color: "white" }} className="five">
                      5
                    </p>
                    <img src={message} className="message" />
                    <p style={{ color: "white" }} className="three">
                      3
                    </p>
                  </div>

                  <h3 className="h3-enchancing">
                    TimTim Erupts Excitement at Dolmen Mall Karachi
                  </h3>

                  <p className="p-aaautism"
                  style={isOpen ? null : paragraphStyles}
                  ref={ref}
                >
                  TimTim opens doors to new opportunities for autistic children by being their companion in academics, socializing and learning, helping them achieve developmental milestones on the go.

                </p>
                {showReadMoreButton && (
                  <button className="h4-read" onClick={() => setIsOpen(!isOpen)}>{isOpen ? "read less..." : "read more..."}</button>

                )}
                </div>

                <div className="col-lg-4"></div>
              </div>
            </div>
          </section>


          <section id="blog-sec2">
            <div className="container">
              <div className="row">
                <div className="col-lg-8" id="bloog-wi">
                  <img src={blogimg16} className="blog-imgg-1" alt="blog"/>

                  <div className="flex-heart">
                    <p style={{ color: "white" }}>Sep 26, 2022</p>
                    <img src={smline} className="smline" alt="blog"/>
                    <p style={{ color: "white" }}>
                      Autism Support TimTim Robot
                    </p>
                    <img src={smline} className="smline" />
                    <p style={{ color: "white" }}>By Haprow</p>
                    <img src={smline} className="smline" />
                    <img src={heart} className="heart" />
                    <p style={{ color: "white" }} className="five">
                      5
                    </p>
                    <img src={message} className="message" />
                    <p style={{ color: "white" }} className="three">
                      3
                    </p>
                  </div>

                  <h3 className="h3-enchancing">
                    TimTim, The New Love of Children, at Expo Center Karachi                  </h3>

                    <p className="p-aaautism"
                  style={isOpen ? null : paragraphStyles}
                  ref={ref}
                >
                  TimTim opens doors to new opportunities for autistic children by being their companion in academics, socializing and learning, helping them achieve developmental milestones on the go.

                </p>
                {showReadMoreButton && (
                  <button className="h4-read" onClick={() => setIsOpen(!isOpen)}>{isOpen ? "read less..." : "read more..."}</button>

                )}
                </div>

                <div className="col-lg-4"></div>
              </div>
            </div>
          </section>




        </section>

        <section id="blog-sec3">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <img src={blogimg17} className="blogimg3" />
              </div>

              <div className="col-lg-6">
                <p className="p-eeevent">Event & Launches</p>

                <h2 className="h4-asssist">Haprow's timtim</h2>

                <div className="main-flex-div">
                  <div>
                    <div className="arrow-fllex">
                      <div>
                        <img className="blogimg5" src={blogimg5} />
                      </div>
                      <div>
                        <p className="p-et">Dolmen Mall Visit</p>
                      </div>
                    </div>

                    <div className="arrow-fllex">
                      <div>
                        <img className="blogimg5" src={blogimg5} />
                      </div>
                      <div>
                        <p className="p-et">Visit at IHRI</p>
                      </div>
                    </div>

                    <div className="arrow-fllex">
                      <div>
                        <img className="blogimg5" src={blogimg5} />
                      </div>
                      <div>
                        <p className="p-et">Visit at Dewa Centre</p>
                      </div>
                    </div>

                    <div className="arrow-fllex">
                      <div>
                        <img className="blogimg5" src={blogimg5} />
                      </div>
                      <div>
                        <p className="p-et">Appearance at Samaan e Shifa</p>
                      </div>
                    </div>

                    <div className="arrow-fllex">
                      <div>
                        <img className="blogimg5" src={blogimg5} />
                      </div>
                      <div>
                        <p className="p-et">Visit at Pakistan Centre for Autism</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="arrow-fllex">
                      <div>
                        <img className="blogimg5" src={blogimg5} />
                      </div>
                      <div>
                        <p className="p-et">TimTim with Usama Nasir</p>
                      </div>
                    </div>

                    <div className="arrow-fllex">
                      <div>
                        <img className="blogimg5" src={blogimg5} />
                      </div>
                      <div>
                        <p className="p-et">Visit at LuckyOne</p>
                      </div>
                    </div>

                    <div className="arrow-fllex">
                      <div>
                        <img className="blogimg5" src={blogimg5} />
                      </div>
                      <div>
                        <p className="p-et">Appearance on ARY News</p>
                      </div>
                    </div>

                    <div className="arrow-fllex">
                      <div>
                        <img className="blogimg5" src={blogimg5} />
                      </div>
                      <div>
                        <p className="p-et">Appearance on GEO News</p>
                      </div>
                    </div>

                    <div className="arrow-fllex" id="agakhan">
                      <div>
                        <img className="blogimg5" src={blogimg5} />
                      </div>
                      <div>
                        <p className="p-et" > Visit at Agha Khan University Hospital</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bloog-gapp"></div>
                <div className="colored-underline"> </div>

                <div className="get-flex">
                <a href="/contact">

                <button className="gett-btnn">GET IN TOUCH</button>
                </a>

                  <p className="ppp-orci">
                    Orci lorem lectus augue aliquet euismod cras<br></br> ac
                    donec vestibulum. Lectus convallis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================== Footer ================================ */}

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

export default Blog;
