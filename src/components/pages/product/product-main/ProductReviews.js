'use server';

//* components
import ReviewCard from "@/components/shared/cards/ReviewCard";
import Title from "@/components/ui/texts/Title";

//* api
import { getProductReviews } from "@/libs/reviews/getProductReviews";
import Button from "@/components/ui/buttons/Button";
import { Button as NextUiButton } from '@nextui-org/react'
import SectionTitle from "@/components/ui/texts/SectionTitle";



const ProductReviews = async () => {

    const reviews = await getProductReviews();


    return (
        <div className='flex flex-col gap-5 relative lg:pr-[300px] !mt-16' id="reviews">
            <Title>reviews</Title>

            <div>
                {
                    reviews?.map(review => <ReviewCard key={review.id} reviewData={review} />)
                }
            </div>

            <footer className='py-5 flex items-center justify-between'>
                <Button icon='plus'>reviews</Button>

                <NextUiButton
                    radius='none'
                    className='bg-transparent text-foreground uppercase font-medium p-0 h-max underline underline-offset-2'
                >
                    show more reviews
                </NextUiButton>
            </footer>


            <SectionTitle position='-right-[8.5%] top-[50px]'>{`watch's reviews`}</SectionTitle>
        </div>
    );
};


export default ProductReviews;