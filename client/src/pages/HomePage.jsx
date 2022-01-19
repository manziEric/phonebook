import React from "react";
import { Link } from "react-router-dom";

import DisplayTableData from "../components/displaySearchResult/DisplayTableData";
import Table from "../components/displaySearchResult/Table";
import InputButton from "../components/searchField/InputButton";
import InputField from "../components/searchField/InputField";
import SearchField from "../components/searchField/SearchField";

//TODO: create grid for table and searchfield
//TODO: set link to other pages
//TODO: search on type

function HomePage() {
  return (
    <div>
      <p>Add new entry</p>

      <SearchField>
        <InputField />
        <InputButton>Search</InputButton>
      </SearchField>

      <DisplayTableData>
        <Table />
      </DisplayTableData>
    </div>
  );
}

export default HomePage;
