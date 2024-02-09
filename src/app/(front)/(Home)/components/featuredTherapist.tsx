
'use client';
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import CustomImage from "@/app/components/CustomImage";
import { Container, Row, Col } from "react-bootstrap";




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
<div className="featuredslider position-relative">
            <Swiper
                                slidesPerView={4}
                                spaceBetween={30}
                                pagination={{
                                    clickable: true,
                                }}
                                breakpoints={{
                                    320: {
                                        slidesPerView: 1,
                                        spaceBetween: 30,
                                    },
                                    // when window width is >= 480px
                                    480: {
                                        slidesPerView: 2,
                                        spaceBetween: 30,
                                    },
                                    // when window width is >= 640px
                                    767: {
                                        slidesPerView: 3,
                                        spaceBetween: 30,
                                    },
                                    992: {
                                      slidesPerView: 4,
                                      spaceBetween: 30,
                                  }
                                }}
                               
                                navigation={{
                                    prevEl: ".swiper-button-prev",
                                    nextEl: ".swiper-button-next"
                                  }} 
                                modules={[Navigation]}
                                className="mySwiper"
                            >
                                {
                                    therapiList && therapiList.map((item: any, index: any) => (
                                        <SwiperSlide key={index}>
                                            <div className="slide-box">
                                            <div className="slideimg"><CustomImage src={item?.image} width={0} height={0} style={{width:"100%"}} /></div>
                                            <div className="slide-detail">
                                            <h4>{item?.title}</h4>
                                            <p>{item?.content}</p>
                                            </div>
                                            </div>
                                        </SwiperSlide>
                                    ))
                                }
                               
                            </Swiper>
                            <div className="swiper-button-prev shadow-lg"><img src="images/left-arrow.svg" alt="" /></div>
                                <div className="swiper-button-next shadow-lg"><img src="images/right-arrow.svg" alt="" /></div>
                                </div>
            </Col>
          </Row>
        </Container>
      </section>
    )
}

export default FeaturedTherapist;