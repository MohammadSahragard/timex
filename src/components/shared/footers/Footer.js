//* components
import Logo from "@/components/ui/links/Logo";
import FooterContent from "./FooterContent";
import FooterSidebar from "./FooterSidebar";
import Subscribe from "./Subscribe";
import QuickLink from "@/components/ui/links/QuickLink";
import SectionTitle from "@/components/ui/texts/SectionTitle";



const Footer = () => {
    return (
        <footer className='dark bg-zinc-900 relative z-30'>
            <Subscribe />

            <div className='relative'>
                <FooterSidebar />

                <div className='max-w-[1536px] mx-auto py-16 pl-[150px] pr-[3%] sm:pr-[150px]'>
                    <FooterContent />

                    <div className='flex flex-col justify-between flex-wrap gap-5 mt-16 sm:items-center sm:flex-row'>
                        <Logo isDarkTheme />
                        <nav className='flex flex-col items-start gap-1 sm:flex-row sm:gap-4'>
                            <QuickLink href='/privacy'>Privacy/Security</QuickLink>
                            <QuickLink href='/terms'>Terms of Use</QuickLink>
                            <QuickLink href='/corporate-site'>Corporate Site</QuickLink>
                        </nav>
                        <small className='text-default'>©2017 Timex.com, Inc. All rights Reserved.</small>
                    </div>
                </div>
            </div>

            <div className='h-10 flex justify-center items-center gap-2 border-t border-gray-500/20 text-default'>
                <span>Developed by</span>
                <i className='fab fa-github'></i>
                <QuickLink href='https://github.com/MohammadSahragard'>Mohammad Sahragard</QuickLink>
            </div>

            <SectionTitle position='bottom-[104px] right-[3%]'>Timex is thanking for your time</SectionTitle>
        </footer>
    );
};


export default Footer;