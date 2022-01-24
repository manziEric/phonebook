import React, { useContext } from "react";
import { Link } from "react-router-dom";
import DisplayTableData from "../components/displaySearchResult/DisplayTableData";
import Table from "../components/displaySearchResult/Table";
import InputField from "../components/searchField/InputField";
import SearchField from "../components/searchField/SearchField";
import { GlobalContext } from "../context/Provider";
import "../styles/HomePage.css";

const HomePage = () => {
  const {
    searchState: { displayTable },
  } = useContext(GlobalContext);

  return (
    <div className="container">
      <div className="links">
        <Link to="/newentry">Add new Entry</Link>
      </div>

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
