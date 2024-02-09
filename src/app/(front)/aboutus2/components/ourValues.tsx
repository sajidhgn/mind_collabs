"use client";
import { Container, Row, Col } from "react-bootstrap";
import CustomImage from "@/app/components/CustomImage";

const OurValues = (props: any) => {

    const { heading, value_img, valuesList } = props;

    return (
        <section className="our-values-two bg-white p70">
            <Container>
                <Row>
                    <Col lg={12} md={12} sm={12} xs={12}>
                        <div className="header-box">
                            <h3>{heading}</h3>
                        </div>
                    </Col>
                    <Col lg={6} md={6} sm={12} xs={12}>

                        <CustomImage src={value_img} style={{ width: "100%", height: "auto", objectFit: "cover" }} />

                    </Col>
                    <Col lg={6} md={6} sm={12} xs={12} className="d-flex align-items-end">
                        <Row>
                        <Col lg={12} md={12} sm={12} xs={12}>
                                <div className="border-top pt-5"></div>
                            </Col>
                            {
                                valuesList && valuesList.map((item: any, index: any) => (

                                    <Col lg={6} md={12} sm={12} xs={12} key={index}>
                                        <div className="value-two">
                                            <h5>{item?.heading}</h5>
                                            <p>{item?.content}</p>
                                        </div>
                                    </Col>
                                ))
                            }
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default OurValues;