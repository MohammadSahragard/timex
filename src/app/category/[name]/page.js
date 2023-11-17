import CategoryHeader from "@/components/pages/category/CategoryHeader";
import CategoryPagination from "@/components/pages/category/CategoryPagination";
import CategoryWatches from "@/components/pages/category/CategoryWatches";

const Category = ({ params }) => {

    const category = params.name;


    return (
        <div className='relative min-h-screen p-[120px_3%] lg:p-[120px_150px] bg-white space-y-10'>
            <CategoryHeader category={category} />
            <CategoryWatches category={category} />
            <CategoryPagination />
        </div>
    );
};


export default Category;