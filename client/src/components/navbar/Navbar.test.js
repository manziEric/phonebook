import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Navbar from "./Navbar";

describe("Check if navbar is renderd", () => {
  it("Should render", () => {
    render(<Navbar />);
    const phonebook = screen.getAllByText("Phonebook");
    expect(phonebook).toBeTruthy();
  });
});
