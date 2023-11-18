'use client';

// public
import { useQueryClient } from "react-query";

//* components
import Rate from "@/components/ui/value/Rate";
import { Divider } from "@nextui-org/react";



const ProductStatus = () => {

    const queryClient = useQueryClient();
    const watchInfo = queryClient.getQueryData('watchInfo');


    return (
        <div className='py-8 border-b-2 flex items-end justify-between'>
            <div className='flex gap-x-2 flex-col sm:items-center sm:flex-row'>
                <section>
                    <strong className='text-default font-normal'>ID: </strong>
                    <strong className='font-medium'>{watchInfo?.specification?.Product ?? 0}</strong>
                </section>
                <Divider orientation='vertical' className='h-5 hidden sm:block' />
                <Rate value={watchInfo?.rate ?? 5} />
            </div>

            <section>
                <strong className='text-default font-normal'>Availability: </strong>
                <strong className='text-success font-medium'>Available</strong>
            </section>
        </div>
    );
};


export default ProductStatus;