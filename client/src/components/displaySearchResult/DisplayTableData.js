import React, { createContext, useContext } from "react";
import { GlobalContext } from "../../context/Provider";

export const TableContext = createContext();

//TODO: add link to the "edit this entry" page

const DisplayTableData = ({ children }) => {
  const {
    searchState: { tableData = [] },
  } = useContext(GlobalContext);

  const renderTabledata = () => {
    return tableData.map(({ id, firstName, lastName, phoneNumber }) => (
      <tr key={id}>
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
