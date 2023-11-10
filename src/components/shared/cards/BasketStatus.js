//* components
import Button from "@/components/ui/buttons/Button";
import Price from "@/components/ui/texts/Price";
import Subtitle from "@/components/ui/texts/Subtitle";
import Title from "@/components/ui/texts/Title";


const BasketStatus = () => {
    return (
        <div className='flex items-center justify-between py-2'>
            <section className='flex items-center gap-2'>
                <Title>Total: </Title>
                <Price value={89} />
                <small className='text-default text-2xl'>(2 items)</small>
            </section>

            <Button>Buy</Button>
        </div>
    );
};


export default BasketStatus;