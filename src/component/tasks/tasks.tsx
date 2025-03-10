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

const Tasks: React.FC<taskPropTypes> = ({
  title,
  description,
  id,
  task,
  completed,
  handleEditModal,
  handleDeleteModal,
  handleTaskCompletion,
}) => {
  return (
    <TaskCard $completed={completed} key={id}>
      <CardHeader>
        <StatusWrapper
          onClick={() => handleTaskCompletion(id)}
          $completed={completed}
        >
          <StatusDot
            $completed={completed}
            onClick={() => handleTaskCompletion(id)}
          />
          <StatusText $completed={completed}>
            {completed ? "Completed" : "Active"}
          </StatusText>
        </StatusWrapper>
        <TaskActions>
          <IconButton onClick={() => handleDeleteModal(task)} color="red">
            <BiTrash />
            <span>Delete</span>
          </IconButton>
          <IconButton onClick={() => handleEditModal(task)} color="blue">
            <BiPen />
            <span>Edit</span>
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
