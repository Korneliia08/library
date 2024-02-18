import {configureStore} from "@reduxjs/toolkit";
import articleReducer from "./reducers/articleReducer";
import openingHoursReducer from "./reducers/openingHoursReducer";
import navReducer from "./reducers/navReducer";
import viewCounterReducer from "./reducers/viewCounterReducer";
import mainDataReducer from "./reducers/mainDataReducer";


const store = configureStore({
    reducer: {
        articles: articleReducer,
        openingHours: openingHoursReducer,
        optionsOfNav: navReducer,
        counterOfViews: viewCounterReducer,
        mainData: mainDataReducer,
    }
});
export default store;
