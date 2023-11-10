//* components
import Logo from "@/components/ui/links/Logo";
import ModalCloserButton from "@/components/ui/buttons/ModalCloserButton";
import BasketStepper from "../basket/BasketStepper";
import Heading from "@/components/ui/texts/Heading";
import BasketCard from "../cards/BasketCard";
import BasketProductsHeader from "../headers/BasketProductsHeader";
import BasketStatus from "../cards/BasketStatus";
import { ScrollShadow } from "@nextui-org/react";
import SectionTitle from "@/components/ui/texts/SectionTitle";



const Basket = () => {
    return (
        <div className='basket fixed inset-0 translate-x-full bg-white transition-transform z-40' style={{ transitionDuration: '700ms' }}>


            <header className='h-16 backdrop-blur-sm absolute inset-[0_3%_auto_3%] flex justify-between items-center z-10'>
                <section className='basket_logo grid place-items-center'>
                    <Logo />
                </section>

                <ModalCloserButton
                    closerClass='basket_closer'
                    modalClass='.basket'
                    otherClass={[
                        '.basket_logo',
                        '.basket_sidebar',
                        '.basket_content'
                    ]}
                />
            </header>


            <div className='basket_sidebar absolute left-[3%] h-full z-50 w-max'>
                <section className='hidden lg:block'><BasketStepper /></section>
            </div>


            <div className='basket_content h-full w-full px-[3%] lg:px-[150px] grid grid-rows-[max-content_auto_max-content] py-16'>
                <div className='flex justify-between items-center'>
                    <Heading customSize='text-4xl' rowDirection>My Basket</Heading>

                    <strong className='font-medium'>
                        <span className='hidden sm:block'>Free Shopping On Order <span className='text-primary'>$75+</span></span>
                    </strong>
                </div>


                <ScrollShadow orientation='horizontal' className='overflow-auto py-2'>
                    <BasketProductsHeader />
                    <BasketCard />
                    <BasketCard />
                    <BasketCard />
                    <BasketCard />
                    <BasketCard />
                </ScrollShadow>

                <BasketStatus />
            </div>

            <SectionTitle>My Shop Basket</SectionTitle>


        </div>
    );
};


export default Basket;