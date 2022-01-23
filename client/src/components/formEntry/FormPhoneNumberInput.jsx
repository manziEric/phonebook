import React from "react";
import NumberFormat from "react-number-format";
import PropTypes from "prop-types";

const FormPhoneNumberInput = ({ name, placeholder, required }) => {
  return (
    <NumberFormat
      type="tel"
      name={name}
      format="+## ## ######"
      placeholder={placeholder}
      mask="_"
      required={required}
    />
  );
};

export default FormPhoneNumberInput;

FormPhoneNumberInput.propTypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string,
};

FormPhoneNumberInput.defaultProps = {
  placeholder: "+39 02 1234567",
  required: true,
};
