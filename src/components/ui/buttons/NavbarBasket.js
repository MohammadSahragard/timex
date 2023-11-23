'use client';

// public
import { useQuery } from "react-query";
import { useDispatch } from "react-redux";

//* components
import Tooltip from '@/components/ui/texts/Tooltip';
import { Badge } from '@nextui-org/react';

//* helper
import { showModal, calculateBasket } from '@/helper/function';

//* api
import { getBasketProducts } from "@/libs/basket/getBasketProducts";

//* actions
import { setModalOpen } from "@/redux/features/options/optionsSlice";



const NavbarBasket = () => {

    const dispatch = useDispatch();
    // states
    const { data: cartProducts, isLoading } = useQuery('cart', getBasketProducts);
    const { totalItems, totalPrice } = calculateBasket(isLoading ? [] : cartProducts);

    // functions
    const modalShower = () => {
        showModal('.basket', [
            { target: '.basket_closer' },
            { target: '.basket_logo' },
            { target: '.basket_sidebar', delay: 1.2 },
            { target: '.basket_content', delay: 1.4 }
        ]);

        dispatch(setModalOpen('.basket'));
    };



    return (
        <div className='w-max active:scale-95 transition-all'>
            <Badge content={totalItems ?? 0} color='warning' className='sm:hidden'>
                <Tooltip content='Basket'>


                    <div
                        className='flex items-center gap-1 cursor-pointer'
                        onClick={modalShower}
                    >
                        <div className='w-9 h-9 bg-primary grid place-items-center text-white rounded-full'>
                            <strong className='hidden sm:block'>{totalItems ?? 0}</strong>
                            <span className='sm:hidden'>
                                <i className='far fa-cart-shopping'></i>
                            </span>
                        </div>
                        <strong className='hidden sm:block'>${totalPrice?.toFixed(2) ?? 0}</strong>
                    </div>


                </Tooltip>
            </Badge>
        </div>
    );
};


export default NavbarBasket;