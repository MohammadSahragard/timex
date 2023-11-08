//* components
import SlideCounter from "@/components/ui/value/SliderCounter";
import Title from "@/components/ui/texts/Title";
import Heading from "@/components/ui/texts/Heading";
import Price from "@/components/ui/texts/Price";
import LastPrice from "@/components/ui/texts/LastPrice";
import Button from "@/components/ui/buttons/Button";
import PageLink from "@/components/ui/links/PageLink";


const HighlightWatchInfo = () => {
    return (
        <div className='w-full h-max flex justify-end items-center sm:gap-[40%] sm:justify-center px-[3%]'>
            {/* right sidebar info  */}
            <div className='absolute top-2/4 -translate-y-2/4 left-2/4 -translate-x-2/4
                            sm:relative sm:left-0 sm:translate-x-0 sm:translate-y-0'>
                <div
                    className='flex flex-col justify-end items-center gap-2 z-30 h-[500px] sm:gap-10 sm:h-[250px] sm:items-start'
                    data-aos='fade'
                    data-aos-delay='900'
                >
                    <strong className='text-primary text-6xl font-black absolute top-0'>- 10%</strong>
                    <Title>
                        <span className='highlights-category font-bold'>men's</span>
                        <span className='font-light'>watches</span>
                    </Title>
                    <SlideCounter current={1} max={4} />
                </div>
            </div>


            {/* left sidebar info  */}
            <div className='flex flex-col gap-10 w-max h-max'
                data-aos='fade-left' data-aos-delay='900'
            >
                <Heading>The Expedition North</Heading>

                <div className='highlight-name flex gap-4'>
                    <Price value={89} />
                    <LastPrice value={120} />
                </div>

                <div className='flex flex-col gap-4 items-start sm:flex-row sm:items-center'>
                    {/* {
                            isInCart(currentWatch, cart) ?
                                <Button icon='minus' clickEvent={() => dispatch(removeProduct(currentWatch))}>Remove</Button> :
                                <Button icon='plus' clickEvent={() => dispatch(addProduct(currentWatch))}>add</Button>
                    } */}
                    <Button icon='plus'>add</Button>
                    <PageLink href='/'>see details</PageLink>
                </div>
            </div>
        </div>
    );
};


export default HighlightWatchInfo;