//* components
import Tooltip from '@/components/ui/texts/Tooltip';
import { Badge } from '@nextui-org/react';


const NavbarBasket = () => {
    return (
        <div className='w-max'>
            <Badge content='2' color='warning' className='sm:hidden'>
                <Tooltip content='Basket'>
                    <div className='flex items-center gap-1 cursor-pointer'>
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