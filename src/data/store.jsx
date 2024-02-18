import {configureStore} from "@reduxjs/toolkit";
import articleReducer from "./reducers/articleReducer";
import openingHoursReducer from "./reducers/openingHoursReducer";


const store = configureStore({
    reducer: {
        articles: articleReducer,
        openingHours: openingHoursReducer,
    }
});
export default store;
