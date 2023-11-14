'use client';

// public
import { useState, useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";

//* components
import { Button } from "@nextui-org/react";

//* helper
import { isInCart } from "@/helper/function";

//* api
import { getBasketProducts } from "@/app/libs/basket/getBasketProducts";
import { addProductToBasket } from "@/app/libs/basket/addProductToBasket";
import { removeProductFromBasket } from "@/app/libs/basket/removeProductFromBasket";


const AddProduct = ({ watchData }) => {

    // set loading for while add or remove the product from the basket
    const [loading, setLoading] = useState();

    // cart
    const queryClient = useQueryClient();
    const { data: cartProducts, isLoading } = useQuery('cart', getBasketProducts);

    const addProduct = useMutation(addProductToBasket, {
        onMutate: () => setLoading(true),
        onSuccess: () => {
            queryClient.invalidateQueries('cart')
                .then(() => setLoading(false));
        },
    });
    const removeProduct = useMutation(removeProductFromBasket, {
        onMutate: () => setLoading(true),
        onSuccess: () => {
            queryClient.invalidateQueries('cart')
                .then(() => setLoading(false));
        },
    });


    // product data
    const { id, name, image, price, rate } = watchData || {};
    const watch = {
        productId: id,
        name,
        image,
        price,
        rate,
        quantity: 1
    };



    return (
        <Button
            radius='none'
            variant='bordered'
            color='primary'
            className='border-gray-900 font-bold flex gap-8 hover:text-background hover:bg-primary hover:border-primary uppercase'

            endContent={
                isLoading || loading ? null :
                    (isInCart(id, cartProducts) ?
                        <i className='fa fa-minus'></i> :
                        <i className='fa fa-plus'></i>
                    )
            }

            disabled={isLoading || loading}
            isLoading={isLoading || loading}

            onClick={() =>
                isInCart(id, cartProducts) ?
                    removeProduct.mutate(isInCart(id, cartProducts).id) :
                    addProduct.mutate(watch)
            }
        >
            {
                isLoading || loading ? '' :
                    (isInCart(id, cartProducts) ?
                        'Remove' :
                        'Add'
                    )
            }
        </Button>
    );
};


export default AddProduct;