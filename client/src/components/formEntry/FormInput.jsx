import React, { useContext } from "react";
import { FormContext } from "./FormEntry";

const FormInput = () => {
  const context = useContext(FormContext);

  if (!context) {
    throw new Error("FormInput should be called in Form");
  }

  const { value, setValue } = context;

  return (
    <input
      className=""
      type="text"
      value={value}
      required
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export default FormInput;
