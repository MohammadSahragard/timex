'use client';

// public
import { useQuery } from "react-query";

//* components
import BasketCard from "../cards/BasketCard";

//* api
import { getBasketProducts } from "@/app/libs/basket/getBasketProducts";
import Loading from "../no-result/Loading";



const BasketProducts = () => {

    const { data: cartProducts, isLoading } = useQuery('cart', getBasketProducts);


    if (isLoading) {
        return <Loading />;
    };

    return (
        <div>
            {
                cartProducts?.map(product => <BasketCard key={product.id} data={product} />)
            }
        </div>
    );
};


export default BasketProducts;