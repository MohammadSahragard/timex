const SlideCounter = ({ current, max }) => {
    return (
        <div className='flex items-center gap-3 text-lg'>
            <strong className='text-primary'>{current ?? 1}</strong>
            <div className='h-[3px] w-10 bg-default/50 rounded-lg overflow-hidden'>
                <div className='slider-counter h-full w-full bg-primary -translate-x-full'></div>
            </div>
            <strong className='text-foreground'>{max ?? 1}</strong>
        </div>
    );
};


export default SlideCounter;