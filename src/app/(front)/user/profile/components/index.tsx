import Sidebar from "./sidebar";
import FormSection from "./formSection";
import { Container,Row, Col } from "react-bootstrap";

const Components=()=>{

    return(
        <div className="wrapper d-flex">
     
        <Sidebar />

    <div className="content-wrapper d-flex flex-column">

      <div className="content px-5">

        <Container fluid>
            <Row>
                <Col lg={12} md={12} sm={12} xs={12}>
                <FormSection/>
                </Col>
            </Row>
        </Container>


    </div>
    </div>
    </div>
    )
}

export default Components;