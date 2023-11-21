'use client';;
// public
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useQuery } from "react-query";

//* components
import ProductCard from "@/components/shared/cards/ProductCard";
import SectionTitle from "@/components/ui/texts/SectionTitle";
import Loading from "@/components/shared/no-result/Loading";

//* api
import { getCategoryWatches } from "@/libs/category-watches/getCategoryWatches";
import { getCategoryLengthItems } from "@/libs/category-watches/getCategoryLengthItems";

//* actions
import { setTotalItems } from "@/redux/features/filters/filtersSlice";



const CategoryWatches = ({ category }) => {

    const dispatch = useDispatch();
    //? -------------------------- query dependencies -------------------- */
    const sortBy = useSelector(state => state.filtersBar.selectedSortingCategory);
    const { pageNumber, perPage } = useSelector(state => state.filtersBar.activeFilters['category paginate']);


    //? -------------------------- queries ------------------------------- */
    // get category watches
    const { data, isLoading } = useQuery(
        ['categoryWatches', category, pageNumber, perPage, sortBy],
        () => getCategoryWatches(category, sortBy, pageNumber, perPage)
    );
    // get category watches length (for pagination (length items))
    const {
        data: getLength,
        isLoading: lengthLoading
    } = useQuery('watchesLength', () => getCategoryLengthItems(category));

    useEffect(() => {
        !lengthLoading && dispatch(setTotalItems(getLength?.length ?? 15));
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);




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