"use client";
import { Container, Row, Col } from "react-bootstrap";
import CustomImage from "@/app/components/common/custom_image";
import ScrollAnimation from "sgk-react-animation-scroll";
import "animate.css";

const OurValues = (props: any) => {

    const { heading, valuesList, value_img } = props;

    return (
        <section className="our-values-section bg-white p100 pt-0">
            <Container>
                <Row>
                    <Col lg={12} md={12} sm={12} xs={12}>
                        <div className="our-values">
                        <ScrollAnimation animateIn="animate__fadeInUp">
                            <div className="header-box">
                                <h3>{heading}</h3>
                            </div>
                            </ScrollAnimation>
                            <Row className="justify-content-between">
                                <Col lg={4} md={4} sm={12} xs={12}>
                                    <div className="our-values-list">
                                        {
                                            valuesList.map((item: any, index: any) => (
                                                <ScrollAnimation animateIn="animate__fadeInUp" className="values-box" key={index}>
                                               
                                                    <div className="number">{index+1}</div>
                                                    <div>
                                                        <h6>{item?.heading}</h6>
                                                        <span>{item?.content}</span>
                                                    </div>
                                               
                                                </ScrollAnimation>
                                            ))
                                        }
                                    </div>
                                </Col>
                                <Col lg={6} md={6} sm={12} xs={12}>
                                <ScrollAnimation animateIn="animate__zoomIn">
                                    <CustomImage src={value_img} style={{ width: "100%", height: "auto", objectFit: "cover" }} />
                                    </ScrollAnimation>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default OurValues;