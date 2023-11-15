'use client';

// public
import { useSelector } from "react-redux";
import { useQuery, useMutation, useQueryClient } from "react-query";

//* components
import ProductCard from "../cards/ProductCard";
import NoResult from "@/components/no-result/NoResult";

//* api
import { getWatches } from "@/app/libs/all-watches/getWatches";


function SearchedProducts() {

    const query = useSelector(state => state.options.searchbarQuery);
    const { data, isLoading } = useQuery('searched-products', getWatches);

    // data
    const watches = data?.filter(watch => watch.name.toLowerCase().includes(query.toLowerCase()));



    return (
        <div className={`py-5 gap-5 overflow-auto ${watches?.length < 4 ? 'flex items-start flex-wrap' : 'grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))]'}`}>
            {
                isLoading ? <p>loading...</p> :
                    !query ? null :
                        watches.length ?
                            watches.map(product =>
                                <div key={product.id} className='flex justify-center'>
                                    <ProductCard data={product} />
                                </div>
                            ) : <NoResult />

            }
        </div>
    );
};


export default SearchedProducts;