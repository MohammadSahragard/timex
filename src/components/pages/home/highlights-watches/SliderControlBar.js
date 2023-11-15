'use client';

// public
import { useDispatch } from "react-redux";

//* components
import CategorySliderButton from "@/components/ui/buttons/CategorySliderButton";
import SliderButton from "@/components/ui/buttons/SliderButton";

//* actions
import { changeHighlightWatch } from "@/redux/features/options/optionsSlice";



const SliderControlBar = () => {

    const dispatch = useDispatch();


    return (
        <div
            className='w-full h-max flex justify-between sm:gap-[40%] sm:justify-center px-[3%] '
            data-aos='fade-up'
        >
            <div className='sm:w-[157px]'>
                <CategorySliderButton />
            </div>

            <div className='sm:w-[200px] flex gap-4'>
                <SliderButton
                    onClick={() => dispatch(changeHighlightWatch('PREVIOUS'))}
                />

                <SliderButton
                    orientation='right'
                    onClick={() => dispatch(changeHighlightWatch('NEXT'))}
                />
            </div>
        </div>
    );
};


export default SliderControlBar;