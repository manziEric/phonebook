import React from "react";
import { Link } from "react-router-dom";

import DisplayTableData from "../components/displaySearchResult/DisplayTableData";
import Table from "../components/displaySearchResult/Table";
import InputButton from "../components/searchField/InputButton";
import InputField from "../components/searchField/InputField";
import SearchField from "../components/searchField/SearchField";

//TODO:[] Validate phone number if it start with example +32...

//TODO:[] Create grid for table and searchfield in home.Page.jsx
//TODO:[] Set link to other pages in HomePage, AddNewEntryPage, and EditEntryPage
//TODO:[] Search on type in SearchField.js
//TODO:[] Render Table on search in HomePage.jsx

//TODO:[] Make Input reusable component

//TODO:[] Style form in AddNewEntryPage.jsx
//TODO:[] Add link to the "edit this entry" page in DisplayTableData.js
//TODO:[] Add style to display table in Table.jsx
//TODO:[] Romeve border style in Table.jsx

//TODO:[] Make searchForEntries in SearchField.js its own js file => code splitting
//TODO:[] Add dispatch error in fetchDataFromServer function in SearchField.js
//TODO:[] Clear data after Form submit

const HomePage = () => {
  return (
    <div className="container">
      <div>
        <Link to="/newentry">Add new Entry</Link>
      </div>
      <br />
      <SearchField>
        <InputField />
        <InputButton>Search</InputButton>
      </SearchField>

      <DisplayTableData>
        <Table />
      </DisplayTableData>
    </div>
  );
};

export default HomePage;
