import React from "react";

const FormInput = ({ name, placeholder, required = true }) => {
  return (
    <input
      className=""
      type="text"
      required={required}
      name={name}
      placeholder={placeholder}
    />
  );
};

export default FormInput;
