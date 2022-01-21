import React, { useContext } from "react";
import { FormContext } from "./FormEntry";

const Form = ({ children }) => {
  const context = useContext(FormContext);

  console.log(context);

  if (!context) {
    throw new Error("FormButton should be called in Form");
  }

  const { handleFormSubmit } = context;

  return (
    <form className="" onSubmit={handleFormSubmit}>
      {children}
    </form>
  );
};

export default Form;
