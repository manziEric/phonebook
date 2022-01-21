import React, { useContext } from "react";
import { FormContext } from "./FormEntry";

const FormButton = () => {
  const context = useContext(FormContext);

  if (!context) {
    throw new Error("FormButton should be called in Form");
  }

  return <input type="submit" className="" />;
};

export default FormButton;
