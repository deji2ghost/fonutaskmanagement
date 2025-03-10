import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import {
  TaskCard,
  CardHeader,
  TitleBox,
  StatusText,
  TaskActions,
  IconButton,
  Description,
  Title,
} from "../tasks/TaskStyles";
import { TaskWrapper } from "../template/heroSection/HeroStyles";
import { SkeletonTypes } from "./skeletonTypes";

const TaskSkeleton: React.FC<SkeletonTypes> = ({ count }) => {
  return (
    <TaskWrapper>
      {Array.from({ length: count ?? 3 }).map((_, index) => (
        <TaskCard key={index} $completed={false}>
          <CardHeader>
              <StatusText $completed={false}>
                <Skeleton width={80} />
              </StatusText>
            <TaskActions>
              <IconButton color="red">
                <Skeleton circle width={24} height={24} />
              </IconButton>
              <IconButton color="blue">
                <Skeleton circle width={24} height={24} />
              </IconButton>
            </TaskActions>
          </CardHeader>
          <TitleBox>
            <Title>
              <Skeleton width={80} height={24} />
            </Title>
            <Description>
              <Skeleton width={80} height={24} />
            </Description>
          </TitleBox>
        </TaskCard>
      ))}
    </TaskWrapper>
  );
};

export default TaskSkeleton;
