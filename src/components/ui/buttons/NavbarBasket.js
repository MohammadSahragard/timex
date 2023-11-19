'use client';

// public
import { useQuery } from "react-query";

//* components
import Tooltip from '@/components/ui/texts/Tooltip';
import { Badge } from '@nextui-org/react';

//* helper
import { modalToggler, calculateBasket } from '@/helper/function';

//* api
import { getBasketProducts } from "@/libs/basket/getBasketProducts";



const NavbarBasket = () => {

    const { data: cartProducts, isLoading } = useQuery('cart', getBasketProducts);
    const { totalItems, totalPrice } = calculateBasket(isLoading ? [] : cartProducts);



    return (
        <div className='w-max active:scale-95 transition-all'>
            <Badge content={totalItems ?? 0} color='warning' className='sm:hidden'>
                <Tooltip content='Basket'>


                    <div
                        className='flex items-center gap-1 cursor-pointer'
                        onClick={() => modalToggler('.basket', [
                            { target: '.basket_closer' },
                            { target: '.basket_logo' },
                            { target: '.basket_sidebar', delay: 1.2 },
                            { target: '.basket_content', delay: 1.4 }
                        ])}
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