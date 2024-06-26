//* components
import CategoryCollections from "@/components/pages/category/CategoryCollections";
import CategoryHeader from "@/components/pages/category/CategoryHeader";
import CategoryPagination from "@/components/pages/category/CategoryPagination";
import CategoryWatches from "@/components/pages/category/CategoryWatches";



//* metadata
export const generateMetadata = async ({ params }) => {
    return {
        title: `Timex - ${params.name} Category`,
    };
};



const Category = ({ params }) => {

    const category = params.name;


    return (
        <div className='relative min-h-screen bg-white'>
            <div className='max-w-[1536px] mx-auto p-[100px_3%_0_3%] lg:p-[100px_150px_0_150px] space-y-10'>
                <CategoryHeader category={category} />
                <CategoryWatches category={category} />
                <CategoryPagination />
            </div>
            <CategoryCollections />
        </div>
    );
};


export default Category;