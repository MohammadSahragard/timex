//* next ui components
import { Card, CardBody } from '@nextui-org/card';

//* components
import Link from 'next/link';
import Image from 'next/image';
import Title from '@/components/ui/texts/Title';
import ProductName from '@/components/ui/texts/ProductName';
import Button from '@/components/ui/buttons/Button';
import { Button as NextUiButton } from '@nextui-org/button';
import Tooltip from '@/components/ui/texts/Tooltip';
import Rate from '@/components/ui/value/Rate';
import Price from '@/components/ui/texts/Price';


const BasketCard = ({ data }) => {
    return (
        <Card
            radius='none'
            shadow='none'
            className='border-b'
        >
            <CardBody className='grid grid-cols-[minmax(320px,auto)_150px_100px_100px_60px] items-center gap-5'>
                <div className='flex items-center gap-5'>
                    <div className='relative'>
                        <div className='absolute top-2/4 -translate-y-2/4 rounded-full bg-default/60 w-full aspect-square'></div>
                        <Link href='/'>
                            <Image
                                className='relative'
                                src='/day-date.webp'
                                alt='Product image'
                                width={150}
                                height={300}
                            />
                        </Link>
                    </div>

                    <Link
                        className='flex flex-col gap-3'
                        // to={`/${data?.name?.split(' ').join('-')}`}
                        href='/'
                    >
                        <Tooltip content='Product name'>
                            {/* <ProductName>{stringSplitter(data?.name, 2, 4)}</ProductName> */}
                            <ProductName>Product Name</ProductName>
                        </Tooltip>
                        <Rate value={4} />
                    </Link>
                </div>


                <div className='flex items-center gap-2'>
                    <Button isIconOnly />

                    <ProductName>1</ProductName>

                    <Button isIconOnly icon='plus' />
                </div>

                <Title>$34.00</Title>

                <Price value={89} />

                <NextUiButton
                    isIconOnly
                    className='bg-transparent text-foreground'
                >
                    <i className='fat fa-xmark-large fa-2xl'></i>
                </NextUiButton>
            </CardBody>
        </Card>
    );
};


export default BasketCard;