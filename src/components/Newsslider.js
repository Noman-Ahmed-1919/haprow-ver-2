import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


import img1 from "../images/img1.png";
import newicon from "../images/icon.png";

import boximg1 from "../images/boximg1.png";
import boximg2 from "../images/boximg2.png";
import boximg3 from "../images/boximg3.png";
import boximg4 from "../images/blogimg1.png";


const Newsslider = () => {


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
          name:"Creating Streamlined Safeguarding Processes with OneRen",
          designation:"Read More",
          profile:img1,
          imageicon:boximg1,

        },
        {
          name:"What are your safeguarding responsibilities and how can you manage them?",
          designation:"Read More",
          profile:img1,
          imageicon:boximg2,

        },
        {
          name:"Event About TimTim Specs and specialization and how TimTim works",
          designation:"Read More",
          profile:img1,
          imageicon:boximg3,

        },
        {
            name:"What are your safeguarding responsibilities and how can you manage them?",
            designation:"Read More",
          profile:img1,
          imageicon:boximg1,

        },
        {
            name:"What are your safeguarding responsibilities and how can you manage them?",
            designation:"Read More",
          profile:img1,
          imageicon:boximg2,
        }
      ];


  return (
    <>
      
<div className='container'>
    <div className='row'>
       <div className='col-12'>

        <h2 className='h4-bblog'>Blog & News</h2>
        <p className='pp-expp'>Explore the World of NFT Art with Artify's Blog.</p>

       </div>

    </div>

</div>






<div className="container">

     
         
            <div className="px-3">
                <Slider {...settingsTestimonial}>
                    {teamData.map((item,key)=>(
                        <div className="p-3 animatable fadeInUp margin-bt" key={key}>

                            <TestCard imageawsome={item.imageicon}  desc={item.description} image={item.profile} 
                            name={item.name}
                             desig={item.designation} 
                        
                             />
                        </div>
                    ))}
                   
                </Slider>
            



            </div>
        </div>

    </>
  )
}






const TestCard = ({imageawsome, image,name,desig,desc}) =>{
    return(
        <div className="testCard1">

                          <img className='img-fluid' id='newssliderimg' src={imageawsome} alt="review" />

                          <ReadMore >
            {desc} 
            </ReadMore>
            <div className="profileDiv1">
                {/* <img className='img-fluid' src={image} alt="review" /> */}
                <div className='sli-back-para'>
                    <div className="namename1">{name}</div>
                    <div className='read-more-center'>
                    <a href="/blog" target="_blank" rel="noopener noreferrer" className="read-more-link">
        {desig}
      </a> 
                    </div>
                     </div>
            </div>
           
            <div className="desc">
            {desc} 
            </div>
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
    useEffect(()=>{
        var clientHeight = document.getElementById('desc').clientHeight;
        console.log(clientHeight);
        setboxHeight(clientHeight)
    },[])

    return (
        <>
      
        </>
    );
  };

export default Newsslider
