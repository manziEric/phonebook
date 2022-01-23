import { Router } from "react-router-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { createMemoryHistory } from "history";
import HomePage from "./HomePage";
import { GlobalProvider } from "../context/Provider";

const renderWithHistory = () => {
  const history = createMemoryHistory();
  const view = render(
    <GlobalProvider>
      <Router location={history.location} navigator={history}>
        <HomePage />
      </Router>
    </GlobalProvider>
  );
  return { ...view, history };
};

describe("Home", () => {
  it("allows the user to navigate to the Add new entry page", () => {
    const { history } = renderWithHistory();
    fireEvent.click(screen.getByText("Add new Entry"));
    expect(history.location.pathname).toBe("/newentry");
  });
});
