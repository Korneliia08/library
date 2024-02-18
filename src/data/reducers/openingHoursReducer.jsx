import {createSlice} from "@reduxjs/toolkit";

const openingHoursReducer = createSlice({
    name: "openingHours",
    initialState:
        {
            openingHours: {},
        },
    reducers: {
        setOpeningHours(state, action) {
            return {...state, openingHours: action.payload};
        }
    }
});
export const {setOpeningHours} = openingHoursReducer.actions;
export default openingHoursReducer.reducer;
