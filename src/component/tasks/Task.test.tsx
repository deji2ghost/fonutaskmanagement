import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Tasks from "./tasks";
import { taskPropTypes } from "./taskTypes";

describe("Tasks Component", () => {
  const mockHandleEditModal = jest.fn();
  const mockHandleDeleteModal = jest.fn();
  const mockHandleTaskCompletion = jest.fn();
  const mockHandleRemoveTask = jest.fn();

  const taskProps: taskPropTypes = {
    id: "1",
    title: "Test Task",
    description: "This is a test task",
    task: { id: "1", title: "Test Task", description: "This is a test task", completed: false },
    completed: false,
    handleEditModal: mockHandleEditModal,
    handleDeleteModal: mockHandleDeleteModal,
    handleTaskCompletion: mockHandleTaskCompletion,
    handleRemoveTask: mockHandleRemoveTask,
  };

  it("renders the task component correctly", () => {
    render(<Tasks {...taskProps} />);
    
    expect(screen.getByText("Test Task")).toBeInTheDocument();
    expect(screen.getByText("This is a test task")).toBeInTheDocument();
    expect(screen.getByText("Active")).toBeInTheDocument();
  });
});
