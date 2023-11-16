'use client';

//* components
import FilterChip from "@/components/pages/category/filters-bar/FilterChip";
import Tooltip from "@/components/ui/texts/Tooltip";
import PriceRangeFilter from "./PriceRangeFilter";
import ClearFiltersButton from "./ClearFiltersButton";
import { useSelector } from "react-redux";
import ActiveFiltersButton from "./ActiveFiltersButton";



const CategoryFilters = () => {

    // filters
    const filters = {
        colors: ['white', 'black', 'pink', 'gold', 'green', 'silver', 'blue', 'brown', 'cream', 'rose'],
        'case diameter': ['40mm+', '30-39mm'],
        'case size': ['full size', 'mid size', 'small size'],
        'case material': ['Titanium', 'BRASS and LLB', 'Stainless Steel', 'Low Lead Brass'],
        'features': ['alarm', 'chronograph', 'compass', 'indigo', 'time zone', 'water resistance']
    };
    const validColors = ['white', 'black', 'pink', 'gold', 'green', 'silver', 'blue', 'brown', '#ffe4c4', 'crimson'];

    // filters bar options
    const filtersBarOptions = useSelector(state => state.filtersBar);



    return (
        <div className={`bg-white origin-top ${filtersBarOptions.showFiltersBar ? 'scale-y-100' : 'scale-y-0 absolute'} overflow-hidden transition-transform`}>

            <PriceRangeFilter />

            {
                Object.keys(filters).map(section =>
                    <div key={section} className='grid grid-cols-[120px_auto] gap-5 py-4 border-b'>
                        <small className='font-medium capitalize'>{section}</small>
                        <div className='flex justify-start gap-3 flex-wrap'>
                            {
                                filters[section].map((filter, index) =>
                                    section === 'colors' ?
                                        <Tooltip key={filter} content={filter}>
                                            <div>
                                                <FilterChip
                                                    isColor={validColors[index]}
                                                    category={section}
                                                    filter={filter}
                                                />
                                            </div>
                                        </Tooltip>
                                        :
                                        <FilterChip
                                            key={filter}
                                            category={section}
                                            filter={filter}
                                        >
                                            {filter}
                                        </FilterChip>
                                )
                            }
                        </div>
                    </div>
                )
            }

            <div className='h-20 flex items-center justify-between'>
                <ActiveFiltersButton />
                <ClearFiltersButton />
            </div>

        </div>
    );
};


export default CategoryFilters;