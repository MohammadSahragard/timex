'use client';

//* components
import Image from "next/image";
import Button from "@/components/ui/buttons/Button";
import Title from "@/components/ui/texts/Title";
import Subtitle from "@/components/ui/texts/Subtitle";
import SectionTitle from "@/components/ui/texts/SectionTitle";



const Archive = ({ CTA }) => {
    return (
        <div className='relative bg-[#C2BFB3] flex justify-start items-center pl-[3%]'>

            <Image
                src='/images/other/mountain.jpg'
                fill
                alt='Archive section background'
                className='object-cover mix-blend-soft-light'
            />

            <div className='absolute top-0 bottom-0 right-0 w-[300px]'>
                <Image
                    src='/images/other/archive.webp'
                    fill
                    alt='Archive banner image'
                    className='object-contain !right-0'
                />
            </div>

            <div className='w-2/4 relative flex flex-col gap-2 items-start backdrop-blur-md sm:items-end sm:backdrop-blur-0'>
                <Title>Timex Archive</Title>
                <Subtitle>Discover our <span className='font-bold'>new capsule</span> collection.</Subtitle>
                {
                    CTA ? <Button>More</Button> : null
                }
            </div>

            {CTA && <SectionTitle position='-right-[8.5%] top-2/4'>Archive</SectionTitle>}

        </div>
    );
};


export default Archive;