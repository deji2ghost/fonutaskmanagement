import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; // Ensure this is imported
import CustomLabel from "./customLabel";

describe("CustomLabel Component", () => {
  test("renders the label with the correct text and htmlFor attribute", () => {
    const labelText = "Username";
    const htmlForValue = "username-input";

    render(<CustomLabel label={labelText} htmlFor={htmlForValue} />);

    const labelElement = screen.getByText(labelText);
    expect(labelElement).toBeInTheDocument();
    expect(labelElement).toHaveAttribute("for", htmlForValue);
  });
});
