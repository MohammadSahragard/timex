const Price = ({ value }) => {
    return (
        <h3 className='text-primary font-black text-2xl leading-none'>${value?.toFixed(2)??0}</h3>
    );
};


export default Price;