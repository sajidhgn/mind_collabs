"use client";
import { Container, Row, Col } from "react-bootstrap";
import CustomImage from "@/app/components/common/custom_image";
import InputField from "@/app/components/common/form/components/inputField";
import SelectField from "@/app/components/common/form/components/selectField";
import TextareaField from "@/app/components/common/form/components/textAreaField";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import ScrollAnimation from "sgk-react-animation-scroll";
import "animate.css";


const ContactUs = () => {

    const initialValues = {
        name: "",
        email: "",
        subject: "",
        message: ""
    };

    const validationSchema = Yup.object().shape({
        name: Yup.string().required("Name is required"),
        email: Yup.string()
            .email("Invalid email address")
            .required("Email is required"),
        subject: Yup.string().required("Subject is required"),

    });

    const handleSubmit = (values: any, actions: any) => {
        console.log(values)
    };

    const options = [
        {
            "label": "Choose Option",
            "value": ""
        },
        {
            "label": "Option 1",
            "value": "option-1"
        },
        {
            "label": "Option 2",
            "value": "option-2"
        },
        {
            "label": "Option 3",
            "value": "option-3"
        }
    ]

    return (
        <section className="contact-section bg-white">
            <CustomImage src="/images/contact_banner.png" style={{ width: "100%", height: "auto", objectFit: "cover" }} alt="" />

            <div className="contact-form-section">
            <div className="contact-form-section-inn">
                <Container>
                    <Row>
                        <Col lg={7} md={11} sm={12} xs={12}>
                        <ScrollAnimation animateIn="animate__fadeIn">
                            <div className="header-box">
                                <h3>Contact us</h3>
                                <p>We‘re here for you. Make sure your email goes to the right place, please use this form below.</p>
                            </div>
                            </ScrollAnimation>

                        </Col>
                        <Col lg={12} md={12} sm={12} xs={12}>
                        <ScrollAnimation animateIn="animate__fadeInUp">
                            <Formik
                                initialValues={initialValues}
                                validationSchema={validationSchema}
                                onSubmit={handleSubmit}
                            >
                                <Form>
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-sm-12 col-12 form-group">

                                            <InputField name="name" as="input" label="Full Name" type="text" placeholder="Your Name" />
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 col-12 form-group">

                                            <InputField name="email" as="input" label="Email Address" type="email" placeholder="name@email.com" />
                                        </div>
                                        <div className="col-12 form-group">

                                            <SelectField name="subject" label="subject" options={options} />
                                        </div>
                                        <div className="col-12 form-group">

                                            <TextareaField name="message" label="Message" rows="6" placeholder="Write here" />
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 col-12 form-group blog-back">

                                            <button className="btn dbtn black w-100" type="submit"> <div className="d-flex align-items-center gap-4 justify-content-between"> Send Message <CustomImage width={32} height={14} src="/images/right-long-arrow.svg" /></div></button>
                                        </div>
                                    </div>
                                </Form>
                            </Formik>
                            </ScrollAnimation>
                        </Col>
                    </Row>
                </Container>
            </div>
            </div>

        </section>
    )
}

export default ContactUs;