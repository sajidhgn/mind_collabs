import React, { useEffect, useRef } from "react";
import { useField } from "formik";

const RadioField = ({ label, name, options, ...rest }: any) => {
  const [field, meta] = useField(name);

  const errorField = useRef<any>();
  useEffect(() => {
    errorField.current.classList.remove("error-slide-exit-animation");
  }, []);

  return (
    <div>
      <label>{label}</label>
      {options.map((option: any, index:any) => (
        <div key={index} className="form-check">
         
            <input
              type="radio"
              {...field}
              {...rest}
              value={option.value}
              checked={field.value === option.value}
              className={`form-check-input ${
                meta.touched && meta.error
                  ? "border border-danger focus-ring-danger focus-ring"
                  : ""
              }`} name={name} id={option?.label?.replace(/\s+/g, '-').toLowerCase()}
            />
             <label className="form-check-label" htmlFor={option?.label?.replace(/\s+/g, '-').toLowerCase()}>
            {option.label}
          </label>
        </div>
      ))}
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

export default RadioField;
