import React, { createContext, useContext } from "react";
import { GlobalContext } from "../../context/Provider";

export const TableContext = createContext();

const DisplayTableData = ({ children }) => {
  const {
    searchState: { tableData = [] },
  } = useContext(GlobalContext);

  const renderTabledata = () => {
    return tableData.map(({ _id, firstName, lastName, phoneNumber }) => (
      <tr key={_id}>
        <td>{firstName}</td>
        <td>{lastName}</td>
        <td>{phoneNumber}</td>
      </tr>
    ));
  };
  return (
    <TableContext.Provider value={{ renderTabledata }}>
      {children}
    </TableContext.Provider>
  );
};

export default DisplayTableData;
