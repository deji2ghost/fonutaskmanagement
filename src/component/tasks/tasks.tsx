import { BiPen, BiTrash } from "react-icons/bi";
import { taskPropTypes } from "./taskTypes";
import {
  CardHeader,
  Description,
  IconButton,
  StatusDot,
  TaskActions,
  TaskCard,
  Title,
  TitleBox,
} from "./TaskStyles";
import { useDispatch } from "react-redux";
import { toggleTaskCompletion } from "../../store/userSlice/slice";

const Tasks: React.FC<taskPropTypes> = ({
  title,
  description,
  id,
  task,
  handleRemoveTask,
  handleEditModal,
}) => {
  const dispatch = useDispatch()

  const handleTaskCompletion = (id: string) => {
    dispatch(toggleTaskCompletion(id))
  }

  return (
    <TaskCard completed={task.completed} key={id}>
      <CardHeader>
        <StatusDot
          completed={task.completed}
          onClick={() => handleTaskCompletion(id)}
          style={{ cursor: "pointer" }}
        />
        <TaskActions>
          <IconButton onClick={() => handleRemoveTask(id)} color="red">
            <BiTrash />
          </IconButton>
          <IconButton onClick={() => handleEditModal(task)} color="blue">
            <BiPen />
          </IconButton>
        </TaskActions>
      </CardHeader>
      <TitleBox>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </TitleBox>
    </TaskCard>
  );
};

export default Tasks;
