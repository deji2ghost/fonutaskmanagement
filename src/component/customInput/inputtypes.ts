export interface inputProps{
    label: string, 
    type: string, 
    name: string, 
    value: string, 
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}