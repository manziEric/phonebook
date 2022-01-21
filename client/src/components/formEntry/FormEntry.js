import axios from "axios";
import React, { createContext } from "react";

export const FormContext = createContext();

export const FormEntry = ({ children }) => {
  const handleFormSubmit = (e) => {
    e.preventDefault();

    const firstName = e.target.firstName.value;
    const lastName = e.target.lastName.value;
    const phoneNumber = e.target.phoneNumber.value;

    const postNewEntryToServer = { firstName, lastName, phoneNumber };

    const postDataToServer = async () => {
      await axios.post("/api/phonenumbers/createEntry", postNewEntryToServer);
    };
    postDataToServer();
  };

  return (
    <FormContext.Provider value={{ handleFormSubmit }}>
      {children}
    </FormContext.Provider>
  );
};
