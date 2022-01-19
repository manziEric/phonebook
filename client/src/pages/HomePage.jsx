import React from "react";
import { Link } from "react-router-dom";
import InputButton from "../components/searchField/InputButton";
import InputField from "../components/searchField/InputField";
import SearchField from "../components/searchField/SearchField";

function HomePage() {
  return (
    <div>
      <p>Add new entry</p>

      <SearchField>
        <InputField />
        <InputButton>Search</InputButton>
      </SearchField>
    </div>
  );
}

export default HomePage;
