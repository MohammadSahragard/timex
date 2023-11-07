//* components
import { Button as NextUiButton } from '@nextui-org/button';
import Logo from "@/components/ui/links/Logo";
import NavbarBasket from "../cart/NavbarBasket";
import MenuToggler from '@/components/ui/buttons/MenuToggler';


const MainNavbar = () => {
    return (
        <header
            className='main-navbar h-16 fixed inset-[0_0_auto_0] pr-[3%] grid grid-cols-[150px_max-content_auto] items-center'
            data-aos='fade-down'
        >

            <div className='mx-auto flex items-center gap-2'>
                <section className='lg:hidden'>
                    <MenuToggler />
                </section>
                <Logo />
            </div>

            <strong className='font-medium'>
                <span className='hidden sm:block'>Free Shopping On Order <span className='text-primary'>$75+</span></span>
            </strong>

            <div className='flex justify-end items-center gap-[15%]'>
                <NavbarBasket />

                <div className='flex items-center gap-2'>
                    <NextUiButton
                        isIconOnly
                        className='bg-transparent text-foreground text-2xl md:hidden'
                    >
                        <i className='far fa-circle-user'></i>
                    </NextUiButton>
                    <NextUiButton className='bg-transparent text-foreground uppercase font-medium hidden md:block'>
                        my account
                    </NextUiButton>

                    <NextUiButton
                        isIconOnly
                        className='bg-transparent text-foreground text-xl'
                    >
                        <i className='far fa-search'></i>
                    </NextUiButton>
                </div>
            </div>

        </header>
    );
};


export default MainNavbar;