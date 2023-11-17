//* components
import SmallTitle from '@/components/ui/texts/SmallTitle';
import QuickLink from '@/components/ui/links/QuickLink';
import PageLink from '@/components/ui/links/PageLink';



const FooterContent = () => {

    const links = [
        {
            title: 'Shop',
            links: [
                { label: 'Men', href: '/category/Men' },
                { label: 'Women', href: '/category/Women' },
                { label: 'Kids', href: '/category/Kids' },
                { label: 'Sale', href: '/category/Sale' },
                { label: 'Collections', href: '/collection' },
            ]
        },
        {
            title: 'Timex',
            links: [
                { label: 'About Us' },
                { label: 'Our Story' },
                { label: 'Careers' },
                { label: 'Corporate Site' },
                { label: 'Global Sites' },
                { label: 'Sell Timex' },
                { label: 'Contact Us' },
            ]
        },
        {
            title: 'Customer',
            links: [
                { label: 'Help' },
                { label: 'Check Order Status' },
                { label: 'Shipping' },
                { label: 'Returns' },
                { label: 'Product Registration' },
                { label: 'Instructions & Manuals' },
                { label: 'Promotional Details' },
            ]
        }
    ];



    return (
        <div className='flex flex-col sm:flex-row justify-between flex-wrap gap-10'>
            {
                links.map((section, index) =>
                    <section key={index + 550} className='flex flex-col gap-5 items-start'>
                        <SmallTitle>{section.title}</SmallTitle>
                        <nav className='flex flex-col gap-2 items-start'>
                            {
                                section.links.map((link, index) =>
                                    <QuickLink key={index + '6fs30'} href={link.href ?? '/'}>{link.label}</QuickLink>
                                )
                            }
                        </nav>
                    </section>
                )
            }
            <section className='flex flex-col gap-5 items-start'>
                <SmallTitle>ABOUT US</SmallTitle>
                <p className='font-normal text-default' style={{ maxWidth: '50ch' }}>
                    Timex Group USA,Inc (formerly known as Timex Corporation) is an American manufacturer company founded n 1854 The. company i now a wholly owned subsidiary of the Dutch conglomerate Timex Group B.V.
                </p>
                <PageLink href='/about-us'>Read More</PageLink>
            </section>
        </div>
    );
};


export default FooterContent;