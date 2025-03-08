import { TaskProp } from "../../store/userSlice/sliceTypes";

export interface taskPropTypes{
    title: string, 
    description: string, 
    id: string, 
    task: TaskProp, 
    handleRemoveTask: (id: string)=> void, 
    handleEditModal: (value: TaskProp)=> void
}