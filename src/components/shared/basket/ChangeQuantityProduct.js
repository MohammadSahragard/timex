'use client';

// public
import { useMutation, useQueryClient } from "react-query";

//* components
import { Button } from "@nextui-org/react";
// import Button from "@/components/ui/buttons/Button";
import ProductName from "@/components/ui/texts/ProductName";

//* api
import { increaseQuantity, decreaseQuantity } from "@/libs/basket/productQuantity";


const ChangeQuantityProducts = ({ id, quantity }) => {

    const queryClient = useQueryClient();

    // actions
    const increase = useMutation(() => increaseQuantity(id, quantity), {
        onSuccess: () => queryClient.invalidateQueries('cart')
    });
    const decrease = useMutation(() => decreaseQuantity(id, quantity), {
        onSuccess: () => queryClient.invalidateQueries('cart')
    });



    return (
        <div className='flex items-center gap-2'>
            <Button
                isIconOnly
                size='sm'
                radius='full'
                color='primary'
                variant='ghost'
                startContent={
                    decrease.isLoading ?
                        <i className="fad fa-spinner-third fa-spin"></i> :
                        <i className="fa fa-minus"></i>
                }
                onClick={() => quantity > 1 && decrease.mutate()}
            />

            <ProductName>{quantity}</ProductName>

            <Button
                isIconOnly
                size='sm'
                radius='full'
                color='primary'
                variant='ghost'
                startContent={
                    increase.isLoading ?
                        <i className="fad fa-spinner-third fa-spin"></i> :
                        <i className="fa fa-plus"></i>
                }
                onClick={() => increase.mutate()}
            />
        </div>
    );
};


export default ChangeQuantityProducts;