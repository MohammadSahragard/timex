'use client';

// public
import { useSelector } from 'react-redux';

//* components
import ProductCard from '../cards/ProductCard';

//* swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';



const Slider = ({ data, isCollection }) => {

    // filter watches (selected collection)
    const selectedCollection = useSelector(state => state.options.selectedCollection);
    const collection = isCollection ? data?.filter(watch => watch.collection === selectedCollection) : data;


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
                800: {
                    slidesPerView: 3,
                },
                1536: {
                    slidesPerView: 4,
                },
            }}
        >

            {
                collection?.map((watch, index) =>
                    <SwiperSlide key={watch.id} className='!flex justify-center'>
                        <div data-aos='fade-left' data-aos-delay={index * 200}>
                            <ProductCard data={watch} />
                        </div>
                    </SwiperSlide>
                )
            }

        </Swiper>
    );
};


export default Slider;