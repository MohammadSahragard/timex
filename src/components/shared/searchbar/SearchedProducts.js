'use client';

// public
import { useSelector } from "react-redux";
import { useQuery } from "react-query";

//* components
import ProductCard from "../cards/ProductCard";
import NoResult from "@/components/shared/no-result/NoResult";
import Loading from "../no-result/Loading";

//* api
import { getWatches } from "@/libs/all-watches/getWatches";


function SearchedProducts() {

    const query = useSelector(state => state.options.searchbarQuery);
    const { data, isLoading } = useQuery('searched-products', getWatches);

    // data
    const watches = data?.filter(watch => watch.name.toLowerCase().includes(query.toLowerCase()));



    return (
        <div
            className={`
                py-5 gap-5 overflow-auto 
                ${watches?.length < 4 ?
                    'grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] md:flex md:items-start md:flex-wrap' :
                    'grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))]'
                }
            `}
        >
            {
                isLoading ? <Loading /> :
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