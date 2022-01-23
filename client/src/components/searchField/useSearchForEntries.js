import React, { useContext } from "react";
import { GET_SEARCH_RESULT_FOR_TABLE } from "../../context/constants";
import { GlobalContext } from "../../context/Provider";

const useSearchForEntries = () => {
  const {
    dispatch,
    searchState: { data },
  } = useContext(GlobalContext);

  const searchForEntries = (e) => {
    const filterData = data.filter((res) => {
      const { firstName, lastName, phoneNumber } = res;

      const search =
        firstName.includes(e) ||
        lastName.includes(e) ||
        phoneNumber.includes(e);

      if (search && e !== "") {
        return res;
      }
    });

    dispatch({
      type: GET_SEARCH_RESULT_FOR_TABLE,
      payload: { tableData: filterData },
    });
  };
  return [searchForEntries];
};

export default useSearchForEntries;
