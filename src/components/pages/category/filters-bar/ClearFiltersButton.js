'use client';

// public
import { useDispatch } from "react-redux";

//* components
import { Button } from "@nextui-org/react";

//* actions
import { clearFilters } from "@/redux/features/filters/filtersSlice";



const ClearFiltersButton = () => {

    const dispatch = useDispatch();


    return (
        <Button
            radius='none'
            size='lg'
            className='h-max min-w-max px-2 py-1 sm:p-0 bg-transparent text-foreground'
            onClick={() => dispatch(clearFilters())}
        >
            <span className='sm:hidden'><i className='far fa-filter-slash'></i></span>
            <span className='font-medium uppercase underline underline-offset-2 hidden sm:block'>clear filters</span>
        </Button>
    );
};


export default ClearFiltersButton;