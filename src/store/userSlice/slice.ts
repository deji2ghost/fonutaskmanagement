import { createSlice } from "@reduxjs/toolkit";

import {
  loadFromLocalStorage,
  saveToLocalStorage,
} from "../../utils/localstorage/localstorage";
import { TaskState } from "./sliceTypes";
import { toast } from "sonner";

const initialState: TaskState = {
  tasks: loadFromLocalStorage("tasks") || [],
  status: loadFromLocalStorage("filterStatus") || "All",
  showModal: false,
  showEditModal: false,
  taskForm: { id: "", title: "", description: "", completed: false },
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
      saveToLocalStorage("tasks", state.tasks);
      toast.success("Task added successfully! ✅");
    },
    removeTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
      saveToLocalStorage("tasks", state.tasks);
      toast.error("Task deleted! ❌");
    },
    setTaskForm: (state, action) => {
        state.taskForm = action.payload;
      },
    setFilterStatus: (state, action) => {
      state.status = action.payload;
      saveToLocalStorage("filterStatus", action.payload);
    },
    updateTask: (state, action) => {
      const index = state.tasks.findIndex(
        (task) => task.id === action.payload.id
      );
      if (index !== -1) {
        state.tasks[index] = action.payload;
        saveToLocalStorage("tasks", state.tasks);
        toast.success("Task updated successfully! ✏️");
      }
    },
    toggleTaskCompletion: (state, action) => {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
        saveToLocalStorage("tasks", state.tasks);
        toast.info(
          task.completed
            ? "Task marked as completed! ✅"
            : "Task marked as active! 🔄"
        );
      }
    },
    toggleModal: (state, action) => {
      state.showModal = action.payload;
    },
    toggleEditModal: (state, action) => {
      state.showEditModal = action.payload;
    },
  },
});

export const { addTask, removeTask, setFilterStatus, toggleModal, toggleTaskCompletion, updateTask, setTaskForm, toggleEditModal } = taskSlice.actions;

export default taskSlice.reducer;
