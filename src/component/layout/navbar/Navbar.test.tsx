import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Navbar from "./navbar";

describe("Navbar Component", () => {
  test("renders the Navbar with text and image", () => {
    const mockText = "Welcome, User!";
    const mockPic = "/test-image.jpg"; // Mock image source

    render(<Navbar text={mockText} pic={mockPic} />);

    // Check if text appears in the document
    const textElement = screen.getByText(mockText);
    expect(textElement).toBeInTheDocument();

    // Check if image is rendered with correct src
    const imgElement = screen.getByRole("img");
    expect(imgElement).toHaveAttribute("src", mockPic);
  });
});
