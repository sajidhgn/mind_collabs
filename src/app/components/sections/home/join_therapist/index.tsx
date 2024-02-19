import {Container, Row, Col} from "react-bootstrap";
import parse from 'html-react-parser';
import CustomButton from "@/app/components/common/custom_button";
import ScrollAnimation from "sgk-react-animation-scroll";
import "animate.css";


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
                  <ScrollAnimation animateIn="animate__fadeInLeft">
                    <span className="join">{join}</span>
                   </ScrollAnimation>
                   <ScrollAnimation animateIn="animate__fadeIn">
                    <span className="our">{our}</span>
                    </ScrollAnimation>

                    <ScrollAnimation animateIn="animate__fadeInRight">
                    <h2 >{parse(`${heading}`)}</h2>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="animate__fadeInUp">
                    <p>{content}
                    </p>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="animate__bounce">
                    <CustomButton anchor="true" text={buttonText} className="yellow btn dbtn" href={buttonLink} />
                    </ScrollAnimation>
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