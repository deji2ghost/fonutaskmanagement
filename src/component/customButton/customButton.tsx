import { BiChevronDown, BiChevronUp } from "react-icons/bi"
import { MainButtonProps } from "./buttonProps"
import { Button } from "./buttonStyles"

const CustomButton: React.FC<MainButtonProps> = ({ text, onClick, width, bgColor, textColor, border, dropdown, isOpen}) => {
  return (
    <Button width={width} bgColor={bgColor} textColor={textColor} border={border} onClick={onClick}>
      {text} {dropdown && ( isOpen ? <BiChevronUp /> : <BiChevronDown /> )}
    </Button>
  )
}

export default CustomButton
