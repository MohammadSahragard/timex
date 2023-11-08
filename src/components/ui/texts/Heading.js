const Heading = ({ children, rowDirection }) => {

    const splitHeading = children?.split(' ');
    const lightHeading = splitHeading?.[0];
    const boldHeading = splitHeading?.slice(1);

    return (
        <h2 className={`text-4xl sm:text-5xl text-foreground flex
                        ${rowDirection ? 'gap-2' : 'flex-col'}`
        }>
            <span className='font-light'>{lightHeading}</span>
            {boldHeading?.map(heading => <span key={heading} className='font-black'>{heading}</span>)}
        </h2>
    );
};


export default Heading;