import { useState, useEffect } from "react";

// Per creare un custom hook è necessario utilizzare la keyword use
export const useFetch = (url) => {

    const [loading, setLoading] = useState(true);
    const [list, setList] = useState();

    const getList = async () => {
      
            const response = await fetch(url);
            const list = await response.json();
            setList(list);
            setLoading(false);
    };

    useEffect(() => {
        getList();
    }, [url])

    // Il custom hook ritorna le informazioni che vogliamo utilizzare nel nostro componente, 
    // in questo caso lo stato di loading e la lista di nomi o prodotti
    return { loading, list }
}