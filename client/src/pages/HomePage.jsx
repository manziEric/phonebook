import React, { useContext } from "react";
import { Link } from "react-router-dom";
import DisplayTableData from "../components/displaySearchResult/DisplayTableData";
import Table from "../components/displaySearchResult/Table";
import InputField from "../components/searchField/InputField";
import SearchField from "../components/searchField/SearchField";
import { GlobalContext } from "../context/Provider";

//TODO:[x] Validate phone number if it start with example +32...
//TODO:[] Create grid for table and searchfield in home.Page.jsx
//TODO:[x] Set link to other pages in HomePage, AddNewEntryPage, and EditEntryPage
//TODO:[x] Search on type in SearchField.js
//TODO:[x] Render Table on search in HomePage.jsx

//TODO:[] Make Input reusable component

//TODO:[] Style form in AddNewEntryPage.jsx
//TODO:[x] Add link to the "edit this entry" page in DisplayTableData.js
//TODO:[] Add style to display table in Table.jsx
//TODO:[] Romeve border style in Table.jsx

//TODO:[] Make searchForEntries in SearchField.js its own js file => code splitting
//TODO:[] Add dispatch error in fetchDataFromServer function in SearchField.js
//TODO:[] Clear data after Form submit

const HomePage = () => {
  const {
    searchState: { displayTable },
  } = useContext(GlobalContext);

  return (
    <div className="container">
      <div>
        <Link to="/newentry">Add new Entry</Link>
      </div>
      <br />
      <SearchField>
        <InputField />
      </SearchField>
      {displayTable ? (
        <DisplayTableData>
          <Table />
        </DisplayTableData>
      ) : null}
    </div>
  );
};

export default HomePage;
