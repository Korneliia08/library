import {createSlice} from "@reduxjs/toolkit";

const articleReducer = createSlice({
        name: 'articles',
        initialState:
            {
                articles: []
            },
        reducers: {
            setArticles(state, action) {
                return {...state, articles: [...action.payload]};
            }
        }
    }
);
export const {setArticles} = articleReducer.actions;
export default articleReducer.reducer;
