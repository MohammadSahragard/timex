//* components
import Image from "next/image";
import Link from "next/link";


const Logo = ({ isDarkTheme }) => {
    return (
        <Link href='/'>
            <Image
                src={isDarkTheme ? '/Timex_logo_dark.svg' : '/Timex_logo.svg'}
                alt='logo image'
                height={20}
                width={70}
            />
        </Link>
    );
};


export default Logo;