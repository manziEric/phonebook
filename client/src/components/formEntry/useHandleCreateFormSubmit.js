import axios from "axios";
import { useNavigate } from "react-router-dom";

const useHandleCreateFormSubmit = () => {
  const navigate = useNavigate();

  const handleCreateFormSubmit = (e) => {
    e.preventDefault();

    const firstName = e.target.firstName.value;
    const lastName = e.target.lastName.value;
    const phoneNumber = e.target.phoneNumber.value;

    const postNewEntryToServer = { firstName, lastName, phoneNumber };

    const postDataToServer = async () => {
      await axios.post("/api/phonenumbers/createEntry", postNewEntryToServer);
      navigate("/");
    };
    postDataToServer();
  };

  return [handleCreateFormSubmit];
};

export default useHandleCreateFormSubmit;
