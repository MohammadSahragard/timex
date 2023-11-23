'use client';

// public
import { useDispatch } from "react-redux";

//* components
import { Button } from "@nextui-org/react";

//* helper
import { showModal } from "@/helper/function";

//* actions
import { setModalOpen } from "@/redux/features/options/optionsSlice";



const SearchbarToggler = () => {

    const dispatch = useDispatch();

    // functions
    const modalShower = () => {
        showModal('.searchbar', [
            { target: '.searchbar_closer' },
            { target: '.searchbar_logo' },
            { target: '.searchbar_sidebar', delay: 1.2 },
            { target: '.searchbar_content', delay: 1.4 }
        ]);

        dispatch(setModalOpen('.searchbar'));

        // focus search box
        const searchBox = document.querySelector('.search-box');
        searchBox.focus();
    };


    return (
        <Button
            isIconOnly
            className='bg-transparent text-foreground text-xl'
            onClick={modalShower}
        >
            <i className='far fa-search'></i>
        </Button>
    )
};

export default SearchbarToggler