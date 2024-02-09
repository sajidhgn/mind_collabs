import { Container, Row, Col } from "react-bootstrap";
import CustomButton from "@/app/components/CustomButton";

const Services = (props: any) => {

    const { our, heading, servicesList, resoureceHeading, resourceContent, buttonText, buttonLink } = props;

    return (
        <section className="services-section bg-white p70">
            <Container>
                <Row>
                    <Col lg={12} md={12} sm={12} xs={12}>
                        <div className="header-box">
                            <span>{our}</span>
                            <h3>{heading}</h3>
                        </div>
                    </Col>
                    <Col lg={6} md={12} sm={12} xs={12}>
                        <div className="services-list">
                            {
                                servicesList&&servicesList.map((item: any, index: any) => (
                                    <div className="service-box" key={index}>
                                        <h4>{item?.title}</h4>
                                        <p>{item?.detail}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </Col>
                    <Col lg={6} md={12} sm={12} xs={12}>
                        <div className="service-well">
                            <h5>{resoureceHeading}</h5>
                            <p>{resourceContent}</p>
                            <CustomButton anchor="true" className="btn dbtn" type="button" text={buttonText} href={buttonLink}  />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Services;