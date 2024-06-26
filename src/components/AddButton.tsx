// TODO pass props to add bean on individual bean page

import { useState } from "react";
import { BeanForm } from "./BeanForm";

// Add beans from portfolio view, open Modal with AddBeans form

interface portfolioEntry{ 
    id: string,
    roaster: string,
    bag_name: string,
    origin: string,
    variety: string,
    producer: string,
    process_method: string,
    blend: string,
    tasting_notes?: string,
    timestamp: string,
    flavors?: string,
    coffeeID: string,
}

interface Props {
    icon: boolean,
    coffee?: portfolioEntry,
    handleTableRefresh? : () => void;
}

export const AddButton = (props: Props) => {
    const [modalVisisbility, setModalVisibiility ] = useState(false)

    function handleClick () {
        setModalVisibiility(!modalVisisbility)
    }
  
    return (
        props.icon ?
        <div>
            <button onClick={ () => handleClick() }>
                <i className="fa-regular fa-pen-to-square"></i>
            </button>
            {
                modalVisisbility ?
                    <BeanForm handleClick={handleClick} handleTableRefresh={props.handleTableRefresh} coffee={ props.coffee } />
                : 
                <></>
            }
        </div>
    :
        <div>
            <button onClick={ () => handleClick() }
            className="bg-red-400 text-orange-100 font-medium p-2 rounded border-orange-100 border-2 hover:bg-red-500">
                Add Bean
            </button>
            {
                modalVisisbility ?
                    <BeanForm handleClick={handleClick} handleTableRefresh={props.handleTableRefresh} coffee={ props.coffee } />
                : 
                <></>
            }
        </div>
  )
}
