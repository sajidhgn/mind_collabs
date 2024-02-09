"use client";
import { Container, Row, Col } from "react-bootstrap";
import CustomImage from "@/app/components/CustomImage";
const OurMission = (props: any) => {

    const { about, heading, mission_title, mission_sub_title, mission_content, mission_img, quote_title, quote_content } = props;

    return (
        <section className="aboutus-section bg-white">
            <Container>
                <Row>
                    <Col lg={12} md={12} sm={12} xs={12}>
                        <div className="header-box">
                            <span>{about}</span>
                            <h3>{heading}</h3>
                        </div>
                    </Col>
                    <Col lg={6} md={6} sm={12} xs={12}>
                        <div className="our-mission">
                            <h4>{mission_title}</h4>
                            <h5>{mission_sub_title}</h5>
                            <p>{mission_content}
                            </p>
                        </div>
                    </Col>
                    <Col lg={6} md={6} sm={12} xs={12}>
                        <CustomImage src={mission_img} style={{ width: "100%", height: "auto", objectFit: "cover" }} />
                    </Col>
                </Row>
                <Row className="positive-change p70 pb-0">
                    <Col lg={4} md={4} sm={12} xs={12}>
                        <h4>
                            {quote_title}
                        </h4>
                    </Col>
                    <Col lg={8} md={8} sm={12} xs={12}>
                        <p>{quote_content}</p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default OurMission;