"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Container, Row, Col } from "react-bootstrap";
import CustomImage from "@/app/components/CustomImage";
import Link from "next/link";
import { routes } from "@/app/routes";

const BlogsSlider = (props: any) => {

    const { our, heading, content, blogs_list } = props;

    return (
        <section className="blog-banner-section p70 mt-102">
            <Container>
                <Row>
                    <Col lg={7} md={12} sm={12} xs={12}>
                        <div className="header-box">
                            <span>{our}</span>
                            <h3>{heading}</h3>
                            <p>{content}</p>
                        </div>
                    </Col>
                    <Col lg={12} md={12} sm={12} xs={12}>
                        <div className="blogslider position-relative">
                            <Swiper
                                slidesPerView={3}
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
                                    blogs_list && blogs_list.map((item: any, index: any) => (
                                        <SwiperSlide key={index}>
                                            <div className="slide-box">
                                                <Link href={{
                                                    pathname: `${routes.blogs}/` + item?.heading.replace(/\s+/g, '-').toLowerCase(),
                                                    query: { slug: item.id },
                                                }}>
                                                    <div className="slideimg"><CustomImage src={item?.blog_img} /></div>
                                                    <div className="slide-detail">
                                                        <h4>{item?.category}</h4>
                                                        <p>{item?.short_description}</p>
                                                    </div>
                                                </Link>
                                            </div>
                                        </SwiperSlide>
                                    ))
                                }

                            </Swiper>
                            <div className="swiper-button-prev"><img src="images/left-long-arrow.svg" alt="" /></div>
                            <div className="swiper-button-next"><img src="images/right-long-arrow.svg" alt="" /></div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default BlogsSlider;