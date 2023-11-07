//* components
import Link from "next/link";


const QuickLink = ({ children, href }) => {
    return (
        <Link
            href={href}
            className='font-medium text-default hover:text-foreground transition-all'
        >
            {children}
        </Link>
    );
};


export default QuickLink;