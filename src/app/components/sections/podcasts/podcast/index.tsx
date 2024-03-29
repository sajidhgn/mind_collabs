import { Container, Row, Col } from "react-bootstrap";
import CustomImage from "@/app/components/common/custom_image";
import parse from "html-react-parser";
import ScrollAnimation from "sgk-react-animation-scroll";
import "animate.css";

const Podcast = (props:any) => {

    const {podcast_bg, headphone_img, latest, heading, join_community_list} = props;

    return (
        <>
        <section className="podcast-banner-section">
        <div className="podcast-banner-img">
        <CustomImage src={podcast_bg} style={{width:"100%", height:"auto", objectFit: "cover" }} />
        </div>
      </section>
        <section className="podcasts-latest-section bg-white">
            <Container>
                <Row>
                    <Col lg={12} md={12} sm={12} xs={12}>
                        <div className="latest-podcasts">
                            <div className="podcast-headphone">
                                    <CustomImage src={headphone_img} width={250} height={380} />
                            </div>
                            <ScrollAnimation animateIn="animate__fadeIn">
                            <div className="header-box">
                                <span>{latest}</span>
                                <h3>{parse(`${heading}`)}</h3>
                            </div>
                            </ScrollAnimation>
                        </div>
                    </Col>

                </Row>
            </Container>
            <div className="join-community-section">
                <Container>
                    <Row>
                        {
                            join_community_list&&join_community_list.map((item:any, index:any)=>(
                                <ScrollAnimation animateIn="animate__fadeInUp" className="col-lg-6 col-md-12 col-sm-12 col-12" key={index}>
                               
                                <div className="join-community">
                                    {item?.heading?<h5>{item?.heading}</h5>:""}
                                    <p>{item?.content}</p>
                                </div>
                            
                            </ScrollAnimation>
                            ))
                        }
                      
                        
                    </Row>
                </Container>
            </div>
        </section>
        </>
    )
}

export default Podcast;