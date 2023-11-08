'use client';

//* components
import { Button } from "@nextui-org/react";

//* helper
import { modalToggler } from "@/helper/function";



const SearchbarToggler = () => {
    return (
        <Button
            isIconOnly
            className='bg-transparent text-foreground text-xl'
            onClick={() => modalToggler('.searchbar', [
                { target: '.searchbar_closer' },
                { target: '.searchbar_logo' },
                { target: '.searchbar_sidebar', delay: 1.2 },
                { target: '.searchbar_content', delay: 1.4 }
            ])}
        >
            <i className='far fa-search'></i>
        </Button>
    )
};

export default SearchbarToggler