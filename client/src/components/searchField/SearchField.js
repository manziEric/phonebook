import React, { useState, useEffect, createContext, useContext } from "react";
import axios from "axios";
import { GlobalContext } from "../../context/Provider";
import {
  GET_SEARCH_RESULT_FOR_TABLE,
  GET_SEARCH_RESULT_FROM_SERVER,
} from "../../context/constants";

export const SearchContext = createContext(null);

const SearchField = ({ children }) => {
  const [value, setValue] = useState("");
  const {
    dispatch,
    searchState: { data },
  } = useContext(GlobalContext);

  const searchForEntries = () => {
    if (value !== "") {
      const filterData = data.filter((res) => {
        const { firstName, lastName, phoneNumber } = res;

        const search =
          firstName.includes(value) ||
          lastName.includes(value) ||
          phoneNumber.includes(value);

        if (search) {
          return res;
        }
      });

      dispatch({
        type: GET_SEARCH_RESULT_FOR_TABLE,
        payload: { tableData: filterData },
      });
    }
  };

  //Send fetch request to backend server
  useEffect(() => {
    const fetchDataFromServer = async () => {
      const serverData = await axios.get("/api/phonenumbers");

      if (serverData.status === 200) {
        dispatch({
          type: GET_SEARCH_RESULT_FROM_SERVER,
          payload: { data: serverData.data },
        });
      }
    };

    fetchDataFromServer();
  }, [dispatch]);

  return (
    <SearchContext.Provider
      value={{
        value,
        setValue,
        searchForEntries,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchField;
