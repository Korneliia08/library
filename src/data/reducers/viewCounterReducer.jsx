import {createSlice} from "@reduxjs/toolkit";

const viewCounterReducer = createSlice({
    name: 'counterOfViews',
    initialState:
        {
            countersOfView: []
        },
    reducers: {
        setViewCounter(state, action) {
            return {...state, employees: [...action.payload]};
        }
    }
});
export const {setViewCounter} = viewCounterReducer.actions;
export default viewCounterReducer.reducer;
