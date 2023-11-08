const BasketProductsHeader = () => {
    return (
        <div className='min-w-min grid grid-cols-[minmax(320px,auto)_150px_100px_100px_60px] gap-5 py-3 border-b-2 border-gray-200'>
            <strong className='font-medium text-gray-800'>Product</strong>
            <strong className='font-medium text-gray-800'>Quantity</strong>
            <strong className='font-medium text-gray-800'>Price</strong>
            <strong className='font-medium text-gray-800'>Total</strong>
            <strong className='font-medium text-gray-800'>Remove</strong>
        </div>
    );
};


export default BasketProductsHeader;