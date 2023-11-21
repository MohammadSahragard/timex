import Subtitle from "@/components/ui/texts/Subtitle";
import Rate from "@/components/ui/value/Rate";

const ReviewCard = ({ reviewData }) => {

    const { user, content, rate, date } = reviewData;
    const notFound = <i className="fad fa-spinner-third fa-spin"></i>;


    return (
        <div className='py-8 flex flex-col gap-5 border-b'>
            <div className='flex justify-between items-center'>
                <section className='flex items-center gap-2'>
                    <strong className='font-medium'>{user ?? notFound}</strong>
                    <i className='fas fa-minus'></i>
                    <strong className='text-default font-normal'>{date ?? notFound}</strong>
                </section>

                <div className='scale-85'><Rate value={rate ?? 5} /></div>
            </div>

            <Subtitle smallSize>{content ?? notFound}</Subtitle>
        </div>
    );
};


export default ReviewCard;