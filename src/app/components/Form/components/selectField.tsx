import React from "react";
import { ErrorMessage, Field } from "formik";

const SelectField = (props: any) => {
  const { name, label, options, ...rest } = props;
  return (
    <div>
      {label ? <label htmlFor={name}>{label}</label> : null}
      <div className={"position-relative  "}>
        <Field as="select" name={name} {...rest}>
          {options.map((option: any) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Field>
        <i className={props.icon}></i>
      </div>
      <ErrorMessage name={name} component="div" className="error" />
    </div>
  );
};

export default SelectField;
