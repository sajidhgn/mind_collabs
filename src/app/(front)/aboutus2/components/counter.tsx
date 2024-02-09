import { Container, Row, Col } from "react-bootstrap";
const Counter = (props: any) => {

    return (
        <section className="counter-section bg-white">
            <Container>
                <Row>
                    {
                        props?.counterList && props?.counterList.map((item: any, index: any) => (
                            <Col lg={3} md={6} sm={12} xs={12} key={index}>
                                <div className={`counter-box borders-${index+1}`}>
                                    <h5>{item?.count}%</h5>
                                    <p>{item?.content}</p>
                                </div>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </section>
    )
}

export default Counter;