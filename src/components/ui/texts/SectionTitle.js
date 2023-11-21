const SectionTitle = ({ children, position }) => {
    return (
        <strong 
            data-aos='fade-left' 
            className={`absolute h-max text-foreground writing-vertical-lr space-y-2 ${position ? position : 'top-2/4 right-[3%]'}
                        hidden lg:block capitalize`
        }>
            <i className='fa fa-minus rotate-90'></i>
            <span>{children}</span>
        </strong>
    );
};


export default SectionTitle;