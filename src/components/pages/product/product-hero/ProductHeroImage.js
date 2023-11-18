//* components
import { Image } from "@nextui-org/react";



const ProductHeroImage = ({ selectedImage }) => {
    return (
        <div
            className='bg-white h-4/5 aspect-square rounded-full grid place-items-center'
            data-aos='zoom-in'
            data-aos-delay={200}
        >
            <Image
                src={selectedImage}
                alt='Selected image of product'
                className='h-[250px]'
            />
        </div>
    );
};


export default ProductHeroImage;