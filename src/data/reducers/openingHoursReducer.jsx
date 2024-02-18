import {createSlice} from "@reduxjs/toolkit";

const openingHoursReducer = createSlice({
    name: "openingHours",
    initialState:
        {
            openingHours: []
        },
    reducers: {
        setOpeningHours(state, action) {
            return {...state, employees: [...action.payload]};
        }
    }
});
export const {setOpeningHours} = openingHoursReducer.actions;
export default openingHoursReducer.reducer;
