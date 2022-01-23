import axios from "axios";
import React from "react";

const useHandleCreateFormSubmit = () => {
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

  return [handleCreateFormSubmit];
};

export default useHandleCreateFormSubmit;
