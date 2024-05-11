import { useEffect, useState } from "react";
import { server_calls } from "../api/server";

//TODO set endpoint

interface SingleBean {
    bag_name: string,
    blend: string,
    origin: string,
    process_method: string,
    producer: string,
    roaster: string,
    variety: string,
    flavors: string
}

const singleBeanEndpoint = "coffee/b009bffa-8a0a-456a-8c8e-159b69690da9"

export const useGetBag = () => {
    const [beanData, setBeanData] = useState<SingleBean>()

    async function handleBeanBagFetch() {
        const result = await server_calls.getPublic(singleBeanEndpoint);
        setBeanData(result);
    }
    
    useEffect( () => {
        handleBeanBagFetch();
    }, [] );

    return {beanData: beanData, setBeanData:handleBeanBagFetch}
}