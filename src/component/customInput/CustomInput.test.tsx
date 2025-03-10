import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import CustomInput from "./customInput";

describe("CustomInput Component", () => {
  test("renders input with correct label", () => {
    render(<CustomInput label="Username" type="text" name="username" value="" onChange={() => {}} />);
    
    expect(screen.getByLabelText("Username")).toBeInTheDocument();
  });

  test("renders input with correct type and name", () => {
    render(<CustomInput label="Password" type="password" name="password" value="" onChange={() => {}} />);
    
    const input = screen.getByLabelText("Password");
    expect(input).toHaveAttribute("type", "password");
    expect(input).toHaveAttribute("name", "password");
  });

  test("calls onChange when input value changes", () => {
    const handleChange = jest.fn();
    render(<CustomInput label="Email" type="email" name="email" value="" onChange={handleChange} />);
    
    const input = screen.getByLabelText("Email");
    fireEvent.change(input, { target: { value: "test@example.com" } });

    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith(expect.any(Object));
  });
});