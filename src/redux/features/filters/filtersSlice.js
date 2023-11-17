// animations
import {
    nextSlideCounter,
    prevSlideCounter
} from '@/animations/animate';

// public
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    showFiltersBar: false,
    activeFilters: {
        colors: [],
        'case diameter': [],
        'case size': [],
        'case material': [],
        'features': [],
        'category paginate': {
            pageNumber: 1,
            perPage: 8,
        }
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


        // add some filter
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
                'features': [],
                'category paginate': {
                    ...state.activeFilters['category paginate']
                }
            }
        },
        // category pagination
        setPagination: (state, action) => {
            const type = action.payload;

            switch (type) {
                case 'NEXT_PAGE':
                    if (state.activeFilters['category paginate'].pageNumber < 2) {
                        nextSlideCounter();
                        return {
                            ...state,
                            activeFilters: {
                                ...state.activeFilters,
                                ['category paginate']: {
                                    ...state.activeFilters['category paginate'],
                                    pageNumber: state.activeFilters['category paginate'].pageNumber + 1,
                                }
                            }
                        }
                    };
                    break;
                case 'PREV_PAGE':
                    if (state.activeFilters['category paginate'].pageNumber > 1) {
                        prevSlideCounter();
                        return {
                            ...state,
                            activeFilters: {
                                ...state.activeFilters,
                                ['category paginate']: {
                                    ...state.activeFilters['category paginate'],
                                    pageNumber: state.activeFilters['category paginate'].pageNumber - 1,
                                }
                            }
                        }
                    };
                    break;
                // change per page
                default:
                    return {
                        ...state,
                        activeFilters: {
                            ...state.activeFilters,
                            ['category paginate']: {
                                ...state.activeFilters['category paginate'],
                                perPage: action.payload ? action.payload : 8,
                            }
                        }
                    }
            }
        }
    }
});


export const {
    toggleFiltersBar,
    addFilter,
    clearFilters,
    setPagination
} = filtersSlice.actions;
export default filtersSlice.reducer;