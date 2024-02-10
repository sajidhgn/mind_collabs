"use client";
import { Container, Row, Col } from "react-bootstrap";
import CustomImage from "@/app/components/CustomImage";
import ScrollAnimation from "sgk-react-animation-scroll";
import "animate.css";

const OurMission = (props: any) => {

    const { about, heading, mission_title, mission_sub_title, mission_content, mission_img, quote_title, quote_content } = props;

    return (
        <>
         <div className="blog-detail-header">
      <CustomImage src="/images/blog_bg.jpeg" style={{width:"100%", height:"auto", objectFit:"cover"}} />
    </div>
         <section className="aboutus-section bg-white">
            <Container>
                <Row>
                    <Col lg={12} md={12} sm={12} xs={12}>
                    <ScrollAnimation animateIn="animate__fadeIn">
                        <div className="header-box">
                            <span>{about}</span>
                            <h3>{heading}</h3>
                        </div>
                        </ScrollAnimation>
                    </Col>
                    <Col lg={6} md={6} sm={12} xs={12}>
                    <ScrollAnimation animateIn="animate__fadeInLeft">
                        <div className="our-mission">
                            <h4>{mission_title}</h4>
                            <h5>{mission_sub_title}</h5>
                            <p>{mission_content}
                            </p>
                        </div>
                        </ScrollAnimation>
                    </Col>
                    <Col lg={6} md={6} sm={12} xs={12}>
                    <ScrollAnimation animateIn="animate__fadeInRight">
                        <CustomImage src={mission_img} style={{ width: "100%", height: "auto", objectFit: "cover" }} />
                        </ScrollAnimation>
                    </Col>
                </Row>
                <Row className="positive-change p70 pb-0">
                    <Col lg={4} md={4} sm={12} xs={12}>
                    <ScrollAnimation animateIn="animate__fadeInLeft">
                        <h4>
                            {quote_title}
                        </h4>
                        </ScrollAnimation>
                    </Col>
                    <Col lg={8} md={8} sm={12} xs={12}>
                    <ScrollAnimation animateIn="animate__fadeInRight">
                        <p>{quote_content}</p>
                        </ScrollAnimation>
                    </Col>
                </Row>
            </Container>
        </section>
        </>
       
    )
}

export default OurMission;