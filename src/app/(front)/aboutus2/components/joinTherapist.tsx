"use client";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import CustomImage from "@/app/components/CustomImage";
import { routes } from "@/app/routes";
import ScrollAnimation from "sgk-react-animation-scroll";
import "animate.css";

const JoinTherapist = (props:any) => {

    const {heading, content, join_img} = props;

    return (
        <section className="join-directory-section p100 pt-0">
            <Container>
                <Row>
                    <Col lg={12} md={12} sm={12} xs={12}>
                    <ScrollAnimation animateIn="animate__fadeInUp">
                        <Link href={routes.contactus} className="join-directory">
                            <Row>
                                <Col lg={4} md={4} sm={12} xs={12}>
                                    <div className="join-box">
                                        <h5>{heading}</h5>
                                        <p>{content}</p>
                                        <div className="join-arrow"><CustomImage src="images/right-long-arrow.svg" width={32} height={14} /></div>
                                    </div>
                                </Col>
                                <Col lg={8} md={8} sm={12} xs={12}>
                                    <CustomImage src={join_img} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                                </Col>

                            </Row>
                        </Link>
                        </ScrollAnimation>
                    </Col>

                </Row>
            </Container>

        </section>
    )
}

export default JoinTherapist