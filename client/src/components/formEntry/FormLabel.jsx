import React from "react";
import PropTypes from "prop-types";

const FormLabel = ({ name, children }) => {
  return (
    <label htmlFor={name} className="label">
      {children}
    </label>
  );
};

export default FormLabel;

FormLabel.propTypes = {
  name: PropTypes.string,
};
