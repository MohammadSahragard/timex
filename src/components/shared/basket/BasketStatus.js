'use client'

// public
import { useQuery } from "react-query";

//* components
import Button from "@/components/ui/buttons/Button";
import Price from "@/components/ui/texts/Price";
import Title from "@/components/ui/texts/Title";

//* api
import { getBasketProducts } from "@/libs/basket/getBasketProducts";

//* helper
import { calculateBasket } from "@/helper/function";



const BasketStatus = () => {

    const { data: cartProducts, isLoading } = useQuery('cart', getBasketProducts);
    const { totalItems, totalPrice } = calculateBasket(isLoading ? [] : cartProducts);


    return (
        <div className='flex items-center justify-between py-2'>
            <section className='flex items-center gap-2'>
                <Title>Total: </Title>
                <Price value={totalPrice ?? 0} />
                <small className='text-default text-2xl'>({totalItems ?? 0} items)</small>
            </section>

            <Button>Buy</Button>
        </div>
    );
};


export default BasketStatus;