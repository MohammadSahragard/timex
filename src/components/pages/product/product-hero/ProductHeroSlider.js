'use client';

//* swiper components
import { Swiper, SwiperSlide } from 'swiper/react';

//* components
import { Image } from '@nextui-org/react';



const ProductHeroSlider = ({ data, selectedImage, isColors }) => {

    const { selectedImagePath, setSelectedImagePath } = selectedImage;

    const imagePath = image => isColors ? image.image : image;


    return (
        <Swiper
            direction='vertical'
            slidesPerView={3}
            className='w-[90px] sm:w-[120px] h-[280px] p-0 overflow-hidden'
            spaceBetween={20}
        >
            {
                data?.map(image =>
                    <SwiperSlide key={imagePath(image)}>
                        <section
                            className={`!h-20 bg-white !w-full grid place-items-center border-2 transition-all cursor-pointer
                                    ${selectedImagePath === imagePath(image) ? 'border-primary' : 'border-white'}
                            `}
                            onClick={() => setSelectedImagePath(imagePath(image))}
                        >
                            <Image
                                src={imagePath(image)}
                                alt='Other image of product'
                                className='h-16'
                            />
                        </section>
                    </SwiperSlide>
                )
            }
        </Swiper>
    );
};


export default ProductHeroSlider;