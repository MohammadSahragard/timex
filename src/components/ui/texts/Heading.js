const Heading = ({ children, customSize, rowDirection, boldInline }) => {

    const splitHeading = children?.split(' ');
    const lightHeading = splitHeading?.[0];
    const boldHeading = splitHeading?.slice(1);

    return (
        <h2 className={`${customSize ? customSize : 'text-3xl sm:text-4xl'} text-foreground flex
                        ${rowDirection ? 'gap-2' : 'flex-col'}`
        }>
            <span className='font-light'>{lightHeading}</span>
            <section className={`flex gap-2 ${boldInline ? null : 'flex-col'}`}>
                {boldHeading?.map(heading => <span key={heading} className='font-black'>{heading}</span>)}
            </section>
        </h2>
    );
};


export default Heading;