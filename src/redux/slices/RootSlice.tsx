import { createSlice } from '@reduxjs/toolkit'


const rootSlice = createSlice({
    name: "root",
    initialState: {
        roaster: "Roaster",
        bag_name: "Bag",
        origin: "Origin",
        variety: "Variety",
        producer: "Producer",
        process_method: "Process",
        blend: "Blend",
        flavors: "Flavors",
        tasting_notes: "Tasting Notes",
        acidity: "acidity"
    },
    reducers: {
        // action is submitted elsewhere - written to state.roaster
        chooseRoaster: (state, action) => { state.roaster = action.payload }, // Setting the input to the state.<var>
        chooseBag_name: (state, action) => { state.bag_name = action.payload },
        chooseOrigin: (state, action) => { state.origin = action.payload },
        chooseVariety: (state, action) => { state.variety = action.payload },
        chooseProducer: (state, action) => { state.producer = action.payload },
        chooseProcess: (state, action) => { state.process_method = action.payload },
        chooseBlend: (state, action) => { state.blend = action.payload },
        chooseFlavors: (state, action) => { state.flavors = action.payload },
        chooseTasting_notes: (state, action) => { state.tasting_notes = action.payload },
        chooseAcidity: (state, action) => { state.acidity = action.payload },
    }
})

export const reducer = rootSlice.reducer;
export const { chooseRoaster, chooseBag_name, chooseOrigin, 
    chooseVariety, chooseProducer, chooseProcess, chooseBlend, 
    chooseFlavors, chooseTasting_notes, chooseAcidity} = rootSlice.actions