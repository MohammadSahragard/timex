import CategoryHeader from "@/components/pages/category/CategoryHeader";

const Category = ({ params }) => {

    const category = params.name;


    return (
        <div className='relative min-h-screen p-[64px_3%] lg:p-[64px_150px] bg-white'>
            <CategoryHeader category={category} />
        </div>
    );
};


export default Category;