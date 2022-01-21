import React from "react";
import { Link } from "react-router-dom";

import DisplayTableData from "../components/displaySearchResult/DisplayTableData";
import Table from "../components/displaySearchResult/Table";
import InputButton from "../components/searchField/InputButton";
import InputField from "../components/searchField/InputField";
import SearchField from "../components/searchField/SearchField";

//TODO:[] Validate phone number if it start with example +32...

//TODO:[] create grid for table and searchfield in home.Page.jsx
//TODO:[] set link to other pages in HomePage, AddNewEntryPage, and EditEntryPage
//TODO:[] search on type in SearchField.js
//TODO:[] render Table on search in HomePage.jsx

//TODO:[] Make Input reusable component

//TODO:[] style form in AddNewEntryPage.jsx
//TODO:[] add link to the "edit this entry" page in DisplayTableData.js
//TODO:[] add style to display table in Table.jsx
//TODO:[] romeve border style in Table.jsx

//TODO:[] make searchForEntries in SearchField.js its own js file => code splitting
//TODO:[] add dispatch error in fetchDataFromServer function in SearchField.js

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
