'use client';

// public
import { usePathname } from "next/navigation";

//* components
import Link from "next/link";


const NavLink = ({ children, href }) => {

    const pathname = usePathname();


    return (
        <Link
            className={`${pathname === href ? 'text-primary hover:text-opacity-80' : 'text-foreground hover:text-default'} font-medium transition-all`}
            href={href}
        >
            {children}
        </Link>
    );
};


export default NavLink;