import { useDispatch, useSelector } from "react-redux";

import { TaskProp } from "../../../store/userSlice/sliceTypes";

import Picture from "../../../../public/images/Group 273.svg";
import {
  removeTask,
  setLoading,
  setTaskForm,
  toggleDeleteModal,
  toggleEditModal,
  toggleTaskCompletion,
} from "../../../store/userSlice/slice";
import { RootState } from "../../../store/store";
import Tasks from "../../tasks/tasks";
import { HeroWrapper, NoTaskWrapper, TaskWrapper } from "./HeroStyles";
import Modal from "../../modal/Modal";
import CustomButton from "../../customButton/customButton";
import { useCallback, useEffect, useMemo } from "react";

const HeroSection = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const taskForm = useSelector((state: RootState) => state.tasks.taskForm);
  const showDeleteModal = useSelector(
    (state: RootState) => state.tasks.showDeleteModal
  );
  const loading = useSelector((state: RootState) => state.tasks.loading);
  const filterStatus = useSelector((state: RootState) => state.tasks.status);

  const handleRemoveTask = useCallback(
    (taskId: string) => {
      dispatch(removeTask(taskId));
      handleCloseDeleteModal();
    },
    [dispatch]
  );

  const handleEditModal = useCallback(
    (task: TaskProp) => {
      dispatch(toggleEditModal(true));
      dispatch(setTaskForm(task));
    },
    [dispatch]
  );

  const handleDeleteModal = useCallback(
    (task: TaskProp) => {
      dispatch(toggleDeleteModal(true));
      dispatch(setTaskForm(task));
    },
    [dispatch]
  );

  const handleCloseDeleteModal = useCallback(() => {
    dispatch(toggleDeleteModal(false));
    dispatch(
      setTaskForm({ id: "", description: "", title: "", completed: "" })
    );
  }, [dispatch]);

  const handleTaskCompletion = useCallback(
    (id: string) => {
      dispatch(toggleTaskCompletion(id));
    },
    [dispatch]
  );

  useEffect(() => {
    setTimeout(() => {
      dispatch(setLoading(false));
    }, 3000);
  }, []);

  const filteredTasks = useMemo(() => {
    return tasks.filter((task: TaskProp) => {
      if (filterStatus === "All") return true;
      if (filterStatus === "Completed") return task.completed;
      if (filterStatus === "Active") return !task.completed;
      return true;
    });
  }, [tasks, filterStatus]);

  return (
    <HeroWrapper>
      {loading ? (
        <p>Loading...</p>
      ) : filteredTasks.length < 1 ? (
        <NoTaskWrapper>
          <img src={Picture} />
          <h1>Let’s get you started</h1>
          <p>
            Use the “Add new Task” button to get started. Once you have more
            than one link, you can reorder and edit them. We’re here to help you
            manage your tasks
          </p>
        </NoTaskWrapper>
      ) : tasks.length < 1 ? (
        <NoTaskWrapper>
          <img src={Picture} />
          <h1>Let’s get you started</h1>
          <p>
            Use the “Add new Task” button to get started. Once you have more
            than one link, you can reorder and edit them. We’re here to help you
            manage your tasks
          </p>
        </NoTaskWrapper>
      ) : (
        <TaskWrapper>
          {filteredTasks.map((task: TaskProp) => (
            <Tasks
              completed={task.completed}
              key={task.id}
              description={task.description}
              title={task.title}
              id={task.id}
              handleEditModal={handleEditModal}
              handleRemoveTask={handleRemoveTask}
              handleDeleteModal={handleDeleteModal}
              handleTaskCompletion={handleTaskCompletion}
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
            <CustomButton
              onClick={() => handleRemoveTask(taskForm.id)}
              text="Yes"
            />
          </>
        }
      />
    </HeroWrapper>
  );
};

export default HeroSection;
