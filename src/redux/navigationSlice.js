import { createSlice } from "@reduxjs/toolkit";

const navigationsSlice = createSlice({
    name: "",
    initialState: [],
    reducers: {
        // TODO navigation CTA for header and themes
        menuOpen(state, action){
            // TODO Setter function
            state.push({
                id: '',
                text: action.payload.message, // *Sample
                completed
            })
        }
    }
})

//TODO export const [actions] = navigationsSlice.actions
export default navigationsSlice.reducer