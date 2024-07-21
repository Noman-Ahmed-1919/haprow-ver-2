import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import img1 from "../images/img1.png";

import man1 from "../images/ali.png";
import man2 from "../images/Habiba.jpg";
import man3 from "../images/umer.jpg";
import man4 from "../images/marium.jpg";
import man5 from "../images/jahanzaib.jpg";

const Teamslider = () => {

    const settingsTestimonial = {
        dots: true,
        infinite: true,
        speed: 100,
        slidesToShow: 5,
        arrows: false,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
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
          name: "Muhammad Ali Abbas",
          designation: "Founder & CEO",
          profile: img1,
          imageicon: man1,
        },
        {
          name: "Habiba Rehman",
          designation: "Robotics Engineer",
          profile: img1,
          imageicon: man2,
        },
        {
          name: "Umer Noorani",
          designation: "Embedded Robotics Engineer",
          profile: img1,
          imageicon: man3,
        },
        {
          name: "Mariyam Sheikh",
          designation: "AI/ML Engineer",
          profile: img1,
          imageicon: man4,
        },
        {
          name: "Syed Jahanzaib Rafi",
          designation: "Chief Technology Officer",
          profile: img1,
          imageicon: man5,
        }
    ];

    return (
        <section className='testmonialSec1' id='sec8'>
            <div className='backteamcolor'>
                <div className="effect"></div>
                <div className="container">
                    <h4 className='pr secHeading text-center' id='teamour'>Our team</h4>
                    <h1 className='pr secHeading text-center' id='withour'>Meet with our awesome<br /> team</h1>
                    <div className="px-3">
                        <Slider {...settingsTestimonial}>
                            {teamData.map((item, key) => (
                                <div className="mb-4 p-3 animatable fadeInUp" key={key}>
                                    <TestCard 
                                        imageawsome={item.imageicon} 
                                        desc={item.description} 
                                        image={item.profile} 
                                        name={item.name} 
                                        desig={item.designation} 
                                    />
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    );
}

const TestCard = ({ imageawsome, image, name, desig, desc }) => {
    return (
        <div className="testCard1">
            <img className='img-fluid card-image' src={imageawsome} alt="review" />
            <ReadMore>
                {desc}
            </ReadMore>
            <div className="profileDiv1">
                <div className=''>
                    <div className="name-text">{name}</div>
                    <div className="designation-text">{desig}</div>
                </div>
            </div>
        </div>
    );
}

const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };
    return (
        <>
            {/* <div className={isReadMore ? "description-text show5Line" : "description-text"}>
                {text}
            </div>
            <span onClick={toggleReadMore} className="read-more cursor-pointer">
                {isReadMore ? "read more" : "show less"}
            </span> */}
        </>
    );
}

export default Teamslider;