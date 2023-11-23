//* components
import SectionsHeader from "@/components/shared/headers/SectionsHeader";
import Slider from "@/components/shared/sliders/Slider";
import SectionTitle from "@/components/ui/texts/SectionTitle";


//* get watches (trending collection watches)
import { getTrendingWatches } from "@/libs/trending-watches/getTrendingWatches";


const PopularWatches = async () => {

    const watches = await getTrendingWatches();


    return (
        <div className='popular-watches relative bg-[#ECEBF0]'>
            <div className='max-w-[1536px] mx-auto h-screen flex flex-col justify-center gap-20 p-[64px_3%] lg:p-[0_150px]'>
                <SectionsHeader heading="Popular Watches" link={{ name: 'shop all', href: '/collection/trending' }} />
                <Slider data={watches} />
            </div>

            <SectionTitle position='bottom-24 right-[3%]'>Popular Watches</SectionTitle>
        </div>
    );
};


export default PopularWatches;