//* components
import Tooltip from '@/components/ui/texts/Tooltip';
import { Button } from '@nextui-org/react';


const BasketStepper = ({ data, active }) => {
    return (
        <div className='absolute top-2/4 -translate-y-2/4 w-max flex flex-col gap-10'>
            <div className='absolute left-2/4 -translate-x-2/4 top-0 w-[2px] h-full bg-gray-200'></div>

            {/* steps */}
            <Tooltip content='Basket' placement='right'>
                <Button color='primary' variant='bordered' isIconOnly radius='full' className='bg-white'>
                    1
                </Button>
            </Tooltip>
            <Tooltip content='Buy' placement='right'>
                <Button variant='bordered' isIconOnly radius='full' className='bg-white'>
                    2
                </Button>
            </Tooltip>
            <Tooltip content='Checkout' placement='right'>
                <Button variant='bordered' isIconOnly radius='full' className='bg-white'>
                    3
                </Button>
            </Tooltip>
            <Tooltip content='Finish' placement='right'>
                <Button variant='bordered' isIconOnly radius='full' className='bg-white'>
                    4
                </Button>
            </Tooltip>
        </div>
    );
};


export default BasketStepper;