import CustomLabel from '../customLabel/customLabel'
import { inputProps } from './inputtypes'

const CustomInput: React.FC<inputProps> = ({label, type, name, value, onChange}) => {
  return (
    <div>
      <CustomLabel label={label}/>
      <input type={type} name={name} value={value} onChange={onChange}/> 
    </div>
  )
}

export default CustomInput
