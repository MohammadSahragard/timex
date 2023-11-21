//* components
import ProductName from "@/components/ui/texts/ProductName";
import Subtitle from "@/components/ui/texts/Subtitle";
import { Image } from "@nextui-org/react";



const ProductFeatures = ({ watchInfo }) => {

    // images
    const mainImage = watchInfo?.image ?? '';
    const bandImage = watchInfo?.['other images']?.find(product => product.includes('back'));

    // data
    const bandMaterial = watchInfo?.specification?.['Band Material'] ?? '';
    const caseSize = watchInfo?.specification?.['Case Size'] ?? '';
    const caseDiameter = watchInfo?.specification?.['Case Diameter'] ?? '';
    const caseMaterial = watchInfo?.specification?.['Case Material'] ?? '';
    const crystalLens = watchInfo?.specification?.['Crystal Lens'] ?? '';


    return (
        <div className='grid grid-cols-2 lg:pr-[calc(150px+3%)] auto-rows-[300px]'>
            <div className='bg-[#ECEBF0] overflow-hidden relative'>
                <section className='absolute left-0 top-2/4 -translate-x-1/4 -translate-y-2/4'>
                    <Image
                        src={mainImage}
                        className='min-w-[440px] max-w-[440px]'
                        alt='Watch case image'
                    />
                </section>
            </div>
            <div className='grid place-items-center'>
                <section className='flex flex-col'>
                    <section className='flex flex-col sm:flex-row'>
                        <ProductName>Case Material</ProductName>
                        <span className='hidden sm:block'> / </span>
                        <ProductName>Crystal Lens</ProductName>
                    </section>
                    <Subtitle>{caseMaterial} / {crystalLens}</Subtitle>
                </section>
            </div>


            <div className='grid place-items-center'>
                <section className='flex flex-col'>
                    <ProductName>Case Size / Diameter</ProductName>
                    <Subtitle>{caseSize} / {caseDiameter}</Subtitle>
                </section>
            </div>
            <div className='bg-[#ECEBF0] overflow-hidden relative'>
                <section className='absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4'>
                    <Image
                        src={mainImage}
                        className='min-w-[300px] max-w-[300px]'
                        alt='Watch case image'
                    />
                </section>
            </div>


            <div className='bg-[#ECEBF0] overflow-hidden relative'>
                <section className='absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4'>
                    <Image
                        src={bandImage}
                        className='min-w-[300px] max-w-[300px]'
                        alt='Watch case image'
                    />
                </section>
            </div>
            <div className='grid place-items-center'>
                <section className='flex flex-col'>
                    <ProductName>Band Material</ProductName>
                    <Subtitle>{bandMaterial}</Subtitle>
                </section>
            </div>
        </div>
    );
};


export default ProductFeatures;