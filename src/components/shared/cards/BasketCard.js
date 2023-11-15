//* next ui components
import { Card, CardBody } from '@nextui-org/card';

//* components
import Link from 'next/link';
import { Image } from '@nextui-org/react';
import Title from '@/components/ui/texts/Title';
import ProductName from '@/components/ui/texts/ProductName';
import Button from '@/components/ui/buttons/Button';
import { Button as NextUiButton } from '@nextui-org/button';
import Tooltip from '@/components/ui/texts/Tooltip';
import Rate from '@/components/ui/value/Rate';
import Price from '@/components/ui/texts/Price';


const BasketCard = ({ data }) => {

    const {
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
                    <div className='absolute top-2/4 -translate-y-2/4 rounded-full bg-default/60 w-full aspect-square'></div>
                    <Link href='/'>
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
                    href={`/${name?.split(' ').join('-')}`}
                >
                    <Tooltip content='Product name'>
                        <ProductName>{name?.split(' ').slice(2, 4).join(' ')}</ProductName>
                    </Tooltip>
                    <Rate value={rate ?? 5} />
                </Link>
            </div>


            <div className='flex items-center gap-2'>
                <Button isIconOnly />

                <ProductName>{quantity ?? 0}</ProductName>

                <Button isIconOnly icon='plus' />
            </div>

            <Title>${price?.toFixed(2)}</Title>

            <Price value={price*quantity} />

            <NextUiButton
                isIconOnly
                className='bg-transparent text-foreground text-2xl'
            >
                <i className='fat fa-xmark-large'></i>
            </NextUiButton>
        </div>
    );
};


export default BasketCard;