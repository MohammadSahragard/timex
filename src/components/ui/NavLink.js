'use client';

// public
import { usePathname } from "next/navigation";

//* components
import Link from "next/link";


const NavLink = ({ children, href }) => {

    const pathname = usePathname();


    return (
        <Link
            className={`${pathname === href ? 'text-primary' : 'text-foreground'} font-bold`}
            href={href}
        >
            {children}
        </Link>
    );
};


export default NavLink;