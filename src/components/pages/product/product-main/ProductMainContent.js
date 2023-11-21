//* components
import ProductDescription from "./ProductDescription";
import ProductFeatures from "./ProductFeatures";
import ProductNavigationBar from "./ProductNavigationBar";
import ProductSpecification from "./ProductSpecification";



const ProductMainContent = async ({ watchInfo }) => {
    return (
        <div className='pb-16 space-y-16 relative'>
            <ProductDescription watchInfo={watchInfo} />
            <ProductFeatures watchInfo={watchInfo} />
            <ProductSpecification watchInfo={watchInfo} />

            <ProductNavigationBar watchInfo={watchInfo} />
        </div>
    );
};


export default ProductMainContent;