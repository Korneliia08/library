import {createSlice} from "@reduxjs/toolkit";

const articleReducer = createSlice({
        name: 'articles',
        initialState:
            {
                articles: []
            },
        reducers: {
            setArticles(state, action) {
                return {...state, employees: [...action.payload]};
            }
        }
    }
);
export const {setArticles} = articleReducer.actions;
export default articleReducer.reducer;
