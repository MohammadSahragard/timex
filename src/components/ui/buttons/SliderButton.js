const ArrowButton = ({ orientation }) => {
    return <div className='w-16 h-16 grid place-items-center hover:bg-white active:scale-95 rounded-full cursor-pointer transition-all'>
        <i className={`fat fa-chevron-${orientation === 'right' ? 'right' : 'left'} fa-3x`}></i>
    </div>
};


export default ArrowButton;