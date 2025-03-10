import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import CustomButton from "./customButton";

describe("CustomButton Component", () => {
  test("renders button with text", () => {
    render(<CustomButton text="Click Me" onClick={() => {}} />);
    
    expect(screen.getByText("Click Me")).toBeInTheDocument();
  });

  test("calls onClick when clicked", () => {
    const handleClick = jest.fn();
    render(<CustomButton text="Click Me" onClick={handleClick} />);
    
    const button = screen.getByText("Click Me");
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("renders with a dropdown and icon", () => {
    render(<CustomButton text="Menu" dropdown={true} icon={<span>🔽</span>} onClick={() => {}} />);
    
    expect(screen.getByText("Menu")).toBeInTheDocument();
    expect(screen.getByText("🔽")).toBeInTheDocument();
  });
});