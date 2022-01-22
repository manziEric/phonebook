import React from "react";
import { Link } from "react-router-dom";
import CreateForm from "../components/formEntry/CreateForm";
import FormButton from "../components/formEntry/FormButton";
import { FormEntry } from "../components/formEntry/FormEntry";
import FormInput from "../components/formEntry/FormInput";
import FormLabel from "../components/formEntry/FormLabel";
import FormPhoneNumberInput from "../components/formEntry/FormPhoneNumberInput";

const AddNewEntryPage = () => {
  return (
    <div className="container">
      <div>
        <Link to="/">Home page</Link>
      </div>

      <br />
      <p>Create new Entry</p>
      <FormEntry>
        <CreateForm>
          <FormLabel>First Name</FormLabel>
          <FormInput name={"firstName"} />
          <br />
          <FormLabel>Last Name</FormLabel>
          <FormInput name={"lastName"} />
          <br />
          <FormLabel>Phone Number</FormLabel>
          <FormPhoneNumberInput name={"phoneNumber"} />
          <br />
          <FormButton>Submit</FormButton>
        </CreateForm>
      </FormEntry>
    </div>
  );
};

export default AddNewEntryPage;
