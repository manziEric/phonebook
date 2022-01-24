import React from "react";
import PropTypes from "prop-types";

const FormInput = ({ name, placeholder, required }) => {
  return (
    <input
      className="FormInput"
      type="text"
      required={required}
      name={name}
      placeholder={placeholder}
    />
  );
};

export default FormInput;

FormInput.propTypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
};

FormInput.defaultProps = {
  required: true,
};
