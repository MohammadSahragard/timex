'use client';

// public
import { useSelector } from "react-redux";

//* components
import { Image } from "@nextui-org/react";



const HighlightImage = ({ data }) => {

    const highlightWatch = useSelector(state => state.options.highlightWatch);
    const category = highlightWatch.category === 'men' ? 'menWatches' : 'womenWatches';

    const currentWatch = data?.[category]?.[highlightWatch.currentWatch];


    return (
        <div className='relative w-[450px] h-[450px] sm:w-[600px] sm:h-[600px] flex items-center sm:grid sm:place-items-center'>
            <div className='absolute inset-0 rounded-full bg-white' data-aos='zoom-in'></div>
            <div data-aos='fade-left'>
                <Image
                    className='highlight-image w-72 sm:w-[350px] !transition-none'
                    src={currentWatch.image}
                    alt='Product image'
                    disableSkeleton
                />
            </div>
        </div>
    );
};

export default HighlightImage;