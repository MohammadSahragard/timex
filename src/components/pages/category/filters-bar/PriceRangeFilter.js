//* components
import { Slider } from "@nextui-org/react";



const PriceRangeFilter = () => {
    return (
        <div className='grid grid-cols-[120px_auto] items-center gap-5 py-4 border-b'>
            <small className='font-medium capitalize'>Price</small>
            <div className='flex justify-end gap-10'>
                <small className='font-medium'>$50.00</small>
                <Slider
                    size='sm'
                    minValue={50}
                    maxValue={1000}
                    showTooltip
                    defaultValue={[100, 500]}
                    formatOptions={{ style: "currency", currency: "USD" }}
                />
                <small className='font-medium'>$1000.00</small>
            </div>
        </div>
    );
};

export default PriceRangeFilter;