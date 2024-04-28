// This is the page for a single coffee profile
// TODO - import various properties and modules, look up how to define custom colors in tailwind

import { useEffect, useState } from "react";
import { AddButton } from "../components/AddButton";
import { BeanCard } from "../components/BeanCard";
import { useGetBag } from "../custom-hooks/getSingleBag";

export default function SingleCoffee() {

    const [inPortofilio, setInPortfolio ] = useState(false)
    const { beanData, setBeanData } = useGetBag();

    useEffect( ()=> {
        console.log(beanData);
        
    }, [beanData])

    return (
        <>
        <div className="flex flex-row w-full">

            <div className="flex flex-col gap-4 w-1/3 p-5">
                <BeanCard coffee={beanData} />
                {
                    !inPortofilio ? 
                        <AddButton />
                    :
                    <></>
                }
            </div>
            <div className="flex flex-col w-2/3 p-5 pl-0 gap-4">
                <div className="flex flex-row bg-black rounded-lg shadow-lg bg-opacity-50 h-40 p-5">
                    <div>
                        <h1 className="text-3xl text-orange-100">{beanData.roaster}</h1>
                        <p>This is a nice write-up about the roaster that includes location and accolades</p>
                    </div>
                </div>
                <div className="flex flex-row bg-black rounded-lg shadow-lg bg-opacity-50 h-52 p-5 gap-4">
                    <div className="flex-col w-full border-red-500 border-4">
                        More like this coffee:
                        <div className="flex flex-row justify-evenly">
                            <div className="flex flex-col border-red-500 border-4">
                                by Roaster
                            </div>
                            <div className="flex-col">
                                by Flavor
                            </div>
                            <div className="flex-col">
                                by Flavor
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex flex-row w-full px-5">
            { inPortofilio ?
                <div className="bg-black rounded-lg shadow-lg bg-opacity-50 h-60 w-full p-5">
                    Tasting Notes
                </div>
                :
                <div className="bg-black rounded-lg shadow-lg bg-opacity-50 h-60 w-full p-5">
                    People are saying:
                </div>
            }
        </div>
        </>
    );
    }
