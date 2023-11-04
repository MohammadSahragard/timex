const SectionTitle = ({ children, position }) => {
    return (
        <strong 
            className={`absolute writing-vertical-lr space-y-2 ${position ? position : 'top-2/4 right-[3%]'}`}
            data-aos='fade-left'
        >
            <i className='fa fa-minus rotate-90'></i>
            <span>{children}</span>
        </strong>
    );
};


export default SectionTitle;