import React, { useContext } from "react";
import { GlobalContext } from "../../context/Provider";

const Table = () => {
  //TODO: add style to display table
  const context = useContext(GlobalContext);
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
