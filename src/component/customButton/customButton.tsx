import { MainButtonProps } from "./buttonProps";
import { Button } from "./buttonStyles";

const CustomButton: React.FC<MainButtonProps> = ({
  text,
  onClick,
  width,
  bgColor,
  textColor,
  border,
  dropdown,
  icon,
  justify,
}) => {
  return (
    <Button
      $width={width}
      $bgColor={bgColor}
      $textColor={textColor}
      $border={border}
      $justify={justify}
      onClick={onClick}
    >
      {dropdown ? (
        <>
        {text}
        {icon}
        </>
      ) : (
        text
      )}
    </Button>
  );
};

export default CustomButton;
