export interface TaskProp{
    id: string,
    title: string,
    description: string,
    completed: boolean,
}

export interface TaskState {
  tasks: TaskProp[];
  status: "All" | "Completed" | "Active";
  showModal: boolean;
  showEditModal: boolean;
  showDeleteModal: boolean;
  taskForm: TaskProp;
  error: string,
  loading: boolean,
}