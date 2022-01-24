import React, { useContext } from "react";
import { FormContext } from "./FormEntry";

const EditForm = ({ children }) => {
  const context = useContext(FormContext);

  if (!context) {
    throw new Error("FormButton should be called in Form");
  }

  const { handleEditFormSubmit } = context;

  return (
    <form className="form" onSubmit={handleEditFormSubmit}>
      {children}
    </form>
  );
};

export default EditForm;
