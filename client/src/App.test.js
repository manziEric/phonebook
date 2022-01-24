import React from "react";
import { render } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { GlobalProvider } from "./context/Provider";

describe("App testing the routes", () => {
  it("the page should route the HomePage", () => {
    const history = createMemoryHistory({ initialEntries: ["/"] });
    render(
      <GlobalProvider>
        <Router location={history.location} navigator={history}>
          <HomePage />
        </Router>
      </GlobalProvider>
    );

    expect(history.location.pathname).toBe("/");
  });
});
