// public
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    showFiltersBar: false,
    activeFilters: {
        colors: [],
        'case diameter': [],
        'case size': [],
        'case material': [],
        'features': []
    }
};


const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {

        // toggle filters bar
        toggleFiltersBar: state => {
            state.showFiltersBar = !state.showFiltersBar;
        },


        // toggle filters
        addFilter: ({ activeFilters }, { payload }) => {

            if (['colors', 'features'].includes(payload.category)) {
                const isInCategory = activeFilters?.[payload.category]?.find(color => color === payload.filter);
                if (isInCategory) {
                    const newFilters = activeFilters?.[payload.category]?.filter(filter => filter !== isInCategory);
                    activeFilters[payload.category] = [...newFilters];
                } else {
                    activeFilters?.[payload.category]?.push(payload.filter);
                }
            } else {
                activeFilters[payload.category] = [payload.filter]
            }

        },
        // clear filters
        clearFilters: state => {
            state.activeFilters = {
                colors: [],
                'case diameter': [],
                'case size': [],
                'case material': [],
                'features': []
            }
        }
    }
});


export const {
    toggleFiltersBar,
    addFilter,
    clearFilters
} = filtersSlice.actions;
export default filtersSlice.reducer;