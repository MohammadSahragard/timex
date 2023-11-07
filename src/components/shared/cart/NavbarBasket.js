//* components
import Tooltip from '@/components/ui/texts/Tooltip';
import Link from 'next/link';


const NavbarBasket = () => {
    return (
        <Link href='/cart' className='w-max'>
            <Tooltip content='Basket'>
                <div className='flex items-center gap-1 cursor-pointer'>
                    <div className='w-9 h-9 bg-primary grid place-items-center text-white rounded-full'>
                        <strong>2</strong>
                    </div>
                    <strong>$223.00</strong>
                </div>
            </Tooltip>
        </Link>
    );
};


export default NavbarBasket;