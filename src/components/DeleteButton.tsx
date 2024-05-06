// TODO pass props to add bean on individual bean page

import { useEffect, useState } from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import { server_calls } from "../api/server";

// Add beans from portfolio view, open Modal with AddBeans form

interface CoffeeItem {
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

interface Props {
    icon: boolean,
    coffee: CoffeeItem[],
}

export const DeleteButton = (props: Props) => {
    const [alertVisibility, setAlertVisibility ] = useState(false)
    const userID= '91840b87-41fa-4546-b104-3efe868ca43e'
    function handleClick () {
        setAlertVisibility(!alertVisibility)
    }

    function handleClose() { 
        setAlertVisibility(false)
    }

    function handleConfirm () {
        // call delete function
        console.log('DELETED!');
        props.coffee.map( (obj) => {
            server_calls.delete_coffee(userID+'/'+obj.coffeeID)
        })
        setAlertVisibility(false)
    }

    useEffect( () => {
        const close = (e:KeyboardEvent) => {
            if(e.key === 'esc'){
                handleClose();
            }
        }
        window.addEventListener('keydown', close)
    }, [])
    
    return (
    <>
        {
            props.coffee.length == 0 ?
                <button className="bg-gray-300 text-gray-500 font-medium p-2 rounded border-gray-50 border-2">
                    Delete
                </button>
            : props.icon ?
                <div>
                    <button onClick={ () => handleClick() }>
                        <i className="fa-solid fa-trash p-1"></i>
                    </button>
                    
                </div>
            :
                <div>
                    <button onClick={ () => handleClick() }
                    className="bg-red-400 text-orange-100 font-medium p-2 rounded border-orange-100 border-2 hover:bg-red-500">
                        Delete
                    </button>
                </div>
        }
        
            <Dialog 
            open={alertVisibility}>
                <DialogTitle id="dialog-Title"> Are you sure you want to delete?</DialogTitle>
                <DialogContent>
                    <DialogContentText id="Alert-description">
                        Clicking 'Delete' will permanently remove coffee and notes from your portfolio, this cannot be un-done.
                    </DialogContentText>
                    <DialogActions>
                        <Button onClick={handleConfirm}>Delete</Button>
                        <Button onClick={handleClick}>Cancel</Button>
                    </DialogActions>
                </DialogContent>
            </Dialog>
        
    </>
  )
}
