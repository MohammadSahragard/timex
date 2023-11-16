//* components
import MenuToggler from "@/components/ui/buttons/MenuToggler";
import NavLink from "@/components/ui/links/NavLink";
import SocialMediaLinks from "@/components/ui/links/SocialMediaLinks";



const Menu = ({ onModal }) => {

    const Links = [
        { label: 'Home', href: '/' },
        { label: 'Men', href: '/category/Men' },
        { label: 'Women', href: '/category/Women' },
        { label: 'Kids', href: '/category/Kids' },
        { label: 'Sale', href: '/category/Sale' }
    ];


    return (
        <div className='fixed top-16 left-[3%] bottom-0 hidden lg:grid grid-rows-[auto_max-content] py-[20px] z-20'>
            <nav className='w-min flex flex-col gap-3'>
                {
                    Links.map((link, index) =>
                        <section key={index * 2 + 'ht0i'} data-aos='fade-right' data-aos-delay={index * 200}>
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