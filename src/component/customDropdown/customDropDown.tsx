import { useState } from "react";
import { DropdownContainer, DropdownItem, DropdownMenu } from "./dropdownStyles";
import CustomButton from "../customButton/customButton";

interface DropdownButtonProps {
  options: string[];
  onSelect: (option: string) => void;
}

const CustomDropDown: React.FC<DropdownButtonProps> = ({
  options,
  onSelect,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DropdownContainer>
      <CustomButton
        text="All"
        onClick={() => setIsOpen(!isOpen)}
      />
      {isOpen && (
        <DropdownMenu>
          {options.map((option) => (
            <DropdownItem
              key={option}
              onClick={() => {
                onSelect(option);
                setIsOpen(false);
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
