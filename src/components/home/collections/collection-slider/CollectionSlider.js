//* components
import SliderHeader from "./SliderHeader";
import Slider from "@/components/shared/sliders/Slider";



const CollectionSlider = () => {
    return (
        <div className='h-max py-16 sm:py-0 sm:h-screen flex flex-col justify-center gap-16'>
            <SliderHeader />
            <Slider />
        </div>
    );
};


export default CollectionSlider;