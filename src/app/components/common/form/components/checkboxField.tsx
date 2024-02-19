import React, { useEffect, useRef } from "react";
import { useField } from "formik";

const CheckboxField = ({ label, ...props }: any) => {
  const [field, meta] = useField(props);

  const errorField = useRef<any>();
  useEffect(() => {
    errorField.current.classList.remove("error-slide-exit-animation");
  }, []);

  return (
    <div className="form-check">
      
        <input
          type="checkbox"
          {...field}
          {...props}
          className={`form-check-input ${
            meta.touched && meta.error
              ? "border border-danger focus-ring-danger focus-ring"
              : ""
          }`}
          id={label.replace(/\s+/g, '-').toLowerCase()}
        />
        <label className="form-check-label" htmlFor={label.replace(/\s+/g, '-').toLowerCase()}>
        {label}
      </label>
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

export default CheckboxField;
