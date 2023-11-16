'use client';;
// public
import { useSelector } from "react-redux";
import { useQuery } from "react-query";

//* components
import ProductCard from "@/components/shared/cards/ProductCard";
import SectionTitle from "@/components/ui/texts/SectionTitle";

//* api
import { getCategoryWatches } from "@/app/libs/category-watches/getCategoryWatches";


const CategoryWatches = ({ category }) => {

    const selectedSorting = useSelector(state => state.options.selectedSortingCategory);
    const { data, isLoading } = useQuery('category-watches', () => getCategoryWatches(category, selectedSorting));

    // data
    // const watches = data?.filter(watch => watch.name.toLowerCase().includes(query.toLowerCase()));



    return (
        <div className={`relative py-5 gap-5 ${data?.length < 4 ? 'flex items-start flex-wrap' : 'grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))]'}`}>
            {
                isLoading ? <p>loading...</p> :
                    data.map((product, index) =>
                        <div key={product.id} className='flex justify-center' data-aos='fade-right'>
                            <ProductCard data={product} />
                        </div>
                    )
            }


            <SectionTitle position='-right-[8.5%] top-[75%]'>{`${category}'s`} watches - Timex</SectionTitle>
        </div>
    );
};


export default CategoryWatches;