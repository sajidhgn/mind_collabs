import React from "react";
import { ErrorMessage, Field } from "formik";

const RadioField = (props: any) => {
  const { name, label, options, ...rest } = props;
  return (
    <div>
      <label>{label}</label>
      {options.map((option: any) => (
        <div key={option.value}>
          <label>
            <Field type="radio" name={name} value={option.value} {...rest} />
            {option.label}
          </label>
        </div>
      ))}
      <ErrorMessage name={name} component="div" className="error" />
    </div>
  );
};

export default RadioField;
