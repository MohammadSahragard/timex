import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    searchbarQuery: '',
};


const optionsSlice = createSlice({
    name: 'options',
    initialState,
    reducers: {
        changeQuery: (state, action) => {
            state.searchbarQuery = action.payload;
        }
    }
});


export const { changeQuery } = optionsSlice.actions;
export default optionsSlice.reducer;