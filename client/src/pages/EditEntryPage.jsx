import React, { useContext } from "react";
import { Link } from "react-router-dom";
import EditForm from "../components/formEntry/EditForm";
import FormButton from "../components/formEntry/FormButton";
import { FormEntry } from "../components/formEntry/FormEntry";
import FormInput from "../components/formEntry/FormInput";
import FormLabel from "../components/formEntry/FormLabel";
import FormPhoneNumberInput from "../components/formEntry/FormPhoneNumberInput";
import { GlobalContext } from "../context/Provider";

const EditEntryPage = () => {
  const {
    searchState: {
      editEntryResult: { firstName, lastName, phoneNumber },
    },
  } = useContext(GlobalContext);

  return (
    <div className="container">
      <div>
        <Link to="/">Home page</Link>
        <Link to="/newentry">Add new Entry</Link>
      </div>

      <br />
      <p>Edit Entry</p>
      <FormEntry>
        <EditForm>
          <FormLabel>First Name</FormLabel>
          <FormInput
            name={"firstName"}
            placeholder={firstName}
            required={false}
          />
          <br />
          <FormLabel>Last Name</FormLabel>
          <FormInput
            name={"lastName"}
            placeholder={lastName}
            required={false}
          />
          <br />
          <FormLabel>Phone Number</FormLabel>
          <FormPhoneNumberInput
            name={"phoneNumber"}
            placeholder={phoneNumber}
            required={false}
          />
          <br />
          <FormButton>Submit</FormButton>
        </EditForm>
      </FormEntry>
    </div>
  );
};

export default EditEntryPage;
