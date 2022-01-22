import React from "react";

const FormInput = ({ type = "text", name, placeholder, required = true }) => {
  return (
    <input
      className=""
      type={type}
      required={required}
      name={name}
      placeholder={placeholder}
    />
  );
};

export default FormInput;
