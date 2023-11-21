//* components
import Title from "@/components/ui/texts/Title";
import Subtitle from "@/components/ui/texts/Subtitle";
import SectionTitle from "@/components/ui/texts/SectionTitle";
import ProductFeatures from "./ProductFeatures";



const ProductDescription = ({ watchInfo }) => {
    return (
        <div className='space-y-16 lg:pr-[300px] !mt-16' id="description">
            <section className='flex flex-col gap-5'>
                <Title>description</Title>
                <Subtitle smallSize>{watchInfo.description ?? ''}</Subtitle>
            </section>

            <ProductFeatures watchInfo={watchInfo} />


            <SectionTitle position='-right-[8.5%] top-[50px]'>{`watch's description`}</SectionTitle>
        </div>
    );
};


export default ProductDescription;