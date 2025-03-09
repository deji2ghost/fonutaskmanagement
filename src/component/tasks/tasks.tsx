import { BiPen, BiTrash } from "react-icons/bi";
import { taskPropTypes } from "./taskTypes";
import {
  CardHeader,
  Description,
  IconButton,
  StatusDot,
  StatusText,
  StatusWrapper,
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
  handleEditModal,
  handleDeleteModal
}) => {
  const dispatch = useDispatch();

  const handleTaskCompletion = (id: string) => {
    dispatch(toggleTaskCompletion(id));
  };

  return (
    <TaskCard completed={task.completed} key={id}>
      <CardHeader>
        <StatusWrapper
          onClick={() => handleTaskCompletion(id)}
          completed={task.completed}
        >
          <StatusDot
            completed={task.completed}
            onClick={() => handleTaskCompletion(id)}
          />
          <StatusText completed={task.completed}>
            {task.completed ? "Completed" : "Active"}
          </StatusText>
        </StatusWrapper>
        <TaskActions>
          <IconButton onClick={() => handleDeleteModal(task)} color="red">
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
