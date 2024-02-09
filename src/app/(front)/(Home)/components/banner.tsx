"use client";
import { Container, Row, Col } from "react-bootstrap";
import InputField from "@/app/components/Form/components/inputField";
import CustomButton from "@/app/components/CustomButton";
import * as Yup from "yup";
import {Form, Formik} from "formik";

const Banner=(props:any)=>{

    const {heading, subHeading, content} =  props;

    const customStyle = {
            background: "url(" + 'images/banner_img.jpeg' + ")",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
    }

    const initialValues = {
        name: "",
        city: ""
      };
      
      const validationSchema = Yup.object().shape({
        name: Yup.string().required("Name is required"),
        city: Yup.string().required("Zipcode/City is required"),
      });

      const handleSubmit = (values: any, actions: any) => {
        console.log(values)
      };

    return(
        <section className="banner-section" style={customStyle}>
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} md={11} sm={12} xs={12}>
              <div className="banner-detail">
                <h1>{heading}</h1>
                <div className="banner-content">
                  <h6>{subHeading}</h6>
                  <p>{content}</p>
                  <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    <Form>
                    <Row>
                      <Col lg={6} md={12} sm={12} xs={12} className="form-group">
                        <div className="input-icon">
                          <InputField name="name" as="input" type="text" icon="images/search-icon.svg" placeholder="Therapisy name, speciality, type of therapy"/>
                          
                        </div>
                      </Col>
                      <Col lg={3} md={12} sm={12} xs={12} className="form-group">
                      <InputField name="city" as="input" type="text" placeholder="Zipcode or city"/>
                      </Col>
                      <Col lg={3} md={12} sm={12} xs={12} className="form-group">
                        <CustomButton type="submit" text="Search" />
                      </Col>
                    </Row>
                  </Form>
                  </Formik>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    )
}

export default Banner;
