import React, { useContext } from "react";
import { FormContext } from "./FormEntry";

const FormButton = ({ children }) => {
  const context = useContext(FormContext);

  if (!context) {
    throw new Error("FormButton should be called in Form");
  }

  const {} = context;

  return (
    <button className="" onClick={""}>
      {children}
    </button>
  );
};

export default FormButton;
