//* components
import Logo from "@/components/ui/links/Logo";
import ModalCloserButton from "@/components/ui/buttons/ModalCloserButton";
import Menu from "../navbar and menu/Menu";
import SearchbarInput from "@/components/ui/inputs/SearchbarInput";
import ProductCard from "../cards/ProductCard";



const SearchBar = () => {
    return (
        <div className='searchbar fixed top-0 left-0 w-full h-full translate-x-full bg-white transition-transform overflow-hidden' style={{ transitionDuration: '700ms' }}>


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

            <div className='searchbar_sidebar none'>
                <Menu onModal />
            </div>

            <div className='searchbar_content h-full w-full px-[40px] lg:pl-[150px] lg:pr-[40px] absolute top-16 left-0 grid grid-rows-[max-content_auto]'>
                <SearchbarInput />
                <div className='grid grid-cols-[repeat(auto-fit,_minmax(256px,_1fr))] gap-2 overflow-auto py-5'>
                    <div className='flex justify-center'>
                        <ProductCard />
                    </div>
                    {/* <div className='flex justify-center'>
                        <ProductCard />
                    </div>
                    <div className='flex justify-center'>
                        <ProductCard />
                    </div>
                    <div className='flex justify-center'>
                        <ProductCard />
                    </div>
                    <div className='flex justify-center'>
                        <ProductCard />
                    </div>
                    <div className='flex justify-center'>
                        <ProductCard />
                    </div> */}
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
        </div>
    );
};


export default SearchBar;