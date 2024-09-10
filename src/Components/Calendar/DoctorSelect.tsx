import React from "react"
import { Select, MenuItem, SelectChangeEvent } from "@mui/material"

//Rappresenta le proprietà che passo da fuori
type DoctorSelectProps = {
    selectedId: number | undefined
    idList: (number | undefined)[]
    onSelectChange: (event: SelectChangeEvent ) => void;
}
//Questo è un componente vedi Calendar.tsx
//Definisco un tipo per i parametri del componente e le destrutturo nelle variabili
export const DoctorSelect : React.FC<DoctorSelectProps> = ({idList, selectedId, onSelectChange}) => {
   return (
    //Creo la mia select e ciclo gli id escludendo quelli undefined nelle opzioni
    //Per i componenti Selecet e MenuItem vedi Material UI
    //Vanno ancora tolti i duplicati
    <Select label="ID medico" value={selectedId?.toString()} onChange={onSelectChange}>
        {idList && idList.filter((id): id is number => id !== undefined).map((id) => generateDropdownItem(id))}
    </Select>
)}

const generateDropdownItem = (id: number) => {
    return <MenuItem value={id}>{id}</MenuItem>
}