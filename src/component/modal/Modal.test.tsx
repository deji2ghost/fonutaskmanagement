import { render, fireEvent, screen } from "@testing-library/react";

import Modal from "./Modal";

describe("Modal Component", () => {
  const mockOnClose = jest.fn();
  const defaultProps = {
    isOpen: true,
    onClose: mockOnClose,
    header: "Test Modal",
    content: <p>This is the modal content</p>,
    footer: <div>This is the modal footer</div>
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("calls onClose when clicking the overlay", () => {
    render(<Modal {...defaultProps} />);

    const overlay = screen.getByTestId("modal-overlay");

    fireEvent.click(overlay);

    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  test("does not close modal when clicking inside the modal", () => {
    render(<Modal {...defaultProps} />);

    const modalContainer = screen.getByTestId("modal-container");

    fireEvent.click(modalContainer);

    expect(mockOnClose).not.toHaveBeenCalled();
  });
});
