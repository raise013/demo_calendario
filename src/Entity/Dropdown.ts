//Rappresenta un dottore con le sue proprietà
//Uso un tipo specifico per essere più comodo nell'utilizzare i dati

import { DropdownData } from "./DropdownData";

//Suppongo che un dottore non possa mai avere nessuno di queste proprietà null | undefined 
export interface Dropdown 
{
    id: string,
    data: DropdownData
}