//* components
import Logo from "@/components/ui/links/Logo";
import ModalCloserButton from "@/components/ui/buttons/ModalCloserButton";
import Menu from "../navigation-bar/Menu";
import SearchbarInput from "@/components/ui/inputs/SearchbarInput";
import ProductCard from "../cards/ProductCard";
import SectionTitle from "@/components/ui/texts/SectionTitle";



const SearchBar = () => {
    return (
        <div className='searchbar fixed top-0 left-0 w-full h-full translate-x-full bg-white transition-transform overflow-hidden z-40' style={{ transitionDuration: '700ms' }}>


            <header className='h-16 bg-white/80 backdrop-blur-sm absolute inset-[0_40px_auto_0] grid grid-cols-[150px_auto] justify-between items-center z-10'>
                <section className='searchbar_logo grid place-items-center'>
                    <Logo />
                </section>

                <ModalCloserButton
                    closerClass='searchbar_closer'
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

            <div className='searchbar_content px-[40px] lg:px-[150px] absolute inset-0 pt-16 grid grid-rows-[max-content_auto]'>
                <SearchbarInput />
                <div className='flex flex-col items-center gap-5 overflow-auto py-5 sm:items-start sm:flex-row sm:flex-wrap'>
                    <div className='flex justify-start'>
                        <ProductCard />
                    </div>
                    <div className='flex justify-start'>
                        <ProductCard />
                    </div>
                    <div className='flex justify-start'>
                        <ProductCard />
                    </div>
                    <div className='flex justify-start'>
                        <ProductCard />
                    </div>
                    <div className='flex justify-start'>
                        <ProductCard />
                    </div>
                    {/* {
                        searched ?
                            searchedWatches.map(product =>
                                <div
                                    key={product.id}
                                    className='flex justify-center'
                                >
                                    <ProductCard data={product} />
                                </div>
                            ) : null
                    } */}
                </div>
            </div>

            <SectionTitle position='right-[3%] bottom-16'>Find your new watch</SectionTitle>
        </div>
    );
};


export default SearchBar;