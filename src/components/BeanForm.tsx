// TODO create add/update form
// will accept some optional prop for update 
// if prop.update -> updateAPIendpoint

import { Alert, FormControlLabel, Radio, RadioGroup, TextField } from "@mui/material"
import { useEffect } from "react"
import { useForm } from "react-hook-form"
import {useDispatch, useStore } from 'react-redux'
import { chooseAcidity, chooseBag_name, chooseBlend, chooseFlavors, chooseOrigin, chooseProcess, chooseProducer, chooseRoaster, chooseTasting_notes, chooseVariety } from "../redux/slices/RootSlice"
import { server_calls } from "../api/server"
import { orange } from "@mui/material/colors"


interface Props {
    handleClick: () => void // opens and closes Coffee Form Modal
    coffeeID?: string
}

export const BeanForm = (props: Props) => {
    const { register, handleSubmit } = useForm({});
    const dispatch = useDispatch();
    const store = useStore();
    const endpoint = '91840b87-41fa-4546-b104-3efe868ca43e';

    useEffect(() => {
        const close = (e: KeyboardEvent) => {
            if (e.key ==='esc'){
                props.handleClick();
            }
        }
        window.addEventListener('keydown', close);
    },[])

    function updateSuccess(){
        return <Alert variant="outlined" severity="success">
            Bean updated successfully
        </Alert>
    }

    const onSubmit = (data: any, event: any) => {
        console.log(data);
        
        if (props.coffeeID){
            console.log(`ID: ${props.coffeeID}`);
  
          // below is original code
          console.log(`data: ${data}`)
          server_calls.update(data, '91840b87-41fa-4546-b104-3efe868ca43e/'+props.coffeeID)
          console.log(`Updated: ${ data } ${ props.coffeeID }`);
          //setTimeout(() => {window.location.reload()}, 10000);
          event.target.reset();
          updateSuccess();
        }
        else{
          // use dispatch to update our state in our store
          dispatch(chooseRoaster(data.roaster));
          dispatch(chooseBag_name(data.bag_name));
          dispatch(chooseOrigin(data.origin));
          dispatch(chooseVariety(data.variety));
          dispatch(chooseProcess(data.process_method));
          dispatch(chooseProducer(data.producer));
          dispatch(chooseBlend(data.blend));
          dispatch(chooseFlavors(data.flavors));
          dispatch(chooseTasting_notes(data.tasting_notes))
          dispatch(chooseAcidity(data.acidity))
    
          server_calls.create(store.getState(), endpoint)
          //setTimeout( () => {window.location.reload()}, 10000)
        }
      }

  return (
    <div onClick={ () => props.handleClick()}
    className="flex z-1 w-screen h-screen justify-center absolute top-0 left-0 pt-20 bg-black bg-opacity-50">
        <div onClick={(e) => e.stopPropagation()}
        className="w-2/3 bg-red-800  h-100 overflow-auto justify-self-center rounded-md p-5">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label className="text-orange-100 font-bold" htmlFor="roaster">Roaster</label>
                    <TextField
                    placeholder="Roaster"
                    className="bg-orange-100 rounded text-fields"
                    variant = "outlined"
                    margin="normal"
                    {...register('roaster')}
                    fullWidth
                    type='text'
                    id="roaster"
                    >
                    </TextField>
                </div>
                <div>
                    <label className="text-orange-100 font-bold" htmlFor="bag_name">Bag</label>
                    <TextField
                    placeholder="Bag"
                    className="bg-orange-100 rounded text-fields"
                    variant = "outlined"
                    margin="normal"
                    {...register('bag_name')}
                    fullWidth
                    type='text'
                    id="bag_name"
                    >
                    </TextField>
                </div>
                <div>
                    <label className="text-orange-100 font-bold" htmlFor="origin">Origin</label>
                    <TextField
                    placeholder="Origin"
                    className="bg-orange-100 rounded text-fields"
                    variant = "outlined"
                    margin="normal"
                    {...register('origin')}
                    fullWidth
                    type='text'
                    id="origin"
                    >
                    </TextField>
                </div>
                <div>
                    <label className="text-orange-100 font-bold" htmlFor="variety">Variety</label>
                    <TextField
                    placeholder="Variety"
                    className="bg-orange-100 rounded text-fields"
                    variant = "outlined"
                    margin="normal"
                    {...register('variety')}
                    fullWidth
                    type='text'
                    id="variety"
                    >
                    </TextField>
                </div>
                <div>
                    <label className="text-orange-100 font-bold" htmlFor="process_method">Process</label>
                    <TextField
                    placeholder="Process"
                    className="bg-orange-100 rounded text-fields"
                    variant = "outlined"
                    margin="normal"
                    {...register('process_method')}
                    fullWidth
                    type='text'
                    id="process_method"
                    >
                    </TextField>
                </div>
                <div>
                    <label className="text-orange-100 font-bold" htmlFor="producer">Producer</label>
                    <TextField
                    placeholder="Producer"
                    className="bg-orange-100 rounded text-fields"
                    variant = "outlined"
                    margin="normal"
                    {...register('producer')}
                    fullWidth
                    type='text'
                    id="producer"
                    >
                    </TextField>
                </div>
                <div>
                <label className="text-orange-100 font-bold" htmlFor="blend">Blend</label>
                    <RadioGroup
                    {...register('blend')}
                        className="justify-evenly"
                        row
                        name="blend"
                        defaultValue='Single Origin'
                        >
                            <FormControlLabel className="text-orange-100" 
                                value='Single Origin' 
                                control={<Radio sx={{
                                    color: orange[100],
                                    '&.Mui-checked': { color: orange[200]}
                                }} />} 
                                label='Single Origin' 
                            />
                            <FormControlLabel className="text-orange-100" 
                                value='Blend' 
                                control={<Radio sx={{
                                    color: orange[100],
                                    '&.Mui-checked': { color: orange[200]}
                                }} />} 
                                label='Blend' 
                            />
                    </RadioGroup>
                </div>
                <div>
                    <label className="text-orange-100 font-bold" htmlFor="acidity">Acidity</label>
                    <RadioGroup
                    {...register('acidity')}
                        className="justify-evenly"
                        row
                        name="acidity"
                        defaultValue='medium'
                        >
                            <FormControlLabel className="text-orange-100" 
                                value='low' 
                                control={<Radio sx={{
                                    color: orange[100],
                                    '&.Mui-checked': { color: orange[200]}
                                }} />} 
                                label='Low' 
                            />
                            <FormControlLabel className="text-orange-100" 
                                value='medium' 
                                control={<Radio sx={{
                                    color: orange[100],
                                    '&.Mui-checked': { color: orange[200]}
                                }} />} 
                                label='Medium' 
                            />
                            <FormControlLabel className="text-orange-100" 
                                value='high' 
                                control={<Radio sx={{
                                    color: orange[100],
                                    '&.Mui-checked': { color: orange[200]}
                                }} />} 
                                label='High' 
                            />
                    </RadioGroup>
                        
                </div>
                <div>
                    <label className="text-orange-100 font-bold" htmlFor="flavors">Flavors</label>
                    <TextField
                    placeholder="Flavors"
                    className="bg-orange-100 rounded text-fields"
                    variant = "outlined"
                    margin="normal"
                    {...register('flavors')}
                    fullWidth
                    type='text'
                    id="flavors"
                    >
                    </TextField>
                </div>
                <div>
                    <label className="text-orange-100 font-bold" htmlFor="tasting_notes">Tasting Notes</label>
                    <TextField
                    placeholder="Addition notes (method/experience/etc...)"
                    className="bg-orange-100 rounded text-fields"
                    variant = "outlined"
                    margin="normal"
                    {...register('tasting_notes')}
                    fullWidth
                    type='text'
                    id="tasting_notes"
                    multiline
                    minRows={3}
                    />
                </div>
                <button type="submit"
                className="bg-orange-200 p-3 w-24 rounded-md m-2 border-black border-2 text-red-800 text-semibold
                ">
                    Submit
                </button>
            </form>
        </div>
    </div>
  )
}
