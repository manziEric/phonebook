import React, { createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { EDIT_ENTRY_RESULT } from "../../context/constants";
import { GlobalContext } from "../../context/Provider";

export const TableContext = createContext();

const DisplayTableData = ({ children }) => {
  const navigate = useNavigate();
  const {
    dispatch,
    searchState: { tableData = [] },
  } = useContext(GlobalContext);

  const handleEditEntryClick = (_id, firstName, lastName, phoneNumber) => {
    dispatch({
      type: EDIT_ENTRY_RESULT,
      payload: { editEntryResult: { _id, firstName, lastName, phoneNumber } },
    });
    navigate("/editentry");
  };

  const renderTabledata = () => {
    return tableData.map(({ _id, firstName, lastName, phoneNumber }) => (
      <tr key={_id}>
        <td>{firstName}</td>
        <td>{lastName}</td>
        <td>{phoneNumber}</td>
        <td>
          <button
            onClick={() =>
              handleEditEntryClick(_id, firstName, lastName, phoneNumber)
            }
          >
            Edit Entry
          </button>
        </td>
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
