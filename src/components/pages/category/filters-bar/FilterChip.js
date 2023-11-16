'use client'

// public
import { useSelector, useDispatch } from "react-redux";

//* components
import { Button } from "@nextui-org/react";

//* actions
import { addFilter } from "@/redux/features/filters/filtersSlice";

//* helper
import { isActiveFilter } from "@/helper/function";



const FilterChip = ({ children, isColor, category, filter }) => {

    const dispatch = useDispatch();
    const activeFilters = useSelector(state => state.filtersBar.activeFilters);
    const red = 'red'

    return (
        <Button
            size='sm'
            radius='none'
            color={isActiveFilter(filter, activeFilters?.[category]) ? 'primary' : 'default'}
            variant='bordered'
            className='uppercase'
            style={isColor ? { backgroundColor: isColor, height: 25, padding: '0', minWidth: 25} : null}
            onClick={() => dispatch(addFilter({ category, filter }))}
        >
            {isColor ? null : children}
        </Button>
    );
};


export default FilterChip;