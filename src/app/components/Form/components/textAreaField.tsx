import React, { useEffect, useRef } from "react";
import { Field, useField } from "formik";
import classNames from "classnames";

const TextareaField = ({ label, ...props }: any) => {
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
          as={"textarea"}
          {...field}
          {...props}
          className={`form-control ${classNames({
            "border border-danger focus-ring-danger focus-ring":
              meta.touched && meta.error,
          })}`}
        />
        {props.icon}
      </div>
      <div
        ref={errorField}
        className={`error text-danger mt-1 ${
          meta.touched && meta.error ? "error-slide-enter-animation" : ""
        } ${!meta.error ? "error-slide-exit-animation" : ""}  `}
      >
        {meta.touched && meta.error}
      </div>
    </div>
  );
};

export default TextareaField;
