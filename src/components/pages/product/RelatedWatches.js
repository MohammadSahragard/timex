//* components
import SectionsHeader from "@/components/shared/headers/SectionsHeader";
import Slider from "@/components/shared/sliders/Slider";
import SectionTitle from "@/components/ui/texts/SectionTitle";


//* get watches (trending collection watches)
import { getRelatedWatches } from "@/libs/watch/getRelatedWatches";


const RelatedWatches = async ({ watchInfo }) => {

    const watches = await getRelatedWatches(watchInfo?.collection ?? 'UFC');
    const relatedWatches = watches.filter(watch => watch.id !== watchInfo.id);


    return (
        <div className='related-watches relative'>
            <div className='max-w-[1536px] h-screen mx-auto flex flex-col justify-center gap-10 p-[64px_3%] lg:p-[0_150px] bg-[#ECEBF0]'>
                <SectionsHeader heading="Related Watches" link={{ name: 'shop all', href: `/collection/${watchInfo?.collection ?? 'UFC'}` }} />
                <Slider data={relatedWatches} />
            </div>

            <SectionTitle position='bottom-24 right-[3%]'>Related Watches</SectionTitle>
        </div>
    );
};


export default RelatedWatches;