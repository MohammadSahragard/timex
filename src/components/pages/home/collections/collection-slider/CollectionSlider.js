//* components
import SliderHeader from "./SliderHeader";
import Slider from "@/components/shared/sliders/Slider";
import SectionTitle from "@/components/ui/texts/SectionTitle";


//* get all watches
import { getWatches } from "@/app/libs/all-watches/getWatches";



const CollectionSlider = async () => {

    const watches = await getWatches();


    return (
        <div className='relative h-max py-16 sm:py-0 sm:h-screen flex flex-col justify-center gap-16'>
            <SliderHeader />
            <Slider data={watches} isCollection />

            <SectionTitle position='-right-[8.5%] top-2/4'>Collection watches</SectionTitle>
        </div>
    );
};


export default CollectionSlider;