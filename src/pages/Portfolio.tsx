import { BeanCard } from "../components/BeanCard"
import { BeanPortfolio } from "../components/BeanPortfolio"
import { useGetPortfolio } from "../custom-hooks/getPortfolio"
import { BeanTable } from "../components/BeanTable";
import { useEffect, useState } from "react";
import { AddButton } from "../components/AddButton";


{/* <button><i className="fa-regular fa-pen-to-square"></i></button>
                    <button className="mx-3"><i className="fa-solid fa-trash"></i></button> */}



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

export default function Portfolio() {
    const { portfolioData, setPortfolioData } = useGetPortfolio();
    const [ selectionModel, setSelectionModel ] = useState<string[]>([])
    const [ loadBeans, setLoadBeans ] = useState<userPortfolio[]>([])

    const hiddenCols = {id: false, blend: false, variety: false}

    const handleSelection = (item:any) => {
        setSelectionModel(item)    
        
    }
    
    const handleBeanCards = () => {
        setLoadBeans(portfolioData.filter( (obj) => selectionModel.includes(obj.id) ))


    }
    
    useEffect( () => {
        console.log(`SelectionModel: ${selectionModel}`);
        console.log(`portfolioData: ${portfolioData[0]}`)
        handleBeanCards();
    }, [selectionModel])

  return (
    <>
    <div className="flex flex-row w-full py-2 px- bg-orange-200 h-screen/93 gap-4">
        <div className="flex flex-col p-5 w-1/2  rounded-lg bg-orange-900">
            <BeanTable beanList={portfolioData} hiddenCols={hiddenCols} handleSelection={handleSelection}/>
            <div className="p-3">
                <AddButton />
            </div>
        </div>
        <div className="flex flex-col w-1/2 gap-4 overflow-auto">
            {loadBeans.length > 0 ?
                loadBeans.map( (obj) => (
                    <>
                        <div className="flex flex-row h-1/2 bg-red-200 rounded-lg shadow-lg p-5 mx-5">
                            <div className="w-1/2">

                                <BeanCard coffee={obj} />
                                
                            </div>
                            
                            <div className="flex flex-col w-1/2 p-5 gap-2">
                                <div className="flex flex-row h-1/2 bg-red-800 text-orange-50 p-3 rounded-lg">

                                <span className="mx-1 w-1/4 font-bold text-orange-200">
                                    Tasting Notes: {' '} 
                                </span>
                                    {obj.tasting_notes}
                                    
                                </div>
                                <div className="flex flex-row h-1/2 bg-red-800 text-orange-50 p-3 rounded-lg">
                                    <span className="mx-1 w-1/4 font-bold text-orange-200">
                                        Flavors: {' '}
                                    </span>
                                    { obj.flavors }
                                </div>
                                <div className="flex flex-row justify-end">
                                    <button><i className="fa-regular fa-pen-to-square"></i></button>
                                    <button className="mx-3"><i className="fa-solid fa-trash"></i></button>
                                </div>
                            </div>
                        </div>
                    </>
                    ))
                :
                <span>Select coffees to begin</span>

                }
            
        </div>
    </div>
    </>
  )
}
