'use client';

// public
import { useQuery } from "react-query";

//* components
import Price from "@/components/ui/texts/Price";
import LastPrice from "@/components/ui/texts/LastPrice";
import AddProduct from "@/components/ui/buttons/AddProduct";

//* api
import { getWatchInfo } from "@/app/libs/watch/getWatchInfo";



const ProductMainInfo = ({ id }) => {

    const { data: watchInfo } = useQuery('watchInfo', () => getWatchInfo(id));

    const productName = watchInfo?.name?.split(' ') ?? '';


    return (
        <div className='flex justify-between items-end'>
            <h2 className='text-3xl sm:text-4xl text-foreground flex flex-col'>
                <span>{productName[0]} {productName[1]}</span>
                <span className='font-black'>{productName[2]}</span>
            </h2>

            <div className='flex items-center gap-5 sm:gap-10'>
                <section className='flex gap-x-5 flex-col md:flex-row'>
                    <Price value={watchInfo?.price ?? 0} />
                    <LastPrice value={watchInfo?.price ?? 0 + 50} />
                </section>

                <AddProduct watchData={watchInfo} />
            </div>
        </div>
    );
};


export default ProductMainInfo;