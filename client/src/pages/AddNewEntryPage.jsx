import React from "react";
import { Link } from "react-router-dom";
import Form from "../components/formEntry/Form";
import FormButton from "../components/formEntry/FormButton";
import { FormEntry } from "../components/formEntry/FormEntry";
import FormInput from "../components/formEntry/FormInput";
import FormLabel from "../components/formEntry/FormLabel";

const AddNewEntryPage = () => {
  return (
    <div className="container">
      <div>
        <Link to="/">Home page</Link>
      </div>

      <br />
      <p>Create new Entry</p>
      <FormEntry>
        <Form>
          <FormLabel>First Name</FormLabel>
          <FormInput name={"firstName"} />
          <br />
          <FormLabel>Last Name</FormLabel>
          <FormInput name={"lastName"} />
          <br />
          <FormLabel>Phone Number</FormLabel>
          <FormInput name={"phoneNumber"} />
          <br />
          <FormButton>Submit</FormButton>
        </Form>
      </FormEntry>
    </div>
  );
};

export default AddNewEntryPage;
