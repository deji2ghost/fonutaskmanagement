import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { lazy, Suspense, useCallback, useMemo } from "react";

import {
  addTask,
  toggleModal,
  setTaskForm,
  toggleEditModal,
  updateTask,
  setError,
  setFilterStatus,
} from "../store/userSlice/slice";
import { RootState } from "../store/store";

import HeroSection from "../component/template/heroSection/heroSection";
import CtaSection from "../component/ctaSection/ctaSection";
import CustomInput from "../component/customInput/customInput";
import CustomButton from "../component/customButton/customButton";
import {
  CustomInputWrapper,
  ErrorTag,
  PageContainer,
  Wrapper,
} from "./HomeStyles";
import CustomDropDown from "../component/customDropdown/customDropDown";
import { filterData } from "../../public/data/filterData";

const LazyModal = lazy(() => import("../component/modal/Modal"));

const Home = () => {
  const dispatch = useDispatch();
  const showModal = useSelector((state: RootState) => state.tasks.showModal);
  const showEditModal = useSelector(
    (state: RootState) => state.tasks.showEditModal
  );
  const taskForm = useSelector((state: RootState) => state.tasks.taskForm);
  const error = useSelector((state: RootState) => state.tasks.error);

  const handleModal = useCallback(
    (open: boolean) => {
      dispatch(toggleModal(open));
      if (!open) resetForm();
    },
    [dispatch]
  );

  const handleEditModal = useCallback(
    (open: boolean) => {
      dispatch(toggleEditModal(open));
      if (!open) resetForm();
    },
    [dispatch]
  );

  const handleUpdateTask = useCallback(() => {
    dispatch(updateTask(taskForm));
    handleEditModal(false);
  }, [dispatch, taskForm, handleEditModal]);

  const resetForm = useCallback(() => {
    dispatch(
      setTaskForm({ id: "", title: "", description: "", completed: false })
    );
    dispatch(setError(""));
  }, [dispatch]);

  const handleFilter = useCallback(
    (status: string) => {
      dispatch(setFilterStatus(status));
    },
    [dispatch]
  );

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      dispatch(setTaskForm({ ...taskForm, [name]: value }));
      dispatch(setError(""));
    },
    [dispatch, taskForm]
  );

  const handleAddTask = useCallback(() => {
    
    const newTask = {
      id: uuidv4(),
      title: taskForm.title,
      description: taskForm.description,
      completed: false,
    };

    dispatch(addTask(newTask));
    if (!taskForm.title.trim() || !taskForm.description.trim()) return;
    handleModal(false);
    resetForm();
  }, [dispatch, taskForm, handleModal, resetForm]);

  const modalContent = useMemo(
    () => (
      <CustomInputWrapper>
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
        {error && <ErrorTag>{error}</ErrorTag>}
      </CustomInputWrapper>
    ),
    [taskForm, handleChange, error]
  );

  const modalFooter = useMemo(
    () => (
      <>
        <CustomButton
          bgColor="transparent"
          textColor="#633CFF"
          border="1px solid #633CFF"
          onClick={() => handleModal(false)}
          text="Cancel"
        />
        <CustomButton onClick={handleAddTask} text="Add Task" />
      </>
    ),
    [handleModal, handleAddTask]
  );

  const editModalFooter = useMemo(
    () => (
      <>
        <CustomButton
          bgColor="transparent"
          textColor="#633CFF"
          border="1px solid #633CFF"
          onClick={() => handleEditModal(false)}
          text="Cancel"
        />
        <CustomButton onClick={handleUpdateTask} text="Update Task" />
      </>
    ),
    [handleEditModal, handleUpdateTask]
  );

  return (
    <Wrapper>
      <PageContainer>
        <CtaSection
          header="Task Management Tabs"
          paragraph="Add/edit/remove Tasks below."
          footer={
            <>
              <CustomButton text="Add Task" onClick={() => handleModal(true)} />
              <CustomDropDown onSelect={handleFilter} options={filterData} />
            </>
          }
        />
        <HeroSection />
        {showModal || showEditModal ? (
          <Suspense>
            <LazyModal
              isOpen={showModal}
              onClose={() => handleModal(false)}
              header="Add new Task"
              content={modalContent}
              footer={modalFooter}
            />

            <LazyModal
              isOpen={showEditModal}
              onClose={() => handleEditModal(false)}
              header="Edit Task"
              content={modalContent}
              footer={editModalFooter}
            />
          </Suspense>
        ) : null}
      </PageContainer>
    </Wrapper>
  );
};

export default Home;
