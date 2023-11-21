//* components
import AddProduct from "@/components/ui/buttons/AddProduct";
import NavLink from "@/components/ui/links/NavLink";
import PageLink from "@/components/ui/links/PageLink";
import LastPrice from "@/components/ui/texts/LastPrice";
import Price from "@/components/ui/texts/Price";
import Subtitle from "@/components/ui/texts/Subtitle";
import Rate from "@/components/ui/value/Rate";
import { Divider } from "@nextui-org/react";



const ProductNavigationBar = ({ watchInfo }) => {
    return (
        <div className='absolute top-0 bottom-0 right-0 w-[150px] pb-16 hidden lg:block' data-aos='fade-up'>
            <div className='sticky top-[84px] flex flex-col gap-2'>
                <NavLink href='#description'>Description</NavLink>
                <NavLink href='#specification'>Specification</NavLink>
                <NavLink href='#reviews'>Reviews</NavLink>

                <Divider className='w-10 my-3' />

                <Price value={watchInfo?.price ?? 0} />

                <Subtitle smallSize>${(watchInfo?.price ?? 0 + 50).toFixed(2)}</Subtitle>

                <section className='flex items-center gap-1 mb-4'>
                    <Rate value={watchInfo?.rate ?? 5} />
                    <small>{`(98)`}</small>
                </section>

                <AddProduct watchData={watchInfo} />

                <section className='mt-3 text-sm'>
                    <strong className='text-default font-normal'>Availability: </strong>
                    <strong className='text-success font-medium'>Available</strong>
                </section>

                <Divider className='w-10 my-3' />

                <div className='text-sm'>
                    <PageLink href={`/category/${watchInfo?.category ?? 'Men'}`}>Back To Category</PageLink>
                </div>
            </div>
        </div>
    );
};


export default ProductNavigationBar;