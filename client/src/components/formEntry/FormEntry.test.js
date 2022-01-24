import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import FormInput from "./FormInput";

describe("Check if input field of the form is renderd", () => {
  it("input field should be present on page", () => {
    render(<FormInput />);
    expect(
      screen.getByRole("textbox", { Name: "firstName" })
    ).toBeInTheDocument();
  });
});
