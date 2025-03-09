import { MainButtonProps } from "./buttonProps"
import { Button } from "./buttonStyles"

const CustomButton: React.FC<MainButtonProps> = ({ text, onClick, width, bgColor, textColor}) => {
  return (
    <Button width={width} bgColor={bgColor} textColor={textColor} onClick={onClick}>
      {text}
    </Button>
  )
}

export default CustomButton
