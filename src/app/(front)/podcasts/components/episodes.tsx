import { Container, Row, Col } from "react-bootstrap";
import CustomImage from "@/app/components/CustomImage";
import Link from "next/link";
import { routes } from "@/app/routes";


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
                                    <div className="episode-box">
                                        <div>
                                            <span>Episodes {item?.count}</span>
                                            <h5>{item?.heading}</h5>
                                        </div>
                                        <div className="playbox">
                                            <CustomImage src="images/play-icon.svg" width={12} height={12} />
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <Link href={routes.podcasts} className="btn dbtn black">Browse all podcasts episodes</Link>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Episodes;