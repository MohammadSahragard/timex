'use client';;
// public
import { useSelector } from "react-redux";
import { useQuery } from "react-query";

//* components
import ProductCard from "@/components/shared/cards/ProductCard";
import SectionTitle from "@/components/ui/texts/SectionTitle";
import Loading from "@/components/shared/no-result/Loading";

//* api
import { getCategoryWatches } from "@/app/libs/category-watches/getCategoryWatches";


const CategoryWatches = ({ category }) => {

    // query dependencies
    const sortBy = useSelector(state => state.options.selectedSortingCategory);
    const { pageNumber, perPage } = useSelector(state => state.filtersBar.activeFilters['category paginate']);

    // query
    const { data, isLoading } = useQuery(
        ['categoryWatches', category, pageNumber, perPage, sortBy],
        () => getCategoryWatches(category, sortBy, pageNumber, perPage)
    );



    return (
        <div className={`relative py-5 gap-5 min-h-[80vh] ${data?.length < 4 ? 'flex items-start flex-wrap' : 'grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))]'}`}>
            {
                isLoading ? <Loading /> :
                    data.map((product) =>
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