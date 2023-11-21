'use client';

//* components
import { Link } from "react-scroll";


const InternalLink = ({ children, href }) => {
    return (
        <Link
            className='text-foreground hover:text-default font-medium transition-all cursor-default'
            activeClass='text-primary hover:text-opacity-80'
            to={href}
            offset={-84}
            smooth
            spy
        >
            {children}
        </Link>
    );
};


export default InternalLink;