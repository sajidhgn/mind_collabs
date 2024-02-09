"use client";
import CustomImage from "@/app/components/CustomImage";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import InputField from "@/app/components/Form/components/inputField";
import CheckboxField from "@/app/components/Form/components/checkboxField";
import RadioField from "@/app/components/Form/components/radioField";
import TextareaField from "@/app/components/Form/components/textAreaField";

const FormSection = () => {

    const initialValues = {
        name: "",
        language: "",
        checkbox_option: "",
        radio_option: "",
        min: "",
        max: "",
        about: "",
    };

    const validationSchema = Yup.object().shape({
        name: Yup.string().required("Name is required"),
        min: Yup.string().required(""),
        max: Yup.string().required("")
    });

    const handleSubmit = (values: any, actions: any) => {
        console.log(values)
    };

    const options = [
        {
            "label": "Option 3",
            "value": "option-3",
        },
        {
            "label": "Option 4",
            "value": "option-4",
        }
    ]

    return (
        <>
            <div className="user-detail">
                <div>
                    <CustomImage src="/images/dummy-user.svg" width={82} height={82} className="rounded" />
                </div>
                <div>
                    <h5>Janet Mercel</h5>
                    <p>Licensed Marriage and Family Therapist <br /> Compassion Counselling.Ltd</p>
                </div>
            </div>
            <div className="section-header">
                <h5>Section Header</h5>
            </div>
            <div className="user-form p100 pt-0">
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    <Form>
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="row">
                                    <div className="form-group col-lg-6 col-md-6 col-sm-12 col-12">
                                        <InputField name="name" as="input" label="Full Name" type="text" placeholder="Your Name" />
                                    </div>
                                    <div className="form-group col-lg-6 col-md-6 col-sm-12 col-12 browse-section">
                                        <label htmlFor="language">Search Language</label>
                                        <div className="input-icon">
                                            <InputField name="language" as="input" type="text" placeholder="Search Language" />
                                            <CustomImage src="/images/search-icon.svg" width="12" height="12" />
                                        </div>
                                    </div>
                                    <div className="form-group col-lg-6 col-md-6 col-sm-12 col-12 checkboxsec">

                                        <label htmlFor="option">Select following option</label>
                                        <CheckboxField
                                            name="option_1"
                                            label="Option 1"

                                        />
                                        <CheckboxField
                                            name="option_2"
                                            label="Option 2"
                                        />
                                    </div>
                                    <div className="form-group col-lg-6 col-md-6 col-sm-12 col-12 checkboxsec">

                                        {

                                            <RadioField
                                                name="radio_option"
                                                options={options}
                                                label="Select following option"

                                            />

                                        }



                                    </div>
                                    <div className="form-group col-lg-6 col-md-6 col-sm-12 col-12">
                                        <div className="online-schedule">
                                            <h6>Looking for online Scheduling?</h6>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                                        </div>
                                    </div>

                                </div>
                                <div className="row">
                                    <div className="form-group col-lg-2 col-md-5 col-sm-12 col-12">
                                        <label htmlFor="standard_rate">Standard Rate</label>
                                        <div className="input-group">
                                            <span className="input-group-text" id="basic-addon1">$</span>
                                            <InputField name="min" as="input" type="text" placeholder="MIN" />
                                        </div>
                                    </div>
                                    <div className="form-group col-lg-2 col-md-2 col-sm-12 col-12 hdmobile">
                                        <label className="text-white">S</label>
                                        <input type="text" value="To" className="form-control px-0 disabled text-center bg-white" disabled />
                                    </div>

                                    <div className="form-group col-lg-2 col-md-5 col-sm-12 col-12">
                                        <label htmlFor="standard_rate stnd">Standard Rate</label>
                                        <div className="input-group">
                                            <span className="input-group-text" id="basic-addon1">$</span>
                                            <InputField name="max" as="input" type="text" placeholder="MAX" />
                                        </div>
                                    </div>
                                    <div className="form-group col-lg-12 col-md-12 col-sm-12 col-12">
                                       
                                            <TextareaField name="message" label="About My Cloemts" rows="6" placeholder="Write here" />
                                      
                                    </div>
                                    <div className="form-group col-lg-6 col-md-6 col-sm-12 col-12">
                                       <button className="btn dbtn w-100 d-flex align-items-center gap-2 justify-content-between" type="submit">Submit and Continue <CustomImage src="/images/right-long-arrow.svg" width={32} height={14} /></button>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </Form>
                </Formik>
            </div>
        </>
    )
}

export default FormSection;