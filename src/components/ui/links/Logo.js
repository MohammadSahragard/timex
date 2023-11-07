//* components
import Image from "next/image";
import Link from "next/link";


const Logo = () => {
    return (
        <Link href='/'>
            <Image
                src='/Timex_logo.svg'
                alt='logo image'
                height={20}
                width={70}
            />
        </Link>
    );
};


export default Logo;