import React from "react";
import NumberFormat from "react-number-format";

const FormPhoneNumberInput = ({ name, placeholder = "+39 02 1234567" }) => {
  return (
    <NumberFormat
      type="tel"
      name={name}
      format="+## ## ######"
      placeholder={placeholder}
      mask="_"
      required
    />
  );
};

export default FormPhoneNumberInput;
