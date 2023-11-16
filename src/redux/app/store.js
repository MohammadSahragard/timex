import { configureStore } from "@reduxjs/toolkit";

// reducers
import optionsSlice from "../features/options/optionsSlice";
import filtersSlice from "../features/filters/filtersSlice";


const store = configureStore({
    reducer: {
        options: optionsSlice,
        filtersBar: filtersSlice,
    }
});


export default store;