"use client";
import { Container, Row, Col } from "react-bootstrap";
import CustomImage from "@/app/components/CustomImage";
import parse from "html-react-parser";
const OurMission = (props: any) => {

    const { about, heading, mission_title, mission_subtitle, mission_img, mission_detail } = props;

    return (
        <section className="aboutus-section bg-white mt-102">
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
                            <h5>{mission_subtitle}</h5>
                            <CustomImage src={mission_img} style={{ width: "100%", height: "auto", objectFit: "cover" }} />
                        </div>
                    </Col>
                    <Col className="col-lg-6 col-md-6 col-sm-12 col-12">
                        {parse(`${mission_detail}`)}
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default OurMission;