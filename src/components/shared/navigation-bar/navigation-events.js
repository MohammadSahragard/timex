'use client'

// public
import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { useSelector, useDispatch } from 'react-redux';

//* helper
import { navbarBg } from '@/helper/scroll';
import { closeModal } from '@/helper/function';



export const NavigationEvents = () => {

    const pathname = usePathname()
    const searchParams = useSearchParams()

    // states
    const isOpenModal = useSelector(state => state.options.isOpenModal);


    useEffect(() => {
        navbarBg();

        isOpenModal && closeModal(
            `${isOpenModal}_closer`,
            `${isOpenModal}`,
            [
                `${isOpenModal}_logo`,
                `${isOpenModal}_sidebar`,
                `${isOpenModal}_content`
            ]
        );


        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname, searchParams]);

    return null;
};