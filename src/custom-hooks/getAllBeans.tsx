// TODO - fetch bean database with pagination
// This may work for query views too, but get
// the full list working first.

import { useEffect, useState } from "react"
import { server_calls } from "../api/server";

// will use optional props for queries

interface Beans{ 
    id: string,
    roaster: string,
    bag_name: string,
    origin: string,
    variety: string,
    producer: string,
    process_method: string,
    blend: string,
}



export const useGetAllBeans = () => {
    const [allBeans, setAllBeans] =useState<Beans[]>([]);
    const [ totPages, setTotPages ] = useState<number>()
    
    async function handleGetAllBeans(page=1, items=9) {
        const endpoint = `coffee?page=${page}&items=${items}`
        const result = await server_calls.getPublic(endpoint);
        console.log("FROM HOOK: ", result);
        
        setAllBeans(result.coffees);
        setTotPages(result.tot_pages)
    }

    useEffect( () => {
        handleGetAllBeans();
    }, [])

    return {allBeans: allBeans, setAllBeans: handleGetAllBeans, totPages: totPages}
}