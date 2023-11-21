//* components
import Title from "@/components/ui/texts/Title";
import Subtitle from "@/components/ui/texts/Subtitle";
import SectionTitle from "@/components/ui/texts/SectionTitle";



const ProductDescription = ({ watchInfo }) => {
    return (
        <div className='flex flex-col gap-5 lg:pr-[300px] !mt-16' id="description">
            <Title>description</Title>
            <Subtitle smallSize>{watchInfo.description ?? ''}</Subtitle>


            <SectionTitle position='-right-[8.5%] top-[50px]'>{`watch's description`}</SectionTitle>
        </div>
    );
};


export default ProductDescription;