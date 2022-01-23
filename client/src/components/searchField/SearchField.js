import React, { useEffect, createContext, useContext } from "react";
import axios from "axios";
import { GlobalContext } from "../../context/Provider";
import { GET_SEARCH_RESULT_FROM_SERVER } from "../../context/constants";
import useSearchForEntries from "./useSearchForEntries";

export const SearchContext = createContext(null);

const SearchField = ({ children }) => {
  const { dispatch } = useContext(GlobalContext);
  const [searchForEntries] = useSearchForEntries();

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
        searchForEntries,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchField;
