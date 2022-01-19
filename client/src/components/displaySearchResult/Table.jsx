import React, { useContext } from "react";
import { TableContext } from "./DisplayTableData";

const Table = () => {
  //TODO: add style to display table
  const context = useContext(TableContext);
  console.log(context);
  return (
    <table>
      <thead>
        <tr>
          <th>hallo</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>world now</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
