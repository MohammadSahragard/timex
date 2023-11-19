'use client';

// public
import { useSelector } from 'react-redux';

//* components
import SlideCounter from '@/components/ui/value/SliderCounter';
import Title from '@/components/ui/texts/Title';
import Heading from '@/components/ui/texts/Heading';
import Price from '@/components/ui/texts/Price';
import LastPrice from '@/components/ui/texts/LastPrice';
import PageLink from '@/components/ui/links/PageLink';

//* helper
import { stringSplitter } from '@/helper/function';
import AddProduct from '@/components/ui/buttons/AddProduct';


const HighlightWatchInfo = ({ data }) => {

    const highlightWatch = useSelector(state => state.options.highlightWatch);
    const category = highlightWatch.category === 'men' ? 'menWatches' : 'womenWatches';

    const currentWatch = data?.[category]?.[highlightWatch.currentWatch];


    return (
        <div className='w-full h-max flex justify-center items-center sm:gap-[40%] sm:justify-center px-[3%]'>
            {/* left sidebar info  */}
            <div className='absolute top-2/4 -translate-y-2/4 left-2/4 -translate-x-2/4
                            sm:relative sm:left-0 sm:translate-x-0 sm:translate-y-0'>
                <div
                    className='flex flex-col justify-end items-center gap-0 z-30 h-[500px] sm:gap-10 sm:h-[250px] sm:items-start'
                    data-aos='fade'
                    data-aos-delay='900'
                >
                    <strong className='bg-primary text-white px-2 rounded sm:bg-transparent sm:text-primary text-2xl sm:text-6xl font-black absolute top-0'>-10%</strong>
                    <Title>
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        <span className='highlights-category font-bold text-xl sm:text-2xl'>{highlightWatch.category}'s </span>
                        <span className='font-light text-xl sm:text-2xl'>watches</span>
                    </Title>
                    <SlideCounter current={highlightWatch?.currentWatch + 1 ?? 1} max={4} />
                </div>
            </div>


            {/* right sidebar info  */}
            <div className='translate-x-3/4 sm:translate-x-0'>
                <div className='flex flex-col gap-10 w-max h-max'
                    data-aos='fade-left' data-aos-delay='900'
                >
                    <div className='highlight-name flex flex-col gap-10'>
                        <Heading>{stringSplitter('The ' + currentWatch?.name, 0, 3)}</Heading>

                        <div className='flex flex-col sm:flex-row sm:gap-4'>
                            <Price value={currentWatch?.price ?? 0} />
                            <LastPrice value={currentWatch?.price + 50 ?? 0} />
                        </div>
                    </div>

                    <div className='flex flex-col gap-4 items-start sm:flex-row sm:items-center'>
                        <AddProduct watchData={currentWatch} />
                        <PageLink href={`/product/${currentWatch?.name?.split(' ').join('-') ?? ''}/${currentWatch?.id}`}>see details</PageLink>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default HighlightWatchInfo;