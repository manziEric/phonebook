import React, { useContext } from "react";
import { SearchContext } from "./SearchField";

const InputField = () => {
  const context = useContext(SearchContext);

  if (!context) {
    throw new Error("InputField should be called in SearchField");
  }

  const { value, setValue } = context;

  return (
    <input
      type="text"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export default InputField;
