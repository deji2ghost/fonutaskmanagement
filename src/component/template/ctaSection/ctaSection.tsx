import { useDispatch } from "react-redux";

import { setFilterStatus, toggleModal } from "../../../store/userSlice/slice";
import { filterData } from "../../../../public/data/filterData";
import CustomDropDown from "../../customDropdown/customDropDown";
import CustomButton from "../../customButton/customButton";
import { Container } from "./ctaSectionStyle";

const CtaSection = () => {
  const dispatch = useDispatch();

  const handleFilter = (status: string) => {
    dispatch(setFilterStatus(status));
  };

  const handleModal = (open: boolean) => {
    dispatch(toggleModal(open));
    // if (!open) resetForm();
  };
  
  return (
    <Container>
      <h1>Task Management Tabs</h1>
      <CustomButton text="Add Task" onClick={() => handleModal(true)} />
      <CustomDropDown onSelect={handleFilter} options={filterData}/>
    </Container>
  );
};

export default CtaSection;
