import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import img1 from "../images/img1.png";
import newicon from "../images/icon.png";



export const Slider1 = () => {
   
  const settingsTestimonial = {
        dots: true,
        infinite: true,
        speed: 100,
        slidesToShow: 3,
        arrows: false,
        slidesToScroll: 2,
        autoplay: true, // Enable automatic scrolling
        // autoplaySpeed: 3000,

        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
         
        ]
      };

      const teamData = [
        {
          name:"Carmelo Ippolito",
          designation:"Apes Planet",
          description:" “It was a great experience working with Dappomatics Team. These guys were thorough professionals and very passionate about the value they bring to the table. We had an amazing response time which is extremely important in the blockchain space.” ",
          profile:img1,
          imageicon:newicon,

        },
        {
          name:"Raza",
          designation:"Trustvibes",
          description:" “It was a great experience working with Dappomatics Team. These guys were thorough professionals and very passionate about the value they bring to the table. We had an amazing response time which is extremely important in the blockchain space.” ",
          profile:img1,
          imageicon:newicon,

        },
        {
          name:"Lars Fabricus",
          designation:"CEO & FOUNDER of Roburna Blockchain",
          description:" “Dappomatics team is responsble for creating our roburna blockchain, and I must say they are dedicated to their work. Highly experienced team with strong communication skills” ",
          profile:img1,
          imageicon:newicon,

        },
        {
          name:"Bjorn Mattens",
          designation:"Passive Income",
          description:" “We are amazed and grateful to the dappomatics team for handling our developement tasks with so ease and perfection. Overall a great software development company.” ",
          profile:img1,
          imageicon:newicon,

        },
        {
          name:"Hassan Shahid",
          designation:"CEO of Berg Media",
          description:" “We are working with the dappomatics team for quite a while now and never had any problems. Can't expect anything more from a blockchain development company. One of the best we have come across” ",
          profile:img1,
          imageicon:newicon,
        }
      ];
  return (
    <section className='testmonialSec' id='sec8'>
        <div className="effect"></div>
        <div className="container">

     
            {/* <h1 className='pr secHeading text-center'>Testimonials</h1> */}
            <div className="px-3">
                <Slider {...settingsTestimonial}>
                    {teamData.map((item,key)=>(
                        <div className=" mb-4 p-3 animatable fadeInUp" key={key}>

                            <TestCard imageawsome={item.imageicon}  desc={item.description} image={item.profile} name={item.name} desig={item.designation} />
                        </div>
                    ))}
                   
                </Slider>
                {/* <div className="col-lg-4 mb-4 animatable fadeInUp ">
                    <TestCard image={review1} name={"Christopher Smith"} desig={"Investor"} desc={"Lorem Ipsum is simply dummy text of the printing and typesetting industry."} />
                </div>
                <div className="col-lg-4 mb-4 animatable fadeInUp animationDelay200">
                    <TestCard image={review2} name={"James Brian"} desig={"Trader"} desc={"Lorem Ipsum is simply dummy text of the printing and typesetting industry."} />
                </div>
                <div className="col-lg-4 mb-4 animatable fadeInUp animationDelay400">
                    <TestCard image={review3} name={"Max Maximof"} desig={"Investor"} desc={"Lorem Ipsum is simply dummy text of the printing and typesetting industry."} />
                </div> */}



            </div>
        </div>
    </section>
  )
}


const TestCard = ({imageawsome, image,name,desig,desc}) =>{
    return(
        <div className="testCard">
                          <img className='img-fluid' src={imageawsome} alt="review" />

                          <ReadMore >
            {desc} 
            </ReadMore>
            <div className="profileDiv">
                <img className='img-fluid' src={image} alt="review" />
                <div className='ms-2'>
                    <div className="name">{name}</div>
                    <div className="desig">{desig}</div>
                </div>
            </div>
           
            {/* <div className="desc">
            {desc} 
            </div> */}
        </div>
    )
}

const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const [boxHeight, setboxHeight] = useState(true);
    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };
    // useEffect(()=>{
    //     var clientHeight = document.getElementById('desc').clientHeight;
    //     console.log(clientHeight);
    //     setboxHeight(clientHeight)
    // },[])

    return (
        <>
        <div className={isReadMore ?"desc show5Line":"desc"} id='desc' >
            {text}
        </div>
        <span onClick={toggleReadMore} className="desc cursor-pointer" >
            {isReadMore  ? "read more" : " show less"}
        </span>
        </>
    );
  };


  export default Slider1;
