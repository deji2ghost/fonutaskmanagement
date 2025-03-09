import { useDispatch } from "react-redux";

import { setFilterStatus, toggleModal } from "../../../store/userSlice/slice";
import { filterData } from "../../../../public/data/filterData";
import CustomDropDown from "../../customDropdown/customDropDown";
import CustomButton from "../../customButton/customButton";
import { ButtonWrapper, Container, CtaHeader, CtaParagraph, HeadContainer } from "./ctaSectionStyle";

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
      <HeadContainer>
        <CtaHeader>Task Management Tabs</CtaHeader>
        <CtaParagraph>Add/edit/remove Tasks below.</CtaParagraph>
      </HeadContainer>
      <ButtonWrapper>
        <CustomButton text="Add Task" onClick={() => handleModal(true)} />
        <CustomDropDown onSelect={handleFilter} options={filterData}/>
      </ButtonWrapper>
    </Container>
  );
};

export default CtaSection;
