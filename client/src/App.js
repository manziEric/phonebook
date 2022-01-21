import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddNewEntryPage from "./pages/AddNewEntryPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/newentry" element={<AddNewEntryPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
