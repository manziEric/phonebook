import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GET_SEARCH_RESULT_FOR_TABLE } from "../../context/constants";
import { GlobalContext } from "../../context/Provider";

const useHandleCreateFormSubmit = () => {
  const { dispatch } = useContext(GlobalContext);
  const navigate = useNavigate();

  const handleCreateFormSubmit = (e) => {
    e.preventDefault();

    const firstName = e.target.firstName.value;
    const lastName = e.target.lastName.value;
    const phoneNumber = e.target.phoneNumber.value;

    const postNewEntryToServer = { firstName, lastName, phoneNumber };

    const postDataToServer = async () => {
      await axios.post("/api/phonenumbers/createEntry", postNewEntryToServer);
      dispatch({
        type: GET_SEARCH_RESULT_FOR_TABLE,
        payload: { tableData: [] },
      });
      navigate("/");
    };
    postDataToServer();
  };

  return [handleCreateFormSubmit];
};

export default useHandleCreateFormSubmit;
