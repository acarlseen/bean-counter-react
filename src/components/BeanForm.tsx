// TODO create add/update form
// will accept some optional prop for update 
// if prop.update -> updateAPIendpoint

import { FormControlLabel, Radio, RadioGroup, TextField } from "@mui/material"
import { useEffect } from "react"
import { useForm } from "react-hook-form"
import {useDispatch, useStore } from 'react-redux'
import { chooseAcidity, chooseBag_name, chooseBlend, chooseFlavors, chooseOrigin, chooseProcess, chooseProducer, chooseRoaster, chooseTasting_notes, chooseVariety } from "../redux/slices/RootSlice"
import { server_calls } from "../api/server"
import { orange } from "@mui/material/colors"


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
    handleClick: () => void, // opens and closes Coffee Form Modal
    handleTableRefresh?: () => void,
    coffee?: portfolioEntry
}

export const BeanForm = (props: Props) => {
    const { register, handleSubmit } = useForm({});
    const dispatch = useDispatch();
    const store = useStore();
    const userID = localStorage.getItem('userID')!

    useEffect(() => {
        const close = (e: KeyboardEvent) => {
            if (e.key ==='esc'){
                props.handleClick();
            }
        }
        window.addEventListener('keydown', close);
    },[])

    const onSubmit = (data: any, event: any) => {
        console.log(data);
        
        if (props.coffee){
            console.log(`ID: ${props.coffee}`);
  
          // below is original code
          console.log(`data: ${data}`)
          server_calls.update(data, userID+'/'+props.coffee.coffeeID)
          console.log(`Updated: ${ data } ${ props.coffee.coffeeID }`);
          //setTimeout(() => {window.location.reload()}, 10000);
          event.target.reset();
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
    
          server_calls.create(store.getState(), userID)
          //setTimeout( () => {window.location.reload()}, 10000)
        }
        props.handleClick();
        if (props.handleTableRefresh){
            props.handleTableRefresh()
        }
      }

  return (
    <div onClick={ () => props.handleClick()}
    className="flex z-1 w-screen h-screen justify-center absolute top-0 left-0 pt-20 bg-black bg-opacity-50">
        <div onClick={(e) => e.stopPropagation()}
        className="w-2/3 bg-red-800  h-100 overflow-auto justify-self-center rounded-md p-5">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label className="text-orange-100 font-bold" htmlFor="roaster">Roaster 
                        <span className="font-light text-red-400">{' *required'}</span>
                    </label>
                    <TextField
                    placeholder="Roaster"
                    className="bg-orange-100 rounded text-fields"
                    variant = "outlined"
                    margin="normal"
                    {...register('roaster')}
                    fullWidth
                    required={true}
                    type='text'
                    id="roaster"
                    defaultValue={props.coffee ? props.coffee.roaster : null}
                    >
                    </TextField>
                </div>
                <div>
                    <label className="text-orange-100 font-bold" htmlFor="bag_name">Bag 
                        <span className="font-light text-red-400">{' *required'}</span>
                    </label>
                    <TextField
                    placeholder="Bag"
                    className="bg-orange-100 rounded text-fields"
                    variant = "outlined"
                    margin="normal"
                    {...register('bag_name')}
                    fullWidth
                    required
                    type='text'
                    id="bag_name"
                    defaultValue={props.coffee ? props.coffee.bag_name : null}
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
                    defaultValue={props.coffee ? props.coffee.origin : null}
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
                    defaultValue={props.coffee ? props.coffee.variety : null}
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
                    defaultValue={props.coffee ? props.coffee.process_method : null}
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
                    defaultValue={props.coffee ? props.coffee.producer : null}
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
                        defaultValue={props.coffee ? props.coffee.blend : 'Single Origin'}
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
                    defaultValue={props.coffee?.flavors ? props.coffee.flavors : null}
                    >
                    </TextField>
                </div>
                <div>
                    <label className="text-orange-100 font-bold" htmlFor="tasting_notes">Tasting Notes</label>
                    <TextField
                    placeholder="Additional notes (method/experience/etc...)"
                    className="bg-orange-100 rounded text-fields"
                    variant = "outlined"
                    margin="normal"
                    {...register('tasting_notes')}
                    fullWidth
                    type='text'
                    id="tasting_notes"
                    multiline
                    inputProps={{maxLength: 200}}
                    minRows={3}
                    helperText={'200 char limit'}
                    defaultValue={props.coffee?.tasting_notes ? props.coffee.tasting_notes : null}
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
