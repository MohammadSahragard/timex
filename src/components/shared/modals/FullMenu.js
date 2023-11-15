//* components
import Logo from "@/components/ui/links/Logo";
import NavLink from "@/components/ui/links/NavLink";
import SocialMediaLinks from "@/components/ui/links/SocialMediaLinks";
import SmallTitle from "@/components/ui/texts/SmallTitle";
import QuickLink from "@/components/ui/links/QuickLink";
import ModalCloserButton from "@/components/ui/buttons/ModalCloserButton";
import Weekender from "@/components/pages/home/weekender-archive/Weekender";
import Archive from "@/components/pages/home/weekender-archive/Archive";
import SectionTitle from "@/components/ui/texts/SectionTitle";



const FullMenu = () => {

    const links = {
        mainLinks: [
            { label: 'Home', href: '/' },
            { label: 'Men', href: '/collection/men' },
            { label: 'Women', href: '/collection/women' },
            { label: 'Kids', href: '/collection/kids' },
            { label: 'Sale', href: '/collection/sale' },
            { label: 'Collections', href: '/collection' },
            { label: 'Customize', href: '/customize' },
        ],
        quickLinks: [
            {
                title: 'Trending',
                links: [
                    'Allied Three GMT',
                    'Easy Reader 40th Anniversary',
                    'Waterbury Word Time',
                    "Men's Gift Sets",
                    'Sale'
                ]
            },
            {
                title: 'Shop by watch type',
                links: [
                    'Chronograph Watches',
                    'Leather Watches',
                    'Vintage Watches',
                    "Sports Watches",
                    'Casual Watches',
                    'Dress Watches',
                    'Military Inspired Watches',
                    'Shop All'
                ]
            },
            {
                title: 'Shop by collection',
                links: [
                    'Fairfield',
                    'Easy Reader',
                    'Expedition',
                    "IRONMAN",
                    'MK1',
                    'Waterbury',
                    'Weekender',
                    'All'
                ]
            }
        ]
    };



    return (
        <div className='full-menu fixed top-0 left-0 w-full h-full translate-x-full bg-white transition-transform overflow-hidden z-40' style={{ transitionDuration: '700ms' }}>


            <header className='h-16 bg-white/80 backdrop-blur-sm absolute inset-0 px-[3%] grid grid-cols-[150px_auto] justify-between items-center z-10'>
                <section className='full-menu_logo flex items-center pl-[3%]'>
                    <Logo />
                </section>

                <ModalCloserButton
                    closerClass='full-menu_closer'
                    modalClass='.full-menu'
                    otherClass={[
                        '.full-menu_logo',
                        '.full-menu_sidebar',
                        '.full-menu_content'
                    ]}
                />
            </header>

            <section className='full-menu_sidebar w-[150px] absolute top-16 left-0 bottom-0 pl-[40px] pb-[20px] flex items-end justify-start'>
                <SocialMediaLinks />
            </section>

            <div className='full-menu_content h-full pt-16 pl-[150px] pr-[40px] pb-6 lg:pb-0 lg:pr-[150px] overflow-auto xl:overflow-hidden'>
                <div className='grid grid-rows-[repeat(2,max-content)] gap-16 sm:grid-cols-[1fr_2fr]'>
                    <div className='main-section-menu relative'>
                        <nav className='w-max h-max flex flex-col items-start gap-2 text-xl'>
                            {
                                links.mainLinks.map((link, index) =>
                                    <NavLink key={'m2' + index} href={link.href}>
                                        {link.label}
                                    </NavLink>
                                )
                            }
                        </nav>

                        <div className='absolute w-16 h-[2px] bg-primary top-[110%] left-0 sm:top-0 sm:left-2/3'></div>
                    </div>


                    <div className='flex flex-col gap-10'>
                        <div className='flex flex-col sm:flex-row justify-between flex-wrap gap-10'>
                            {
                                links.quickLinks.map((section, index) =>
                                    <section key={'j5' + index + 50} className='flex flex-col gap-5 items-start'>
                                        <SmallTitle>{section.title}</SmallTitle>
                                        <nav className='text-gray-600 flex flex-col gap-2 items-start'>
                                            {
                                                section.links.map((link, index) => <QuickLink key={index + 100} href='/'>{link}</QuickLink>)
                                            }
                                        </nav>
                                    </section>
                                )
                            }
                        </div>
                        <div className='h-[300px] grid-rows-2 hidden lg:grid'>
                            <Weekender />
                            <Archive />
                        </div>
                    </div>
                </div>
            </div>

            <SectionTitle position='right-[3%] bottom-16'>Main menu</SectionTitle>


        </div>
    );
};


export default FullMenu;