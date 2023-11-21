//* components
import ProductMainInfo from "./ProductMainInfo";
import ProductStatus from "./ProductStatus";



const ProductHeader = ({ watchInfo }) => {
    return (
        <div data-aos='fade'>
            <ProductMainInfo watchInfo={watchInfo} />
            <ProductStatus watchInfo={watchInfo} />
        </div>
    );
};


export default ProductHeader;