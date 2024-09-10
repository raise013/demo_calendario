//Rappresenta un dottore con le sue proprietà
//Uso un tipo specifico per essere più comodo nell'utilizzare i dati
//Suppongo che un dottore non possa mai avere nessuno di queste proprietà null | undefined 
export interface DropdownData 
{
    time: 'mattina'| 'pomeriggio',
    location: string,
    date: Date,
    //gestisco il -1 come undefined, rappresenta il fatto che non ho valore e mi aiuta nella gestione delle dropdown 'vuote'
    doctorId: number | undefined
}
