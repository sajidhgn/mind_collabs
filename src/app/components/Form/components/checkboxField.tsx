import React from "react";
import { ErrorMessage, Field } from "formik";

const CheckboxField = (props: any) => {
  const { name, label, ...rest } = props;
  return (
    <div>
      <label>
        <Field type="checkbox" name={name} {...rest} />
        {label}
      </label>
      <ErrorMessage name={name} component="div" className="error" />
    </div>
  );
};

export default CheckboxField;
