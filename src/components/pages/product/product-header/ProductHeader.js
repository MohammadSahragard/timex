//* components
import ProductMainInfo from "./ProductMainInfo";
import ProductStatus from "./ProductStatus";



const ProductHeader = ({ id }) => {
    return (
        <div>
            <ProductMainInfo id={id} />
            <ProductStatus id={id} />
        </div>
    );
};


export default ProductHeader;