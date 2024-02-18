import {createSlice} from "@reduxjs/toolkit";

const navReducer = createSlice({
    name: 'optionsOfNav',
    initialState:
        {
            optionsOfNav: []
        },
    reducers: {
        setNav(state, action) {
            return {...state, employees: [...action.payload]};
        }
    }
});
export const {setNav} = navReducer.actions;
export default navReducer.reducer;
