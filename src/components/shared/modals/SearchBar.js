//* components
import Logo from "@/components/ui/links/Logo";
import ModalCloserButton from "@/components/ui/buttons/ModalCloserButton";
import Menu from "../navigation-bar/Menu";
import SearchbarInput from "@/components/ui/inputs/SearchbarInput";
import SectionTitle from "@/components/ui/texts/SectionTitle";
import SearchedProducts from "../searchbar/SearchedProducts";



const SearchBar = () => {
    return (
        <div className='searchbar fixed top-0 left-0 w-full h-full translate-x-full bg-white transition-transform overflow-hidden z-40' style={{ transitionDuration: '700ms' }}>


            <header className='h-16 bg-white/80 backdrop-blur-sm absolute inset-[0_40px_auto_0] grid grid-cols-[150px_auto] justify-between items-center z-10'>
                <section className='searchbar_logo grid place-items-center'>
                    <Logo />
                </section>

                <ModalCloserButton
                    closerClass='.searchbar_closer'
                    modalClass='.searchbar'
                    otherClass={[
                        '.searchbar_logo',
                        '.searchbar_sidebar',
                        '.searchbar_content'
                    ]}
                />
            </header>

            <div className='searchbar_sidebar'>
                <Menu onModal />
            </div>

            <div className='searchbar_content max-w-[1536px] mx-auto px-[40px] lg:px-[150px] absolute inset-0 pt-16 grid grid-rows-[max-content_auto]'>
                <SearchbarInput />
                <SearchedProducts />
            </div>

            <SectionTitle position='right-[3%] bottom-16'>Find your new watch</SectionTitle>
        </div>
    );
};


export default SearchBar;