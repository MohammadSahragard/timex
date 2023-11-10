//* components
import Link from "next/link";
import { Button } from "@nextui-org/button";


const SocialMediaLinks = () => {

    const links = [
        { icon: 'facebook-f', href: '/' },
        { icon: 'twitter', href: '/' },
        { icon: 'instagram', href: '/' },
        { icon: 'pinterest-p', href: '/' },
    ];


    return (
        <nav className='w-min flex flex-col gap-2'>
            {
                links.map((link, index) =>
                    <Button
                        key={(2 * index) + 'h5kl'}
                        isIconOnly
                        className='bg-white text-primary hover:bg-primary hover:text-white text-xl'
                        radius='full'
                    >
                        <Link href='/'>
                            <i className={`fab fa-${link.icon}`}></i>
                        </Link>
                    </Button>
                )
            }
        </nav>
    );
};


export default SocialMediaLinks;