import React, { useState, useEffect, createContext } from "react";
import axios from "axios";
import DisplayTableData from "../displaySearchResult/DisplayTableData";

export const SearchContext = createContext(null);

const SearchField = ({ children }) => {
  const [value, setValue] = useState("");
  const [phoneNumberData, setPhoneNumberData] = useState([]);

  const searchForEntries = () => {
    phoneNumberData.filter((res) => {
      const { firstName, lastName, phoneNumber } = res;

      const search =
        firstName.includes(value) ||
        lastName.includes(value) ||
        phoneNumber.includes(value);

      if (search) {
        DisplayTableData({ data: res });
      }
      return true;
    });
  };

  //Send fetch request to backend server
  useEffect(() => {
    const fetchDataFromServer = async () => {
      const serverData = await axios.get("/api/phonenumbers");
      setPhoneNumberData(serverData.data);
    };

    fetchDataFromServer();
  }, []);

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
