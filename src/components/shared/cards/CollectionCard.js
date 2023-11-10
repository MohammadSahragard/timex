//* next ui components
import { Card, CardFooter } from '@nextui-org/card';

//* components
import Image from 'next/image';
import Title from '@/components/ui/texts/Title';
import PageLink from '@/components/ui/links/PageLink';


const CollectionCard = ({ imageSrc, titleName, href }) => {
    return (
        <Card
            radius='none'
            shadow='none'
            className='w-full'
        >
            <Image
                src={imageSrc}
                width={300}
                height={300}
                quality={100}
                className='w-full h-[300px] object-cover'
                alt='Collection image'
            />

            <CardFooter className='flex flex-col items-start gap-2 mt-2 p-0'>
                <Title>{titleName}</Title>
                <PageLink href={href} isButton>Browse</PageLink>
            </CardFooter>
        </Card>
    );
};


export default CollectionCard;