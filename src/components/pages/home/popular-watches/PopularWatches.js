//* components
import SectionsHeader from "@/components/shared/headers/SectionsHeader";
import Slider from "@/components/shared/sliders/Slider";
import SectionTitle from "@/components/ui/texts/SectionTitle";


//* get watches (trending collection watches)
import { getTrendingWatches } from "@/libs/trending-watches/getTrendingWatches";


const PopularWatches = async () => {

    const watches = await getTrendingWatches();


    return (
        <div className='popular-watches relative'>
            <div className='max-w-[1536px] h-screen mx-auto flex flex-col justify-center gap-10 p-[64px_3%] lg:p-[0_150px] bg-[#ECEBF0]'>
                <SectionsHeader heading="Popular Watches" link={{ name: 'shop all', href: '/collection/trending' }} />
                <Slider data={watches} />
            </div>

            <SectionTitle position='bottom-24 right-[3%]'>Popular Watches</SectionTitle>
        </div>
    );
};


export default PopularWatches;