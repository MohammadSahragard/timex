//* components
import ProductHeader from "@/components/pages/product/product-header/ProductHeader";
import ProductHero from "@/components/pages/product/product-hero/ProductHero";



//* metadata
export const generateMetadata = async ({ params }) => {
    return {
        title: `Timex | ${params.name}`,
    };
};;


const Product = async ({ params }) => {

    const { id } = params;


    return (
        <div className='relative min-h-screen bg-white'>
            <div className='p-[100px_3%_0_3%] lg:p-[100px_150px_0_150px] space-y-10'>
                <ProductHeader id={id} />
                <ProductHero id={id} />
            </div>
        </div>
    );
};


export default Product;