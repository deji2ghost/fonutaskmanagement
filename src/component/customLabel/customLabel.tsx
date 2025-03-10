import { labelProps } from "./labelProps";
import { StyledLabel } from "./LabelStyle";

const CustomLabel: React.FC<labelProps> = ({ label, htmlFor }) => {
  return <StyledLabel htmlFor={htmlFor}>{label}</StyledLabel>;
};

export default CustomLabel;
