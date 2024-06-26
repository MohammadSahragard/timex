'use server';

import RelatedWatches from "@/components/pages/product/RelatedWatches";
//* components
import ProductHeader from "@/components/pages/product/product-header/ProductHeader";
import ProductHero from "@/components/pages/product/product-hero/ProductHero";
import ProductMainContent from "@/components/pages/product/product-main/ProductMainContent";

//* api
import { getWatchInfo } from "@/libs/watch/getWatchInfo";



//* metadata
export const generateMetadata = async ({ params }) => {
    return {
        title: params.name,
    };
};



const Product = async ({ params }) => {

    const { id } = params;
    const watchInfo = await getWatchInfo(id);


    return (
        <div className='relative min-h-screen bg-white'>
            <div className='max-w-[1536px] mx-auto p-[100px_3%_0_3%] lg:p-[100px_150px_0_150px] space-y-10'>
                <ProductHeader watchInfo={watchInfo} />
                <ProductHero watchInfo={watchInfo} />
                <ProductMainContent watchInfo={watchInfo} />
            </div>
            <RelatedWatches watchInfo={watchInfo} />
        </div>
    );
};


export default Product;