import React, { useState, createContext } from "react";

export const SearchContext = createContext(null);

const SearchField = ({ children }) => {
  const [value, setValue] = useState("");

  console.log(value);

  const searchForEntries = () => {
    console.log("search button clicked");
  };

  return (
    <SearchContext.Provider
      value={{
        value,
        setValue,
        searchForEntries,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchField;
