//* components
import SliderHeader from "./SliderHeader";
import Slider from "@/components/shared/sliders/Slider";
import SectionTitle from "@/components/ui/texts/SectionTitle";



const CollectionSlider = () => {
    return (
        <div className='relative h-max py-16 sm:py-0 sm:h-screen flex flex-col justify-center gap-16'>
            <SliderHeader />
            <Slider />

            <SectionTitle position='-right-[8.5%] top-2/4'>Collection watches</SectionTitle>
        </div>
    );
};


export default CollectionSlider;