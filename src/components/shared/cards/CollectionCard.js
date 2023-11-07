//* next ui components
import { Card, CardFooter } from '@nextui-org/card';

//* components
import Link from 'next/link';
import Image from 'next/image';
import Title from '@/components/ui/texts/Title';
import PageLink from '@/components/ui/links/PageLink';


const CollectionCard = ({ imageSrc, titleName, href }) => {
    return (
        <Card
            radius='none'
            shadow='none'
            className='w-max'
        >
            <Image
                src='/women-category.webp'
                width={300}
                height={300}
                className='object-cover aspect-square'
                alt='Collection image'
            />

            <CardFooter className='flex flex-col items-start gap-2 mt-2 p-0'>
                <Title>Collection Name</Title>
                <PageLink href='/' isButton>Browse</PageLink>
            </CardFooter>
        </Card>
    );
};


export default CollectionCard;