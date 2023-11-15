'use client';

// public
import { useMutation, useQueryClient } from "react-query";

//* components
import Button from "@/components/ui/buttons/Button";
import ProductName from "@/components/ui/texts/ProductName";

//* api
import { increaseQuantity, decreaseQuantity } from "@/app/libs/basket/productQuantity";


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
                onClick={() => quantity > 1 && decrease.mutate()}
            />

            <ProductName>{quantity}</ProductName>

            <Button
                isIconOnly
                icon='plus'
                onClick={() => increase.mutate()}
            />
        </div>
    );
};


export default ChangeQuantityProducts;