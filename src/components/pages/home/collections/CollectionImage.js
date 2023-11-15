'use client';

// public
import { useSelector } from 'react-redux';

//* components
import Image from 'next/image';


const CollectionImage = () => {

    const selectedCollection = useSelector(state => state.options.selectedCollection);

    const srcBanner = {
        UFC: '/ufc-collection-banner.jpg',
        'Easy Reader': '/easyReader-collection-banner.jpg',
        'Expedition North': '/expeditionNorth-collection-banner.png',
        Waterbury: '/waterbury-collection-banner.jpg'
    };


    return (
        <div className='relative w-full h-44'>
            <Image
                src={srcBanner[selectedCollection]}
                className='object-cover'
                fill
                quality={100}
                alt='Collection image'
            />
        </div>
    );
};


export default CollectionImage;