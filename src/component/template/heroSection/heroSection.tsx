import { useDispatch, useSelector } from "react-redux";

import { TaskProp } from "../../../store/userSlice/sliceTypes";

import Picture from "../../../../public/images/Group 273.svg";
import {
  removeTask,
  setTaskForm,
  toggleDeleteModal,
  toggleEditModal,
} from "../../../store/userSlice/slice";
import { RootState } from "../../../store/store";
import Tasks from "../../tasks/tasks";
import { HeroWrapper, NoTaskWrapper, TaskWrapper } from "./HeroStyles";
import Modal from "../../modal/Modal";
import CustomButton from "../../customButton/customButton";

const HeroSection = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const taskForm = useSelector((state: RootState) => state.tasks.taskForm);
  const showDeleteModal = useSelector((state: RootState) => state.tasks.showDeleteModal);
  const filterStatus = useSelector((state: RootState) => state.tasks.status);

  const handleRemoveTask = (taskId: string) => {
    dispatch(removeTask(taskId));
    handleCloseDeleteModal()
  };

  const handleEditModal = (task: TaskProp) => {
    dispatch(toggleEditModal(true));
    dispatch(
      setTaskForm({
        id: task.id,
        description: task.description,
        title: task.title,
        completed: task.completed,
      })
    );
  };

  const handleDeleteModal = (task: TaskProp) => {
    dispatch(toggleDeleteModal(true));
    dispatch(
      setTaskForm({
        id: task.id,
        description: task.description,
        title: task.title,
        completed: task.completed,
      })
    );
  };

  const handleCloseDeleteModal = () => {
    dispatch(toggleDeleteModal(false));
    dispatch(
    setTaskForm({
      id: "",
      description: "",
      title: "",
      completed: "",
    })
  )
  }

  const filteredTasks = tasks.filter((task: TaskProp) => {
    if (filterStatus === "All") return true;
    if (filterStatus === "Completed") return task.completed;
    if (filterStatus === "Active") return !task.completed;
    return true;
  });

  return (
    <HeroWrapper>
      {filteredTasks.length < 1 ? (
        <NoTaskWrapper>
          <img src={Picture} />
          <h1>Let’s get you started</h1>
          <p>Use the “Add new Task” button to get started. Once you have more than one link, you can reorder and edit them. We’re here to help you manage your tasks</p>
        </NoTaskWrapper>
      ) : tasks.length < 1 ? (
        <NoTaskWrapper>
          <img src={Picture} />
          <h1>Let’s get you started</h1>
          <p>Use the “Add new Task” button to get started. Once you have more than one link, you can reorder and edit them. We’re here to help you manage your tasks</p>
        </NoTaskWrapper>
      ) : (
        <TaskWrapper>
          {filteredTasks.map((task: TaskProp) => (
            <Tasks
              key={task.id}
              description={task.description}
              title={task.title}
              id={task.id}
              handleEditModal={handleEditModal}
              handleRemoveTask={handleRemoveTask}
              handleDeleteModal={handleDeleteModal}
              task={task}
            />
          ))}
        </TaskWrapper>
      )}
      <Modal
        isOpen={showDeleteModal}
        onClose={handleCloseDeleteModal}
        header="Delete Task"
        content={<p>Are you sure you want to delete this task</p>}
        footer={
          <>
            <CustomButton onClick={handleCloseDeleteModal} text="No" />
            <CustomButton onClick={() => handleRemoveTask(taskForm.id)} text="Yes" />
          </>
        }
      />
    </HeroWrapper>
  );
};

export default HeroSection;
