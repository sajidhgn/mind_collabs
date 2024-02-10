import { Container, Row, Col } from "react-bootstrap";
import CustomButton from "@/app/components/CustomButton";
import ScrollAnimation from "sgk-react-animation-scroll";
import "animate.css";

const Services = (props: any) => {

    const { our, heading, servicesList, resoureceHeading, resourceContent, buttonText, buttonLink } = props;

    return (
        <section className="services-section  p70">
            <Container>
                <Row>
                    <Col lg={12} md={12} sm={12} xs={12}>
                    <ScrollAnimation animateIn="animate__fadeIn">
                        <div className="header-box">
                            <span>{our}</span>
                            <h3>{heading}</h3>
                        </div>
                        </ScrollAnimation>
                    </Col>
                    <Col lg={6} md={12} sm={12} xs={12}>
                        <div className="services-list">
                            {
                                servicesList&&servicesList.map((item: any, index: any) => (
                                    <ScrollAnimation animateIn="animate__fadeInLeft" className="service-box" key={index}>
                                    
                                        <h4>{item?.title}</h4>
                                        <p>{item?.detail}</p>
                                        
                                   
                                    </ScrollAnimation>
                                ))
                            }
                        </div>
                    </Col>
                    <Col lg={6} md={12} sm={12} xs={12}>
                    <ScrollAnimation animateIn="animate__fadeInRight">
                        <div className="service-well">
                            <h5>{resoureceHeading}</h5>
                            <p>{resourceContent}</p>
                            <CustomButton anchor="true" className="btn dbtn" type="button" text={buttonText} href={buttonLink}  />
                        </div>
                        </ScrollAnimation>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Services;