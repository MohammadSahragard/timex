'use client';

// public
import { useQuery } from "react-query";

//* components
import BasketCard from "../cards/BasketCard";
import Loading from "../no-result/Loading";

//* api
import { getBasketProducts } from "@/libs/basket/getBasketProducts";



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