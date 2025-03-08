import { MainButtonProps } from "./buttonProps"
import { Button } from "./buttonStyles"

const CustomButton: React.FC<MainButtonProps> = ({ text, onClick}) => {
  return (
    <Button onClick={onClick}>
      {text}
    </Button>
  )
}

export default CustomButton
