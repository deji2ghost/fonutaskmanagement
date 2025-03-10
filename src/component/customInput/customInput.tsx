import CustomLabel from "../customLabel/customLabel";
import { InputComponent, InputWrapper } from "./InputStyles";
import { inputProps } from "./inputtypes";

const CustomInput: React.FC<inputProps> = ({
  label,
  type,
  name,
  value,
  onChange,
}) => {
  return (
    <InputWrapper>
      <CustomLabel label={label} />
      <InputComponent
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
    </InputWrapper>
  );
};

export default CustomInput;
