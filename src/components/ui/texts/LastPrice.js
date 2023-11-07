const LastPrice = ({ value }) => {
    return (
        <h3 className='text-default text-2xl font-light line-through leading-none'>${value?.toFixed(2) ?? 0}</h3>
    );
};


export default LastPrice;