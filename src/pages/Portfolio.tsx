import { BeanCard } from "../components/BeanCard"
import { useGetPortfolio } from "../custom-hooks/getPortfolio"
import { BeanTable } from "../components/BeanTable";
import { useEffect, useState } from "react";
import { AddButton } from "../components/AddButton";
import { DeleteButton } from "../components/DeleteButton";
import { Link } from "react-router-dom";


// TODO - make refresh for table and selected cards



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
    flavors: string,
    coffeeID: string,
}

export default function Portfolio() {
    const [ selectionModel, setSelectionModel ] = useState<string[]>([])
    const [ refreshTable, setRefreshTable ] = useState(false);
    const { portfolioData, setPortfolioData } = useGetPortfolio();
    const [ loadBeans, setLoadBeans ] = useState<userPortfolio[]>([])

    const hiddenCols = {id: false, blend: false, variety: false}

    const handleSelection = (item:any) => {
        setSelectionModel(item)    
        
    }
    
    const handleBeanCards = () => {
        setLoadBeans(portfolioData.filter( (obj) => selectionModel.includes(obj.id) ))
    }

    const handleTableRefresh = () => {
        setRefreshTable(true);
    }

    useEffect( () => {
        setPortfolioData();
        setRefreshTable(false);
    }, [refreshTable])
    
    useEffect( () => {
        // console.log(`SelectionModel: ${selectionModel}`);
        // console.log(`portfolioData: ${JSON.stringify(loadBeans)}`)
        handleBeanCards();
    }, [selectionModel, portfolioData])

  return (
    <>
    <div className="flex flex-row w-full py-2 px- bg-orange-200 h-screen/93 gap-4">
        <div className="flex flex-col p-5 w-1/2  rounded-lg bg-orange-800 shadow-lg">
            <BeanTable beanList={portfolioData} hiddenCols={hiddenCols} handleSelection={handleSelection}/>
            <div className="flex p-3 justify-between">
                <AddButton icon={false} handleTableRefresh={ handleTableRefresh } />

                    <DeleteButton icon={false} coffee={loadBeans} handleTableRefresh={handleTableRefresh} />
            </div>
        </div>
        <div className="flex flex-col w-1/2 gap-4 overflow-auto">
            {loadBeans.length > 0 ?
                loadBeans.map( (obj) => (
                    <div className="flex flex-row h-1/2 bg-red-200 rounded-lg shadow-lg p-5 w-full">
                            <Link to='/singleCoffee' state={{coffee: obj}} className="flex w-1/2 ">
                            <div className="">

                                <BeanCard coffee={obj} />
                                
                            </div>
                            </Link>
                            
                            <div className="flex flex-col w-1/2 p-5 gap-2">
                                <Link to='/singleCoffee' state={{coffee: obj}} className="flex flex-row h-1/2 bg-red-800 text-orange-50 p-3 rounded-lg">

                                    <span className="mx-1 mr-2 w-1/4 font-bold text-orange-200">
                                        Tasting Notes: {' '} 
                                    </span>
                                        {obj.tasting_notes}
                                    
                                </Link>
                                <Link to='/singleCoffee' state={{coffee: obj}} className="flex flex-row w-full h-1/2 bg-red-800 text-orange-50 p-3 rounded-lg">
                                    <span className="mx-1 mr-2 w-1/4 font-bold text-orange-200">
                                        Flavors: {' '}
                                    </span>
                                    <span className="w-3/4">
                                    { obj.flavors }
                                    </span>
                                </Link>
                                <div className="flex flex-row justify-end">
                                    <AddButton icon={true}  coffeeID={obj.coffeeID} handleTableRefresh={handleTableRefresh}/>
                                    <DeleteButton icon={true} coffee={[obj]} handleTableRefresh={handleTableRefresh} />
                                </div>
                            </div>
                        </div>
                    ))
                :
                <span>Select coffees to begin</span>

                }
            
        </div>
    </div>
    </>
  )
}
