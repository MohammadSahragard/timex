//* components
import Link from 'next/link';
import { Image } from '@nextui-org/react';
import Title from '@/components/ui/texts/Title';
import ProductName from '@/components/ui/texts/ProductName';
import Tooltip from '@/components/ui/texts/Tooltip';
import Rate from '@/components/ui/value/Rate';
import Price from '@/components/ui/texts/Price';
import ChangeQuantityProducts from '../basket/ChangeQuantityProduct';
import RemoveProductButton from '../basket/RemoveProductButton';


const BasketCard = ({ data }) => {

    const {
        id,
        image,
        name,
        rate,
        quantity,
        price
    } = data || {};


    return (
        <div className='min-w-min h-max grid grid-cols-[minmax(320px,auto)_150px_100px_100px_60px] items-center gap-5 py-5 border-b'>
            <div className='flex items-center gap-5'>
                <div className='relative'>
                    <div className='absolute top-2/4 -translate-y-2/4 rounded-full bg-default/20 w-full aspect-square'></div>
                    <Link href={`/product/${name?.split(' ').join('-') ?? ''}/${id ?? 1}`}>
                        <Image
                            className='relative'
                            src={image}
                            alt='Product image'
                            width={150}
                            height={300}
                        />
                    </Link>
                </div>

                <Link
                    className='flex flex-col gap-3'
                    href={`/product/${name?.split(' ').join('-') ?? ''}/${id ?? 1}`}
                >
                    <Tooltip content={name}>
                        <div><ProductName>{name?.split(' ').slice(2, 4).join(' ')}</ProductName></div>
                    </Tooltip>
                    <Rate value={rate ?? 5} />
                </Link>
            </div>

            <ChangeQuantityProducts id={id} quantity={quantity ?? 0} />

            <Title>${price?.toFixed(2)}</Title>

            <Price value={price * quantity} />

            <RemoveProductButton id={id} />
        </div>
    );
};


export default BasketCard;