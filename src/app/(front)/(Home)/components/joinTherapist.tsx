import {Container, Row, Col} from "react-bootstrap";
import parse from 'html-react-parser';
import CustomButton from "@/app/components/CustomButton";


const JoinTherapist=(props:any)=>{

    const {join, our, heading, content, buttonText, buttonLink, mainBackgroundImage, subBackgroundImage} = props;

    const mainBgImage = {
        background: "url(" + `${mainBackgroundImage}` + ")",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
}

const subBgImage = {
    background: "url(" + `${subBackgroundImage}` + ")",
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    padding: '130px 15px',
}

    return(
        <section className="therapist-section" style={mainBgImage}>
        <Container>
          <Row>
            <Col lg={12} md={12} sm={12} xs={12}>
              <div className="therapist-content" style={subBgImage}>
                <Row className="justify-content-center">
                  <Col lg={7} md sm xs={12}>
                 
                    <span className="join">{join}</span>
                
                   
                    <span className="our">{our}</span>
                    <h2>{parse(`${heading}`)}</h2>
                    <p>{content}
                    </p>
                    <CustomButton anchor="true" text={buttonText} className="yellow btn dbtn" href={buttonLink} />
                  </Col>
              </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    )
}


export default JoinTherapist;