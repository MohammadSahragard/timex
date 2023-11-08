//* components
import Image from "next/image";
import Link from "next/link";



const HighlightImage = () => {
    return (
        <div className='relative w-[450px] h-[450px] sm:w-[600px] sm:h-[600px] flex items-center sm:grid sm:place-items-center'>
            <div className='absolute inset-0 rounded-full bg-white' data-aos='zoom-in'></div>
            <div className='relative h-4/6 w-72 sm:w-[350px] overflow-visible' data-aos='fade-left'>
                <Image
                    className='object-contain'
                    src='/day-date.webp'
                    alt='Product image'
                    fill
                />
            </div>
        </div>
    );
};

export default HighlightImage;