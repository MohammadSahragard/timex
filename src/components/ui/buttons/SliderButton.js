const SliderButton = ({ orientation }) => {
    return <button className='group w-16 h-16 grid place-items-center hover:bg-white active:scale-95 rounded-full cursor-pointer transition-all'>
        <i className={`fat fa-chevron-${orientation === 'right' ? 'right group-active:translate-x-2/3' : 'left group-active:-translate-x-2/3'} fa-3x transition-all`}></i>
    </button>
};


export default SliderButton;