// animations
import {
    nextHighlightSlider,
    prevHighlightSlider,
    categoryChangerSlider
} from '@/animations/animate';


import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    searchbarQuery: '',
    highlightWatch: {
        currentWatch: 0,
        category: 'men'
    },
    selectedCollection: 'UFC',
};


const optionsSlice = createSlice({
    name: 'options',
    initialState,
    reducers: {
        changeQuery: (state, action) => {
            state.searchbarQuery = action.payload;
        },
        changeHighlightWatch: (state, action) => {
            switch (action.payload) {
                case 'NEXT':
                    if (state.highlightWatch.currentWatch < 3) {
                        state.highlightWatch.currentWatch++;
                        nextHighlightSlider();
                    };
                    break;
                case 'PREVIOUS':
                    if (state.highlightWatch.currentWatch > 0) {
                        state.highlightWatch.currentWatch--;
                        prevHighlightSlider();
                    };
                    break;
                case 'CATEGORY':
                    if (state.highlightWatch.category === 'women') {
                        state.highlightWatch.category = 'men';
                        categoryChangerSlider("men's ");
                    } else {
                        state.highlightWatch.category = 'women';
                        categoryChangerSlider("women's ");
                    }
                    break;
                default: return state;
            }
        },
        changeSelectedCollection: (state, action) => {
            state.selectedCollection = action.payload;
        },
    },
});


export const {
    changeQuery,
    changeHighlightWatch,
    changeSelectedCollection
} = optionsSlice.actions;
export default optionsSlice.reducer;