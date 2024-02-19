
'use client';
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import CustomImage from "@/app/components/common/custom_image";
import { Container, Row, Col } from "react-bootstrap";
import ScrollAnimation from "sgk-react-animation-scroll";
import "animate.css";




const FeaturedTherapist = (props: any) => {

  const { heading, content, meet, therapiList } = props;


  const customStyle = {
    background: "url(" + 'images/therapi_bg.svg' + ")",
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  }



  return (
    <section className="featured-section p70" style={customStyle}>
      <Container>
        <Row className="justify-content-end">
          <Col lg={12} md={12} sm={12} xs={12}>
            <div className="header-box">
            <ScrollAnimation animateIn="animate__fadeIn">
              <span>{meet}</span>
              <h3>{heading}</h3>
              </ScrollAnimation>
              <ScrollAnimation animateIn="animate__fadeInUp">
              <p>{content}</p>
              </ScrollAnimation>
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
                       <ScrollAnimation animateIn="animate__fadeInUp">
                      <div className="slide-box">
                        <div className="slideimg"><CustomImage src={item?.image} width={0} height={0} style={{ width: "100%" }} /></div>
                        <div className="slide-detail">
                          <h4>{item?.title}</h4>
                          <p>{item?.content}</p>
                        </div>
                      </div>
                      </ScrollAnimation>
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