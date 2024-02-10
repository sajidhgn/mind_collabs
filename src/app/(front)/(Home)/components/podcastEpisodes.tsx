
import { Container, Row, Col } from "react-bootstrap";
import CustomImage from "@/app/components/CustomImage";
import Link from "next/link";
import { routes } from "@/app/routes";
import ScrollAnimation from "sgk-react-animation-scroll";
import "animate.css";

const PodcastEpisodes = (props: any) => {

    const { latest, heading, podcasts_list, podcast_main_image } = props;

    const subBgImage = {
        background: "url(" + `/images/podcast_bg.png` + ")",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        
    }

    return (
        <>
            <section className="podcast-section" style={subBgImage}>
                <div className="podcast-bg">
                    <Container>
                        <Row>
                            <Col lg={6} md={6} sm={12} xs={12}>
                            <ScrollAnimation animateIn="animate__fadeIn">
                                <div className="header-box">
                                    <span>{latest}</span>
                                    <h3>{heading}</h3>
                                </div>
                                </ScrollAnimation>
                                <div className="episodes-list">
                                    {
                                        podcasts_list && podcasts_list.map((item: any, index: any) => (
                                            <ScrollAnimation animateIn="animate__fadeInLeft" className="episode-box" key={index}>
                                            
                                                <div>
                                                    <span>Episodes {item?.count}</span>
                                                    <h5>{item?.title}</h5>
                                                </div>
                                                <div className="playbox">
                                                    <CustomImage src="images/play-icon.svg" />
                                                </div>
                                            
                                            </ScrollAnimation>
                                        ))
                                    }


                                </div>
                            </Col>
                            <Col lg={6} md={6} sm={12} xs={12}>
                                <div className="podcast-mobile-box">
                               
                                    <div className="episode-mobile">
                                    <ScrollAnimation animateIn="animate__zoomIn">
                                        <img src={podcast_main_image} className="img-fluid" alt={podcast_main_image} />
                                        </ScrollAnimation>
                                    </div>
                                    

                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
            <div className="podcast-btn">
                <div className="container">
                    <div className="row justify-content-end">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12 text-center">
                        <ScrollAnimation animateIn="animate__bounce">
                            <Link href={routes.podcasts} className="btn dbtn">Browse all podcasts episodes</Link>
                            </ScrollAnimation>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PodcastEpisodes;