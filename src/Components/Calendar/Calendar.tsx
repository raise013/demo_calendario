import React, { useEffect, useState } from "react"
import { demoJson } from "./DropdownJson"
import { importJson } from "../../Utility/JsonConverter"
import { CircularProgress } from "@mui/material";
import { Dropdown } from "../../Entity/Dropdown";
import { DoctorSelect } from "./DoctorSelect";

//Questo è un componente react
//I componenti hanno formato jsx | tsx (tsx se usi typescript)
//I componenti sono i blocchi che compongono la pagina e sono quello che visualizzi
//Hanno la forma di funzione javascript che deve ritornare sempre un elemento Jsx (sintassi di react, è un javascript 'esteso');
export const Calendar = () => {
    //Le funzioni 'useQualcosa' sono hook: funzioni che fornisce react per fare determinate cose e che di base
    //si possono utilizzare solo dentro i componenti

    //useState: hook che si usa per i dati che variano nel ciclo della pagina.
    //Immagina la pagina come una foto react rendirizza quella foto in un determinato momento e di base non renderizza più
    //Lo useState si usa per dire a react che lo stato di una determinata variabile può cambiare e quando cambia è necessario
    //renderizzare di nuovo la pagina per vedere i dati aggiornati
    //Nel nostro caso dropdown parte vuota e la popoliamo con il json
    const [dropdownsList, setDropdownsList] = useState<Dropdown[]>([]);
    
    //Stessa cosa per quanto detto sopra, l'id che seleziono cambia e deve scatenare il rendering
    const [selectedId, setSelectedId] = useState<number>();

    //Prende come parametro una funzione e un'array di dipendenze
    //React è in grado di capire quando cambia un elemento nell'array di dipendenze
    //Quando questo accade viene rieseguito il codice dentro lo useEffect
    //In questo caso l'attay di dipendenze è vuoto: quindi eseguo solo una volta, quando 'monto' la pagina
    //Vedrai che al primo giro viene eseguito due volte, è per la StrictMode, non ti interessa particolarmente, ma NON disattivarla
    useEffect(() => {
        //Leggo il file json
        //N.B una lista di questa dimensioni non è gestibile, va paginata
        const dropdown = importJson(demoJson.toString());
        setDropdownsList(dropdown)     
    }, [])

    //Se la dropdown non è definita la sto ancora caricando quindi mostro il caricamento
    //Il return dei componenti è ciò che si vede in pagina
    if(dropdownsList === undefined || dropdownsList.length === 0) {
        return <CircularProgress />
    }

    return (<>
        <DoctorSelect
            selectedId={selectedId} 
            idList={dropdownsList.map(d => d.data.doctorId)}
            onSelectChange={(event) => setSelectedId(Number(event.target.value))} 
        />
        <p>Sono il dottore selezionato: {selectedId}</p>
    </>)
}
