import { Container, Row, Col } from "react-bootstrap";
import ScrollAnimation from "sgk-react-animation-scroll";
import "animate.css";

const Counter = (props: any) => {

    return (
        <section className="counter-section bg-white">
            <Container>
                <Row>
                    {
                        props?.counterList && props?.counterList.map((item: any, index: any) => (
                            <ScrollAnimation animateIn="animate__fadeInUp" className="col-lg-3 col-md-6 col-sm-12 col-12" key={index}>
                            
                                <div className={`counter-box borders-${index+1}`}>
                                    <h5>{item?.count}%</h5>
                                    <p>{item?.content}</p>
                                </div>
                           
                            </ScrollAnimation>
                        ))
                    }
                </Row>
            </Container>
        </section>
    )
}

export default Counter;