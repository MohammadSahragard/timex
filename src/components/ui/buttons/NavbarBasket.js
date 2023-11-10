'use client';

//* components
import Tooltip from '@/components/ui/texts/Tooltip';
import { Badge } from '@nextui-org/react';

//* helper
import { modalToggler } from '@/helper/function';


const NavbarBasket = () => {
    return (
        <div className='w-max active:scale-95 transition-all'>
            <Badge content='2' color='warning' className='sm:hidden'>
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
                            <strong className='hidden sm:block'>2</strong>
                            <span className='sm:hidden'>
                                <i className='far fa-cart-shopping'></i>
                            </span>
                        </div>
                        <strong className='hidden sm:block'>$223.00</strong>
                    </div>


                </Tooltip>
            </Badge>
        </div>
    );
};


export default NavbarBasket;