'use client';

// public
import { useMutation, useQueryClient } from "react-query";

//* components
import { Button } from "@nextui-org/react";

//* api
import { removeProductFromBasket } from "@/libs/basket/removeProductFromBasket";



const RemoveProductButton = ({ id }) => {

    const queryClient = useQueryClient();


    const removeProduct = useMutation(removeProductFromBasket, {
        onSuccess: () => queryClient.invalidateQueries('cart')
    });



    return (
        <Button
            isIconOnly
            className='bg-transparent text-foreground text-2xl'
            onClick={() => removeProduct.mutate(id)}
        >
            <i className={removeProduct.isLoading ? 'fad fa-spinner-third fa-spin' : 'fat fa-xmark-large'}></i>
        </Button>
    );
};


export default RemoveProductButton;