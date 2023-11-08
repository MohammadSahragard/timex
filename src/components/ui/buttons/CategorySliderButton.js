//* components



const CategorySliderButton = () => {
    return (
        <button className='group w-16 h-16 grid place-items-center hover:bg-white active:scale-95 rounded-full cursor-pointer transition-all'>
            <i className='group-active:animate-spin transition-all fat fa-arrows-rotate fa-3x'></i>
        </button>
    );
};


export default CategorySliderButton;