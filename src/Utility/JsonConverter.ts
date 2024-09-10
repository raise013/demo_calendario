import { Dropdown } from "../Entity/Dropdown";

//Si legge funzione con parametro jsonString di tipo stringa che ritorna un'array di Dropdown
export const importJson = (jsonString: string) : Dropdown[] => {
    // Converte la stringa JSON in un array di oggetti
    const jsonObject = JSON.parse(jsonString);

    //Ciclo sull'array dropdowns
    //item: any, significa che per ora item è di un tipo qualunque, l'obbiettivo qui è di convertirlo nel notro tipo 'Dropown'
    const arrayDropdown= jsonObject.dropdowns.map((item: any) => {        
        //Sto destrutturando: prendo item e lo 'smonto' creando due variabili a partire dai suoi valori
        const { id_dropdown, data } = item;
        //Stessa cosa con data
        const { date, location, time, doctor_id } = data;
        
        //Check sul formato dei dati, andrebbe fatto un check completo sul json'
        if(time !== 'mattina' && time !== 'pomeriggio') {
            throw new Error('Valore time non previsto');
        }
        
        //Converto il json nel tipo dropdown e lo restituisco
        //So che ora ti stai chiedendo a cosa serve tutto questo giro, la risposta è che ti permette di utilizzare dei tipi
        //aiutandoti nel gestire le variabili
        const dropdown : Dropdown = {
            id: id_dropdown,
            data: {
                time: time,
                location,
                date: new Date(date.split('_').reverse().join('-')), // Converto la stringa data in un oggetto Date
                doctorId: doctor_id === -1 ? undefined : doctor_id // Gestisco il -1 come undefined
            }
        };
        return dropdown;
    })

    return arrayDropdown;
}

