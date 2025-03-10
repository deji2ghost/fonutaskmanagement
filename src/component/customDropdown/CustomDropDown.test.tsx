import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import CustomDropDown from "./customDropDown";
import * as localStorageUtils from "../../utils/localstorage/localstorage";

const options = ["Option 1", "Option 2", "Option 3"];
const mockOnSelect = jest.fn();

describe("CustomDropDown Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.spyOn(localStorageUtils, "loadFromLocalStorage").mockReturnValue(null);
    jest.spyOn(localStorageUtils, "saveToLocalStorage");
  });

  test("closes dropdown after selecting an option", async () => {
    render(<CustomDropDown options={options} onSelect={mockOnSelect} />);

    fireEvent.click(screen.getByText("All"));
    fireEvent.click(screen.getByText("Option 1"));

    console.log("Dropdown should be closed now");

    await waitFor(() => {
      expect(screen.queryByRole("listbox")).not.toBeInTheDocument();
    });
  });
});
