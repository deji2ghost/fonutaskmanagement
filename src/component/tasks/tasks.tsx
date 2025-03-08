import { BiPen, BiTrash } from "react-icons/bi";
import { taskPropTypes } from "./taskTypes";
import {
  IconButton,
  StatusDot,
  TaskActions,
  TaskCard,
  TaskContent,
} from "./TaskStyles";

const Tasks: React.FC<taskPropTypes> = ({
  title,
  description,
  id,
  task,
  handleRemoveTask,
  handleEditModal,
}) => {
  return (
    <TaskCard key={id}>
      <TaskContent>
        <StatusDot completed={task.completed} />
        <h1>{title}</h1>
        <p>{description}</p>
      </TaskContent>
      <TaskActions>
        <IconButton onClick={() => handleRemoveTask(id)} color="red">
          <BiTrash />
        </IconButton>
        <IconButton onClick={() => handleRemoveTask(id)} color="blue">
          <BiPen onClick={() => handleEditModal(task)} />
        </IconButton>
      </TaskActions>
    </TaskCard>
  );
};

export default Tasks;
