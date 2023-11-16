'use client';

// public
import { useSelector, useDispatch } from "react-redux";

//* components
import { Button } from "@nextui-org/react";

//* actions
import { toggleFiltersBar } from "@/redux/features/filters/filtersSlice";



const FiltersBarToggler = () => {

    const dispatch = useDispatch();
    const statusToggle = useSelector(state => state.filtersBar.showFiltersBar);


    return (
        <Button
            radius='none'
            size='lg'
            className={`h-max min-w-max px-2 py-1 sm:p-0 bg-transparent ${statusToggle ? 'text-primary' : 'text-foreground'}`}
            onClick={() => dispatch(toggleFiltersBar())}
        >
            <span className='sm:hidden'><i className='far fa-filter-list'></i></span>
            <span className='font-medium uppercase underline underline-offset-2 hidden sm:block'>show less filter</span>
        </Button>
    );
};


export default FiltersBarToggler;