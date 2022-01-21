import axios from "axios";
import React, { createContext, useContext } from "react";
import { GlobalContext } from "../../context/Provider";

export const FormContext = createContext();

export const FormEntry = ({ children }) => {
  const context = useContext(GlobalContext);

  const handleCreateFormSubmit = (e) => {
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

  const handleEditFormSubmit = (e) => {
    e.preventDefault();

    const firstName = e.target.firstName.value;
    const lastName = e.target.lastName.value;
    const phoneNumber = e.target.phoneNumber.value;

    const postNewEntryToServer = { firstName, lastName, phoneNumber };

    const id = "";
    console.log(context);

    const postDataToServer = async () => {
      await axios.put(`/api/phonenumbers/${id}`, postNewEntryToServer);
    };
    // postDataToServer();
  };

  return (
    <FormContext.Provider
      value={{ handleCreateFormSubmit, handleEditFormSubmit }}
    >
      {children}
    </FormContext.Provider>
  );
};
