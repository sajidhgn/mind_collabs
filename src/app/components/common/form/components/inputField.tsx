import React, { useEffect, useRef } from "react";
import { Field, useField } from "formik";

const InputField = ({ label, ...props }: any) => {
  const [field, meta] = useField(props);

  const errorField = useRef<any>();
  useEffect(() => {
    errorField.current.classList.remove("error-slide-exit-animation");
  }, []);

  return (
    <div>
      {label ? <label htmlFor={props.id || props.name}>{label}</label> : ""}
      <div className="position-relative">
        <Field
          {...field}
          {...props}

          className={`form-control ${
            meta.touched && meta.error
              ? "border border-danger focus-ring-danger focus-ring"
              : ""
          }`}
          
        />
        {props.icon? <img src={props.icon} className="img-fluid" alt="" />:""}
       
      </div>
      <div
        ref={errorField}
        className={`error text-danger mt-1 ${
          meta.touched && meta.error ? "error-slide-enter-animation" : ""
        } ${!meta.error ? "error-slide-exit-animation" : ""}
          `}
      >
        {meta.touched && meta.error}
      </div>
    </div>
  );
};

export default InputField;
