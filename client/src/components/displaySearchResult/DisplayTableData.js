import React, { createContext } from "react";

export const TableContext = createContext();

const DisplayTableData = ({ data, children }) => {
  console.log(data);
  return <TableContext.Provider value={data}>{children}</TableContext.Provider>;
};

export default DisplayTableData;
