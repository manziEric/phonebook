import React, { useContext } from "react";
import { FormContext } from "./FormEntry";

const CreateForm = ({ children }) => {
  const context = useContext(FormContext);

  if (!context) {
    throw new Error("FormButton should be called in Form");
  }

  const { handleCreateFormSubmit } = context;

  return (
    <form className="" onSubmit={handleCreateFormSubmit}>
      {children}
    </form>
  );
};

export default CreateForm;
