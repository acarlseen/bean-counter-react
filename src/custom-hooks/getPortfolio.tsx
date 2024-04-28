import { useEffect, useState } from "react";
import { server_calls } from "../api/server";

// .id is Portfolio.id
interface userPortfolio{ 
    id: string,
    roaster: string,
    bag_name: string,
    origin: string,
    variety: string,
    producer: string,
    process_method: string,
    blend: string,
    tasting_notes: string,
    timestamp: string,
    flavors: string
}

const portfolioEndpoint = "91840b87-41fa-4546-b104-3efe868ca43e"

// TODO - sort portfolioData by roaster before returning
export const useGetPortfolio = ()  => {
    const [portfolioData, setPortfolioData] = useState<userPortfolio[]>([])

    async function handlePortfolioFetch() {
        const result = await server_calls.get(portfolioEndpoint);
        setPortfolioData(result);
    }
    
    useEffect( () => {
        handlePortfolioFetch();
    }, [] );

    return {portfolioData: portfolioData, setPortfolioData:handlePortfolioFetch}
}