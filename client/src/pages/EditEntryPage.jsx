import React, { useContext } from "react";
import { Link } from "react-router-dom";
import EditForm from "../components/formEntry/EditForm";
import FormButton from "../components/formEntry/FormButton";
import { FormEntry } from "../components/formEntry/FormEntry";
import FormInput from "../components/formEntry/FormInput";
import FormLabel from "../components/formEntry/FormLabel";
import FormPhoneNumberInput from "../components/formEntry/FormPhoneNumberInput";
import { GlobalContext } from "../context/Provider";
import "../styles/EditEntryPage.css";

const EditEntryPage = () => {
  const {
    searchState: {
      editEntryResult: { firstName, lastName, phoneNumber },
    },
  } = useContext(GlobalContext);

  const setFirstName = "firstName";
  const setLastName = "lastName";
  const setPhoneNumber = "phoneNumber";

  return (
    <div className="container">
      <div className="links">
        <Link to="/">Home page</Link>
        <Link to="/newentry">Add new Entry</Link>
      </div>
      <p>Edit Entry</p>
      <FormEntry>
        <EditForm>
          <FormLabel name={setFirstName}>First Name</FormLabel>
          <FormInput
            name={setFirstName}
            placeholder={firstName}
            required={false}
          />

          <FormLabel name={setLastName}>Last Name</FormLabel>
          <FormInput
            name={setLastName}
            placeholder={lastName}
            required={false}
          />

          <FormLabel name={setPhoneNumber}>Phone Number</FormLabel>
          <FormPhoneNumberInput
            name={setPhoneNumber}
            placeholder={phoneNumber}
            required={false}
          />

          <FormButton>Submit</FormButton>
        </EditForm>
      </FormEntry>
    </div>
  );
};

export default EditEntryPage;
