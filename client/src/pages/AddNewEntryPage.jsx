import React from "react";
import { Link } from "react-router-dom";
import CreateForm from "../components/formEntry/CreateForm";
import FormButton from "../components/formEntry/FormButton";
import { FormEntry } from "../components/formEntry/FormEntry";
import FormInput from "../components/formEntry/FormInput";
import FormLabel from "../components/formEntry/FormLabel";
import FormPhoneNumberInput from "../components/formEntry/FormPhoneNumberInput";

const AddNewEntryPage = () => {
  const firstName = "firstName";
  const lastName = "lastName";
  const phoneNumber = "phoneNumber";
  return (
    <div className="container">
      <div className="links">
        <Link to="/">Home page</Link>
      </div>
      <p>Create new Entry</p>
      <FormEntry>
        <CreateForm>
          <FormLabel name={firstName}>First Name</FormLabel>
          <FormInput name={firstName} />
          <br />
          <FormLabel name={lastName}>Last Name</FormLabel>
          <FormInput name={lastName} />
          <br />
          <FormLabel name={phoneNumber}>Phone Number</FormLabel>
          <FormPhoneNumberInput name={phoneNumber} />
          <br />
          <FormButton>Submit</FormButton>
        </CreateForm>
      </FormEntry>
    </div>
  );
};

export default AddNewEntryPage;
