'use client';

//* components
import ProductCard from '../cards/ProductCard';

//* swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';



const Slider = () => {
    return (
        <Swiper
            navigation={true}
            modules={[Navigation]}
            slidesPerView={1}
            className='w-full'
            breakpoints={{
                640: {
                    slidesPerView: 2,
                },
                900: {
                    slidesPerView: 3,
                },
                1536: {
                    slidesPerView: 4,
                },
            }}
        >
            <SwiperSlide className='!flex justify-center'>
                <div data-aos='fade-left' data-aos-delay={0}>
                    <ProductCard />
                </div>
            </SwiperSlide>
            <SwiperSlide className='!flex justify-center'>
                <div data-aos='fade-left' data-aos-delay={200}>
                    <ProductCard />
                </div>
            </SwiperSlide>
            <SwiperSlide className='!flex justify-center'>
                <div data-aos='fade-left' data-aos-delay={400}>
                    <ProductCard />
                </div>
            </SwiperSlide>
            <SwiperSlide className='!flex justify-center'>
                <div data-aos='fade-left' data-aos-delay={600}>
                    <ProductCard />
                </div>
            </SwiperSlide>
            <SwiperSlide className='!flex justify-center'>
                <div data-aos='fade-left' data-aos-delay={800}>
                    <ProductCard />
                </div>
            </SwiperSlide>
            <SwiperSlide className='!flex justify-center'>
                <div data-aos='fade-left' data-aos-delay={1000}>
                    <ProductCard />
                </div>
            </SwiperSlide>

        </Swiper>
    );
};


export default Slider;