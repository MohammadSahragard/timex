//* components
import Title from "@/components/ui/texts/Title";
import Subtitle from "@/components/ui/texts/Subtitle";
import SectionTitle from "@/components/ui/texts/SectionTitle";



const ProductSpecification = ({ watchInfo }) => {
    return (
        <div className='flex flex-col gap-5 relative lg:pr-[300px]' id="specification">
            <Title>specification</Title>
            <div>
                {
                    Object.keys(watchInfo?.specification)?.map(specification => {
                        if (specification !== 'Product') {
                            return (
                                <div key={specification} className='flex justify-between py-2 border-b'>
                                    <Subtitle smallSize>{specification}</Subtitle>
                                    <strong className='text-medium font-medium'>{watchInfo?.specification?.[specification]}</strong>
                                </div>
                            )
                        }
                    })
                }
            </div>


            <SectionTitle position='-right-[8.5%] top-[50px]'>{`watch's specification`}</SectionTitle>
        </div>
    );
};


export default ProductSpecification;