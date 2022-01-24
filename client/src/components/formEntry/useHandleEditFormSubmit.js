import axios from "axios";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import _ from "lodash";
import { GlobalContext } from "../../context/Provider";
import { GET_SEARCH_RESULT_FOR_TABLE } from "../../context/constants";

const useHandleEditFormSubmit = () => {
  const navigate = useNavigate();
  const {
    dispatch,
    searchState: {
      editEntryResult: { _id, firstName, lastName, phoneNumber },
    },
  } = useContext(GlobalContext);

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
        dispatch({
          type: GET_SEARCH_RESULT_FOR_TABLE,
          payload: { tableData: [] },
        });
        navigate("/");
      };

      postDataToServer();
    }
  };

  return [handleEditFormSubmit];
};

export default useHandleEditFormSubmit;
