const Subtitle = ({ children, smallSize }) => {
    return (
        <small className={`text-default ${smallSize ? 'text-sm' : 'text-lg'}`}>
            {children}
        </small>
    );
};


export default Subtitle;