//* components
import Link from 'next/link';
import Button from './Button';


const PageLink = ({ children, href, isButton, buttonProps }) => {
    return (
        <Link
            href={href}
            className={!isButton ? 'text-foreground hover:text-default font-medium underline underline-offset-2 uppercase transition-all' : null}
        >
            {!isButton ? children : null}
            {isButton ? <Button {...buttonProps}>{children}</Button> : null}
        </Link>
    );
};


export default PageLink;