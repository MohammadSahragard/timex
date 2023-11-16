import CategoryHeader from "@/components/pages/category/CategoryHeader";
import CategoryWatches from "@/components/pages/category/CategoryWatches";

const Category = ({ params }) => {

    const category = params.name;


    return (
        <div className='relative min-h-screen p-[64px_3%] lg:p-[64px_150px] bg-white space-y-10'>
            <CategoryHeader category={category} />
            <CategoryWatches category={category} />
        </div>
    );
};


export default Category;