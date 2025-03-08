import { createSlice } from "@reduxjs/toolkit";

import {
  loadFromLocalStorage,
  saveToLocalStorage,
} from "../../utils/localstorage/localstorage";
import { TaskState } from "./sliceTypes";

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
    },
    removeTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
      saveToLocalStorage("tasks", state.tasks);
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
      }
    },
    toggleTaskCompletion: (state, action) => {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
        saveToLocalStorage("tasks", state.tasks);
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
