import React, { useEffect, useRef } from "react";
import { ErrorMessage, Field, useField } from "formik";

const SelectField = (props: any) => {
  const { name, label, options, ...rest } = props;
  const [field, meta] = useField({ name, ...rest });

  const errorField = useRef<any>();
  useEffect(() => {
    errorField.current.classList.remove("error-slide-exit-animation");
  }, []);

  return (
    <div>
      {label ? <label htmlFor={name}>{label}</label> : null}
      <div className={"position-relative  "}>
        <Field as="select" name={name} {...rest} className={`form-control ${meta.touched && meta.error ? "border border-danger focus-ring-danger focus-ring" : ""}`}>
          {options.map((option: any) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Field>
        {props.icon ? <i className={props.icon}></i> : ""}
      </div>
      <div
        ref={errorField}
        className={`error text-danger mt-1 ${meta.touched && meta.error ? "error-slide-enter-animation" : ""} ${!meta.error ? "error-slide-exit-animation" : ""}`}
      >
        <ErrorMessage name={name} />
      </div>
    </div>
  );
};

export default SelectField;