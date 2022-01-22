import React, { createContext, useReducer } from "react";
import searchReducer from "./reducers/searchReducer";

export const GlobalContext = createContext({});

const initialState = {
  searchResult: [],
  displayTable: false,
  editEntryResult: {
    firstName: null,
    lastName: null,
    phoneNumber: null,
  },
};

export const GlobalProvider = ({ children }) => {
  const [searchState, dispatch] = useReducer(searchReducer, initialState);

  return (
    <GlobalContext.Provider value={{ searchState, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};
