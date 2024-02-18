import {createSlice} from "@reduxjs/toolkit";

const mainDataReducer = createSlice({
    name: 'mainData',
    initialState: {
        mainData: []
    },
    reducers: {
        setMainData(state, action) {
            return {...state, employees: [...action.payload]};
        }
    }
});

export const {setMainData} = mainDataReducer.actions;
export default mainDataReducer.reducer;
