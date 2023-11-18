//* next ui components
import { Card, CardBody, CardFooter } from '@nextui-org/card';

//* components
import Link from 'next/link';
import { Image } from '@nextui-org/react';
import Tooltip from '@/components/ui/texts/Tooltip';
import Rate from '@/components/ui/value/Rate';
import ProductName from '@/components/ui/texts/ProductName';
import Price from '@/components/ui/texts/Price';
import LastPrice from '@/components/ui/texts/LastPrice';
import AddProduct from '@/components/ui/buttons/AddProduct';


const ProductCard = ({ data }) => {
    return (
        <Card
            radius='none'
            shadow='none'
            className='w-max h-max bg-transparent'
        >
            <div className='relative mb-4 flex justify-center h-[240px]'>
                <Link href={`/product/${data?.name?.split(' ').join('-') ?? ''}/${data?.id ?? 1}`}>
                    <Image
                        className='relative'
                        src={data?.image}
                        alt='Product image'
                        width={200}
                        height={300}
                    />
                </Link>
                <div className='absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 rounded-full bg-default/20 h-3/4 aspect-square'></div>
            </div>

            <CardBody className='flex flex-col items-center gap-4'>
                <Tooltip content={data?.name ?? ''} placement='top'>
                    <Link href={`/product/${data?.name?.split(' ').join('-') ?? ''}/${data?.id ?? 1}`}>
                        <ProductName>{data?.name?.split(' ').slice(2, 4).join(' ')}</ProductName>
                    </Link>
                </Tooltip>

                <section className='flex gap-2'>
                    <Price value={data?.price ?? 0} />
                    <LastPrice value={data?.price ?? 0 + 50} />
                </section>

                <Rate value={data?.rate ?? 5} />
            </CardBody>

            <CardFooter className='flex justify-center'>
                <AddProduct watchData={data} />
            </CardFooter>
        </Card>
    );
};


export default ProductCard;