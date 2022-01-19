import React, { useContext } from "react";
import { SearchContext } from "./SearchField";

const InputButton = ({ children }) => {
  const context = useContext(SearchContext);

  if (!context) {
    throw new Error("InputField should be called in SearchField");
  }

  const { searchForEntries } = context;

  return <button onClick={searchForEntries}>{children}</button>;
};

export default InputButton;
