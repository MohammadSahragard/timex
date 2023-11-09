//* components
import CollectionsHeader from "./CollectionsHeader";
import CollectionSlider from "./collection-slider/CollectionSlider";



const Collection = () => {
    return (
        <div>
            <div className='max-w-[1536px] mx-auto flex flex-col gap-10 p-[64px_3%] lg:p-[0_3%_0_150px]'>
                <CollectionsHeader />
                <CollectionSlider />
            </div>
        </div>
    );
};


export default Collection;