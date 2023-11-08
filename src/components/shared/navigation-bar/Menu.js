//* components
import MenuToggler from "@/components/ui/buttons/MenuToggler";
import NavLink from "@/components/ui/links/NavLink";
import SocialMediaLinks from "@/components/ui/links/SocialMediaLinks";



const Menu = ({ onModal }) => {

    const Links = [
        { label: 'Home', href: '/' },
        { label: 'Men', href: '/collection/men' },
        { label: 'Women', href: '/collection/women' },
        { label: 'Kids', href: '/collection/kids' },
        { label: 'Sale', href: '/collection/sale' }
    ];


    return (
        <div className='w-[150px] fixed top-16 left-[3%] bottom-0 hidden lg:grid grid-rows-[auto_max-content] py-[20px] z-20'>
            <nav className='w-min flex flex-col gap-3'>
                {
                    Links.map((link, index) =>
                        <section key={index} data-aos='fade-right' data-aos-delay={index * 200}>
                            <NavLink href={link.href}>
                                {link.label}
                            </NavLink>
                        </section>
                    )
                }
                {
                    !onModal && <section data-aos='fade-right' data-aos-delay={1000}>
                        <MenuToggler />
                    </section>
                }
            </nav>

            <div data-aos='fade-right' data-aos-delay={1000}>
                <SocialMediaLinks />
            </div>
        </div>
    );
};


export default Menu;