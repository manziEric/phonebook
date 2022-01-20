import React, { useState, useEffect, createContext, useContext } from "react";
import axios from "axios";
import DisplayTableData from "../displaySearchResult/DisplayTableData";
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

  //TODO: make this in its own file code splitting
  const searchForEntries = () => {
    data.filter((res) => {
      const { firstName, lastName, phoneNumber } = res;

      const search =
        firstName.includes(value) ||
        lastName.includes(value) ||
        phoneNumber.includes(value);

      if (search) {
        dispatch({
          type: GET_SEARCH_RESULT_FOR_TABLE,
          payload: { tableData: res },
        });
      }
      return true;
    });
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
      //TODO: dispatch error
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
