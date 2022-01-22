import axios from "axios";
import React, { createContext, useContext } from "react";
import { GlobalContext } from "../../context/Provider";
import _ from "lodash";

export const FormContext = createContext();

export const FormEntry = ({ children }) => {
  const {
    searchState: {
      editEntryResult: { _id, firstName, lastName, phoneNumber },
    },
  } = useContext(GlobalContext);

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

    const editFirstName = e.target.firstName.value
      ? e.target.firstName.value
      : firstName;
    const editLastName = e.target.lastName.value
      ? e.target.lastName.value
      : lastName;
    const editPhoneNumber = e.target.phoneNumber.value
      ? e.target.phoneNumber.value
      : phoneNumber;

    const postNewEntryToServer = {
      firstName: editFirstName,
      lastName: editLastName,
      phoneNumber: editPhoneNumber,
    };

    const oldEntryResult = { firstName, lastName, phoneNumber };

    if (
      !_.isEqual(
        Object.values(postNewEntryToServer),
        Object.values(oldEntryResult)
      )
    ) {
      const postDataToServer = async () => {
        await axios.put(`/api/phonenumbers/${_id}`, postNewEntryToServer);
      };
      postDataToServer();
    }
  };

  return (
    <FormContext.Provider
      value={{ handleCreateFormSubmit, handleEditFormSubmit }}
    >
      {children}
    </FormContext.Provider>
  );
};
