//* next ui components
import { Card, CardBody, CardFooter } from '@nextui-org/card';

//* components
import Link from 'next/link';
import Image from 'next/image';
import Tooltip from '@/components/ui/texts/Tooltip';
import Button from '@/components/ui/buttons/Button';
import Rate from '@/components/ui/value/Rate';
import ProductName from '@/components/ui/texts/ProductName';
import Price from '@/components/ui/texts/Price';
import LastPrice from '@/components/ui/texts/LastPrice';

//* helper
import { stringSplitter } from '@/helper/function';


const ProductCard = ({ data }) => {
    return (
        <Card
            radius='none'
            shadow='none'
            className='w-max h-max'
        >
            <div className='relative mb-4'>
                <div className='absolute top-2/4 -translate-y-2/4 rounded-full bg-default/60 w-full aspect-square'></div>
                <Link href='/'>
                    <Image
                        className='relative'
                        src='/day-date.webp'
                        alt='Product image'
                        width={250}
                        height={300}
                    />
                </Link>
            </div>

            <CardBody className='flex flex-col items-center gap-4'>
                <Tooltip content='Product Name (complete name)' placement='top'>
                    <Link href='/'>
                        {/* <ProductName>{stringSplitter(data?.name, 2, 4)}</ProductName> */}
                        <ProductName>Product Name</ProductName>
                    </Link>
                </Tooltip>

                <section className='flex gap-2'>
                    <Price value={58} />
                    <LastPrice value={120} />
                </section>

                <Rate value={4} />
            </CardBody>

            <CardFooter className='flex justify-center'>
                <Button icon='plus'>Add</Button>
            </CardFooter>
        </Card>
    );
};


export default ProductCard;