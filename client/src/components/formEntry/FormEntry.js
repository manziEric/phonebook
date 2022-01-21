import React, { createContext, useState } from "react";

export const FormContext = createContext();

export const FormEntry = ({ children }) => {
  const [value, setValue] = useState("");

  return (
    <FormContext.Provider value={{ value, setValue }}>
      {children}
    </FormContext.Provider>
  );
};
