import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { lazy, Suspense } from "react";

import {
  addTask,
  toggleModal,
  setTaskForm,
  toggleEditModal,
  updateTask,
} from "../store/userSlice/slice";
import { RootState } from "../store/store";

import HeroSection from "../component/template/heroSection/heroSection";
import CtaSection from "../component/template/ctaSection/ctaSection";
import CustomInput from "../component/customInput/customInput";
import CustomButton from "../component/customButton/customButton";
import { PageContainer, Wrapper } from "./HomeStyles";

const LazyModal = lazy(() => import("../component/modal/Modal"));

const Home = () => {
  const dispatch = useDispatch();
  const showModal = useSelector((state: RootState) => state.tasks.showModal);
  const showEditModal = useSelector((state: RootState) => state.tasks.showEditModal);
  const taskForm = useSelector((state: RootState) => state.tasks.taskForm);

  const handleModal = (open: boolean) => {
    dispatch(toggleModal(open));
    if (!open) resetForm();
  };

  const handleUpdateTask = () => {
    dispatch(updateTask(taskForm));
    handleEditModal(false);
  };

  const handleEditModal = (open: boolean) => {
    dispatch(toggleEditModal(open));
    if (!open) resetForm();
  };

  const resetForm = () => {
    dispatch(
      setTaskForm({ id: "", title: "", description: "", completed: false })
    );
    // setEditMode(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch(setTaskForm({ ...taskForm, [name]: value }));
  };

  const handleAddTask = () => {
    dispatch(
      addTask({
        id: uuidv4(),
        title: taskForm.title,
        description: taskForm.description,
        completed: taskForm.completed,
      })
    );
    handleModal(false);
    resetForm();
  };

  return (
    <Wrapper>
    <PageContainer>
      <CtaSection />
      <HeroSection />
      {showModal || showEditModal ? (
        <Suspense>
          
            <LazyModal
              isOpen={showModal}
              onClose={() => handleModal(false)}
              header="Add new Task"
              content={
                <div>
                  <CustomInput
                    label="Title"
                    type="text"
                    name="title"
                    value={taskForm.title}
                    onChange={handleChange}
                  />
                  <CustomInput
                    label="Description"
                    type="text"
                    name="description"
                    value={taskForm.description}
                    onChange={handleChange}
                  />
                </div>
              }
              footer={
                <div>
                  <CustomButton onClick={() => handleModal(false)} text="Cancel"/>
                  <CustomButton onClick={handleAddTask} text="Add Task"/>
                </div>
              }
            />

            <LazyModal
              isOpen={showEditModal}
              onClose={() => handleEditModal(false)}
              header="Edit Task"
              content={
                <div>
                  <CustomInput
                    label="Title"
                    type="text"
                    name="title"
                    value={taskForm.title}
                    onChange={handleChange}
                  />
                  <CustomInput
                    label="Description"
                    type="text"
                    name="description"
                    value={taskForm.description}
                    onChange={handleChange}
                  />
                </div>
              }
              footer={
                <div>
                  <CustomButton onClick={() => handleEditModal(false)} text="Cancel"/>
                  <CustomButton onClick={handleUpdateTask} text="Update Task"/>
                </div>
              }
            />
        </Suspense>
      ) : null}
    </PageContainer>
    </Wrapper>
  );
};

export default Home;
