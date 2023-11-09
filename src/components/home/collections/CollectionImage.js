//* components
import Image from "next/image";


const CollectionImage = () => {
    return (
        <div className='relative w-full h-60'>
            <Image
                src='/sale-category.webp'
                className='object-cover'
                fill
                alt='Collection image'
            />
        </div>
    );
};


export default CollectionImage;