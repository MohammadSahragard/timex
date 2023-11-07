'use client';

//* components
import { Button } from "@nextui-org/react";

//* helper
import { modalToggler } from "@/helper/function";



const MenuToggler = () => {
    return (
        <Button
            isIconOnly
            className='bg-transparent text-primary hover:bg-primary hover:text-white text-xl'
            radius='full'
            onClick={() => modalToggler('.full-menu', [
                { target: '.full-menu_closer' },
                { target: '.full-menu_logo' },
                { target: '.full-menu_sidebar', delay: 1.2 },
                { target: '.full-menu_content', delay: 1.4 }
            ])}
        >
            <i className='fa fa-ellipsis'></i>
        </Button>
    );
};


export default MenuToggler;