import React, { useContext } from "react";
import { TableContext } from "./DisplayTableData";

const Table = () => {
  const { renderTabledata } = useContext(TableContext);

  return (
    <table border="solid 1px">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Phone Number</th>
        </tr>
      </thead>
      <tbody>{renderTabledata()}</tbody>
    </table>
  );
};

export default Table;
