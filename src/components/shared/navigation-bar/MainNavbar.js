//* components
import { Button as NextUiButton } from '@nextui-org/button';
import Logo from "@/components/ui/links/Logo";
import NavbarBasket from "../../ui/buttons/NavbarBasket";
import MenuToggler from '@/components/ui/buttons/MenuToggler';
import SearchbarToggler from '@/components/ui/buttons/SearchbarToggler';

//* helper
import { Divider } from '@nextui-org/react';



const MainNavbar = () => {
    return (
        <header
            className='main-navbar h-16 fixed inset-[0_0_auto_0] px-[3%] grid grid-cols-[calc(150px_-_3%)_max-content_auto] items-center z-20'
            data-aos='fade-down'
        >

            <div className='flex items-center gap-2'>
                <section className='lg:hidden'>
                    <MenuToggler />
                </section>
                <Logo />
            </div>

            <strong className='font-medium'>
                <span className='hidden sm:block'>Free Shopping On Order <span className='text-primary'>$75+</span></span>
            </strong>

            <div className='flex justify-end items-center gap-2 sm:gap-[15%]'>
                <NavbarBasket />

                <div className='flex items-center gap-2'>
                    <SearchbarToggler />

                    <Divider orientation='vertical' className='h-5' />

                    <NextUiButton
                        isIconOnly
                        className='bg-transparent text-foreground text-2xl md:hidden'
                    >
                        <i className='far fa-circle-user'></i>
                    </NextUiButton>
                    <NextUiButton className='bg-transparent text-foreground uppercase font-medium hidden md:block'>
                        my account
                    </NextUiButton>
                </div>
            </div>

        </header>
    );
};


export default MainNavbar;