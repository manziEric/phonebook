import React, { createContext } from "react";
import useHandleCreateFormSubmit from "./useHandleCreateFormSubmit";
import useHandleEditFormSubmit from "./useHandleEditFormSubmit";

export const FormContext = createContext();

export const FormEntry = ({ children }) => {
  const [handleCreateFormSubmit] = useHandleCreateFormSubmit();
  const [handleEditFormSubmit] = useHandleEditFormSubmit();

  return (
    <FormContext.Provider
      value={{ handleCreateFormSubmit, handleEditFormSubmit }}
    >
      {children}
    </FormContext.Provider>
  );
};
