'use client';

//* components
import SocialMediaLinks from "@/components/ui/links/SocialMediaLinks";
import { Button } from "@nextui-org/react";


const FooterSidebar = () => {
    return (
        <div className='absolute top-0 bottom-0 left-[3%] flex flex-col justify-between py-16'>
            <SocialMediaLinks />

            <Button
                radius='full'
                isIconOnly
                className='bg-transparent overflow-visible'
                onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
            >
                <i className='animate-bounce fat fa-chevron-up fa-3x'></i>
            </Button>
        </div>
    );
};


export default FooterSidebar;