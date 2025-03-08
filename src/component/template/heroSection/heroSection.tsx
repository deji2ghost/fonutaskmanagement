import { useDispatch, useSelector } from "react-redux";

import { TaskProp } from "../../../store/userSlice/sliceTypes";

import {
  removeTask,
  setTaskForm,
  toggleEditModal,
} from "../../../store/userSlice/slice";
import { RootState } from "../../../store/store";
import Tasks from "../../tasks/tasks";
import { HeroWrapper } from "./HeroStyles";

const HeroSection = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const filterStatus = useSelector((state: RootState) => state.tasks.status);

  const handleRemoveTask = (taskId: string) => {
    dispatch(removeTask(taskId));
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

  const filteredTasks = tasks.filter((task: TaskProp) => {
    if (filterStatus === "All") return true;
    if (filterStatus === "Completed") return task.completed;
    if (filterStatus === "Active") return !task.completed;
    return true;
  });

  return (
    <HeroWrapper>
      {filteredTasks.length < 1 ? (
        <p>No tasks available, Click on all to view all task</p>
      ) : tasks.length < 1 ? (
        <p>Please click on the button on the top to add new task</p>
      ) : (
        filteredTasks.map((task: TaskProp) => (
          <Tasks
            key={task.id}
            description={task.description}
            title={task.title}
            id={task.id}
            handleEditModal={handleEditModal}
            handleRemoveTask={handleRemoveTask}
            task={task}
          />
        ))
      )}
    </HeroWrapper>
  );
};

export default HeroSection;
