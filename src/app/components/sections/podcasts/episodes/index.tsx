import { Container, Row, Col } from "react-bootstrap";
import CustomImage from "@/app/components/common/custom_image";
import Link from "next/link";
import { routes } from "@/app/routes";
import ScrollAnimation from "sgk-react-animation-scroll";
import "animate.css";


const Episodes = (props: any) => {

    const { heading, episodes_list } = props;

    return (
        <section className="popular-episodes-section p70 bg-white">
            <Container>
                <Row>
                    <Col lg={12} md={12} sm={12} xs={12}>

                        <h4>{heading}</h4>

                        <div className="episodes-list">
                            {
                                episodes_list && episodes_list.map((item: any, index: any) => (
                                    <ScrollAnimation animateIn="animate__fadeInUp" key={index}>
                                    <div className="episode-box">
                                        <div>
                                            <span>Episodes {item?.count}</span>
                                            <h5>{item?.heading}</h5>
                                        </div>
                                        <div className="playbox">
                                            <CustomImage src="images/play-icon.svg" width={12} height={12} />
                                        </div>
                                    </div>
                                    </ScrollAnimation>
                                ))
                            }
                        </div>
                        <ScrollAnimation animateIn="animate__bounce">
                        <Link href={routes.podcasts} className="btn dbtn black">Browse all podcasts episodes</Link>
                        </ScrollAnimation>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Episodes;