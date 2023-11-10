'use client';

//* components
import Image from 'next/image';
import Button from '@/components/ui/buttons/Button';
import Title from '@/components/ui/texts/Title';
import Subtitle from '@/components/ui/texts/Subtitle';
import SectionTitle from '@/components/ui/texts/SectionTitle';


const Weekender = ({ CTA }) => {
    return (
        <div className='relative bg-[#F7F4EF] flex items-center justify-center sm:justify-end'>
            <div className='hidden sm:block absolute top-0 bottom-0 left-0 w-96'>
                <Image
                    src='/weekender.png'
                    fill
                    alt='Weekender banner image'
                />
            </div>

            <div className='relative w-2/4 flex flex-col gap-2 items-center text-center sm:items-start backdrop-blur-md'>
                <Title>Weekender</Title>
                <Subtitle>Switch it up with <span className='font-bold'>interchangeable</span> straps.</Subtitle>
                {
                    CTA ? <Button>More</Button> : null
                }
            </div>

            <SectionTitle position='-right-[8.5%] top-2/4'>Weekender</SectionTitle>
        </div>
    );
};


export default Weekender;