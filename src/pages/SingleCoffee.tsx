// This is the page for a single coffee profile
// TODO - import various properties and modules, look up how to define custom colors in tailwind

import { useState } from "react";
import { AddButton } from "../components/AddButton";
import { BeanCard } from "../components/BeanCard";
import { useLocation } from "react-router-dom";

// TODO - create links to pages with query results. Probably cou8ld make a BeanCatalog page that displays results from
// a list of beans passed via props

export default function SingleCoffee() {
    const implemented = false
    const location = useLocation();
    const { coffee } = location.state
    var flavors: string[] = ['']

    const [inPortofilio ] = useState(false)
    //const { beanData } = useGetBag();
    //const [flavors, setFlavors ] = useState<string[]>([''])
    
    console.log(`COFFEE: ${coffee.roaster}`);
    
    // useEffect( ()=> {
    //     console.log(beanData);
    //     if (beanData.flavors)
    //         {const temp = coffee.flavors.split(', ')
    //         setFlavors(temp)}
        
    // }, [beanData])
    if( coffee.flavors ){
        flavors = coffee.flavors.split(', ')
    }
    return (
        <>
        <div className="flex flex-row w-full">

            <div className="flex flex-col gap-4 w-1/3 p-5">
                <BeanCard coffee={coffee} />
                {
                    implemented ? 
                        <div className="flex justify-center">
                            <AddButton icon={false} />
                        </div>
                    :
                    <></>
                }
            </div>
            <div className="flex flex-col w-2/3 p-5 pl-0 gap-4">
                <div className="flex flex-row bg-orange-800 rounded-lg shadow-lg bg-opacity-50 h-40 p-5">
                    <div className="flex flex-col w-full">

                        <div className="flex flex-row">
                            <h1 className="flex-row text-3xl text-orange-100">{coffee.roaster}</h1>
                        </div>
                        <div className="flex flex-row bg-orange-100 w-full h-full rounded-md p-2">
                            This is a nice write-up about the roaster that includes location and accolades.
                        </div>
                    </div>
                </div>
                <div className="flex flex-row bg-orange-800 rounded-lg shadow-lg bg-opacity-50 h-72 p-5 gap-4 ">
                    <div className="flex-col w-full h-full ">
                        <div className="flex flex-row mb-2 h-1/6">
                            <span className=" p-2 rounded font-semibold text-2xl text-orange-100">More like this coffee:</span> 
                        </div>
                        <div className="flex flex-row justify-evenly h-5/6 gap-2">
                            <div className="flex flex-col h-full bg-orange-100 rounded shadow-md w-full p-2">
                                <p className="text-orange-800 font-semibold">by Roaster </p>
                                <ul className="mx-5">
                                    {coffee.roaster}
                                </ul>
                            </div>
                            <div className="flex flex-col h-100 bg-orange-100 rounded shaddow-md w-full p-2">
                                <p className="text-orange-800 font-semibold">by Flavor</p>
                                { flavors.length == 1 && flavors[0]=='' ?
                                <p>No flavor entries</p>
                                :
                                <ul className="mx-5">
                                 { flavors.map((word:string)=>(<li key={word}>{word}</li>))}
                                </ul>
                                }
                            </div>
                            <div className="flex flex-col h-full bg-orange-100 rounded shaddow-md w-full p-2">
                                <p className="text-orange-800 font-semibold">by Recommendation</p>
                                <ul className="mx-5">
                                    Users who like this coffee also like...
                                </ul>
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
