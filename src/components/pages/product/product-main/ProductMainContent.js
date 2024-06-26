//* components
import ProductDescription from "./ProductDescription";
import ProductNavigationBar from "./ProductNavigationBar";
import ProductReviews from "./ProductReviews";
import ProductSpecification from "./ProductSpecification";



const ProductMainContent = async ({ watchInfo }) => {
    return (
        <div className='pb-16 space-y-16 relative'>
            <ProductDescription watchInfo={watchInfo} />
            <ProductSpecification watchInfo={watchInfo} />
            <ProductReviews />

            <ProductNavigationBar watchInfo={watchInfo} />
        </div>
    );
};


export default ProductMainContent;