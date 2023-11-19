'use client';

// public
import { useState, useEffect } from "react";
import { useQuery } from "react-query";

//* components
import SectionTitle from "@/components/ui/texts/SectionTitle";
import ProductHeroSlider from "./ProductHeroSlider";
import ProductHeroImage from "./ProductHeroImage";

//* api
import { getWatchInfo } from "@/libs/watch/getWatchInfo";



const ProductHero = ({ id }) => {

    // states
    const [selectedImagePath, setSelectedImagePath] = useState('');

    // data
    const { data: watchInfo } = useQuery('watchInfo', () => getWatchInfo(id));
    const otherImage = watchInfo?.['other images'];


    useEffect(() => {
        setSelectedImagePath(watchInfo?.image ?? '');
    }, [watchInfo?.image]);



    return (
        <div className='h-[400px] bg-[#ECEBF0] relative grid place-items-center' data-aos='fade'>
            {/* colors */}
            <div className='absolute left-[3%] top-2/4 -translate-y-2/4'>
                <div
                    data-aos='fade-right'
                    data-aos-delay={200}
                >
                    <ProductHeroSlider
                        isColors
                        data={watchInfo?.colors ?? []}
                        selectedImage={{
                            selectedImagePath,
                            setSelectedImagePath
                        }}
                    />
                </div>
            </div>


            {/* selected image (hero image) */}
            <ProductHeroImage selectedImage={selectedImagePath} />


            {/* selected color */}
            <small className='absolute bottom-5 left-2/4 -translate-x-2/4 space-x-1'>
                <span>Color:</span>
                <span className='font-medium'>
                    {
                        watchInfo?.colors?.find(color => color.image === selectedImagePath)?.name ??
                        watchInfo?.colors?.[0]?.name
                    }
                </span>
            </small>


            {/* images */}
            <div className='absolute right-[3%] top-2/4 -translate-y-2/4'>
                <div
                    data-aos='fade-left'
                    data-aos-delay={200}
                >
                    <ProductHeroSlider
                        data={otherImage}
                        selectedImage={{
                            selectedImagePath,
                            setSelectedImagePath
                        }}
                    />
                </div>
            </div>



            <SectionTitle position='-right-[8.5%] top-2/4'>
                <span>{watchInfo?.name?.split(' ')?.[0]} </span>
                <span>{watchInfo?.name?.split(' ')?.[1]}</span>
            </SectionTitle>
        </div>
    );
};


export default ProductHero;