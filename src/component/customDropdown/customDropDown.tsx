import { useEffect, useState } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

import CustomButton from "../customButton/customButton";
import {
  DropdownContainer,
  DropdownItem,
  DropdownMenu,
} from "./dropdownStyles";
import {
  loadFromLocalStorage,
  saveToLocalStorage,
} from "../../utils/localstorage/localstorage";

interface DropdownButtonProps {
  options: string[];
  onSelect: (option: string) => void;
  filterStatus: string
}

const CustomDropDown: React.FC<DropdownButtonProps> = ({
  options,
  onSelect,
  filterStatus,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string>(() => {
    const savedOption = loadFromLocalStorage("selectedFilter");
    return savedOption && savedOption.length ? savedOption : filterStatus;
  });

  useEffect(() => {
    onSelect(selectedOption);
  }, [selectedOption]);

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    saveToLocalStorage("selectedFilter", option);
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <DropdownContainer>
      <CustomButton
        dropdown
        text={selectedOption}
        icon={isOpen ? <BiChevronUp /> : <BiChevronDown />}
        width="100%"
        justify="space-between"
        bgColor="transparent"
        textColor="#633CFF"
        border="1px solid #633CFF"
        onClick={() => setIsOpen(!isOpen)}
      />
      {isOpen && (
        <DropdownMenu>
          {options.map((option) => (
            <DropdownItem
              key={option}
              onClick={() => {
                handleSelect(option);
              }}
            >
              {option}
            </DropdownItem>
          ))}
        </DropdownMenu>
      )}
    </DropdownContainer>
  );
};

export default CustomDropDown;
