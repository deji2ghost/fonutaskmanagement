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
  const inputId = `${name}-input`;
  return (
    <InputWrapper>
      <CustomLabel htmlFor={inputId} label={label} />
      <InputComponent
        id={inputId}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
    </InputWrapper>
  );
};

export default CustomInput;
