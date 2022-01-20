import React, { createContext } from "react";

export const TableContext = createContext();

const DisplayTableData = ({ children }) => {
  return <TableContext.Provider value={""}>{children}</TableContext.Provider>;
};

export default DisplayTableData;
