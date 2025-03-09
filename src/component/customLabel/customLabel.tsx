import { labelProps } from "./labelProps"
import { StyledLabel } from "./LabelStyle"

const CustomLabel: React.FC<labelProps> = ({label}) => {
  return (
    <StyledLabel>{label}</StyledLabel>
  )
}

export default CustomLabel
