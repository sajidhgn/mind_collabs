
'use client';
import React from 'react';
import CustomImage from "@/app/components/CustomImage";
import { Container, Row, Col } from "react-bootstrap";
import Slider from "react-slick";



const FeaturedTherapist=(props:any)=>{

    const {heading, content, meet, therapiList } = props;


    const customStyle = {
        background: "url(" + 'images/therapi_bg.svg' + ")",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
}

    const SlickArrowLeft = ({ currentSlide, slideCount, ...props }:any) => (
        <button
          {...props}
          className={
            "slick-prev slick-arrow" +
            (currentSlide === 0 ? " slick-disabled" : "")
          }
          aria-hidden="true"
          aria-disabled={currentSlide === 0 ? true : false}
          type="button"
        >
          <img src='images/left-arrow.svg' className='img-fluid' alt='' />
        </button>
      );
      const SlickArrowRight = ({ currentSlide, slideCount, ...props }:any) => (
        <button
          {...props}
          className={
            "slick-next slick-arrow" +
            (currentSlide === slideCount - 1 ? " slick-disabled" : "")
          }
          aria-hidden="true"
          aria-disabled={currentSlide === slideCount - 1 ? true : false}
          type="button"
        >
         <img src='images/right-arrow.svg' className='img-fluid' alt='' />
        </button>
      );

    let settings = {
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        prevArrow:<SlickArrowLeft/>,
        nextArrow:<SlickArrowRight/>,
        infinite: true,
        responsive: [
           
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ],
      };

    return(
        <section className="featured-section p70" style={customStyle}>
        <Container>
          <Row className="justify-content-end">
            <Col lg={12} md={12} sm={12} xs={12}>
              <div className="header-box">
                <span>{meet}</span>
                <h3>{heading}</h3>
                <p>{content}</p>
              </div>
            </Col>
            <Col lg={11} md={12} sm={12} xs={12}>
              <Slider {...settings} className='featuredslider slider'>

                {
                    therapiList.map((item:any, index:any)=>(
                       
                        <div className="slide-box" key={index}>
                        <div className="slideimg"><CustomImage src={item?.image} width={0} height={0} style={{width:"100%"}} /></div>
                        <div className="slide-detail">
                        <h4>{item?.title}</h4>
                        <p>{item?.content}</p>
                        </div>
                      </div>
                     

                    ))
                }
              </Slider>
            </Col>
          </Row>
        </Container>
      </section>
    )
}

export default FeaturedTherapist;