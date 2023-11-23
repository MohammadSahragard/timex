'use client';

// public
import { useDispatch } from "react-redux";

//* components
import { Button } from "@nextui-org/react";

//* helper
import { showModal } from "@/helper/function";

//* actions
import { setModalOpen } from "@/redux/features/options/optionsSlice";



const MenuToggler = () => {

    const dispatch = useDispatch();

    // functions
    const modalShower = () => {
        showModal('.full-menu', [
            { target: '.full-menu_closer' },
            { target: '.full-menu_logo' },
            { target: '.full-menu_sidebar', delay: 1.2 },
            { target: '.full-menu_content', delay: 1.4 }
        ]);

        dispatch(setModalOpen('.full-menu'));
    };


    return (
        <Button
            isIconOnly
            className='bg-transparent text-primary hover:bg-primary hover:text-white text-xl'
            radius='full'
            onClick={modalShower}
        >
            <i className='fa fa-ellipsis'></i>
        </Button>
    );
};


export default MenuToggler;