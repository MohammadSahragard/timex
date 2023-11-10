'use client';

// public
import { useSelector, useDispatch } from "react-redux";

//* components
import { Button } from "@nextui-org/react";

//* actions
import { changeQuery } from "@/redux/features/options/optionsSlice";


const SearchbarInput = () => {

    const dispatch = useDispatch();
    const query = useSelector(state => state.options.SearchbarQuery);


    return (
        <div className='search-box h-10 sm:h-16 grid grid-cols-[auto_max-content] border-b-2'>
            <input
                className='bg-transparent border-none outline-none text-xl font-bold'
                type='search'
                value={query}
                onChange={e => dispatch(changeQuery(e.target.value))}
            />
            <Button
                color='primary'
                radius='none'
                className='uppercase h-full font-bold bg-transparent text-primary hover:bg-primary hover:text-white'
            >
                <span className='md:hidden text-xl'><i className='far fa-search'></i></span>
                <span className='hidden md:inline'>search now</span>
            </Button>
        </div>
    );
};


export default SearchbarInput;