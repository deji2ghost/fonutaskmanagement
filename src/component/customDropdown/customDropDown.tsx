import { useEffect, useState } from "react";
import { DropdownContainer, DropdownItem, DropdownMenu } from "./dropdownStyles";
import CustomButton from "../customButton/customButton";
import { loadFromLocalStorage, saveToLocalStorage } from "../../utils/localstorage/localstorage";

interface DropdownButtonProps {
  options: string[];
  onSelect: (option: string) => void;
}

const CustomDropDown: React.FC<DropdownButtonProps> = ({
  options,
  onSelect,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("All");

  useEffect(() => {
    const savedOption = loadFromLocalStorage("selectedFilter");
    if (savedOption) {
      setSelectedOption(savedOption);
      onSelect(savedOption);
    }
  }, [onSelect]);

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    saveToLocalStorage("selectedFilter", option);
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <DropdownContainer>
      <CustomButton
        text={selectedOption}
        width="100%"
        onClick={() => setIsOpen(!isOpen)}
      />
      {isOpen && (
        <DropdownMenu>
          {options.map((option) => (
            <DropdownItem
              key={option}
              onClick={() => {
                handleSelect(option)
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
