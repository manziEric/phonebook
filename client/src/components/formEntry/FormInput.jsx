import React, { useContext } from "react";
import { FormContext } from "./FormEntry";

const FormInput = ({ name }) => {
  const context = useContext(FormContext);

  if (!context) {
    throw new Error("FormInput should be called in Form");
  }

  return <input className="" type="text" required name={name} />;
};

export default FormInput;
