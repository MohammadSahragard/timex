import SectionTitle from "@/components/ui/texts/SectionTitle";
import HighlightImage from "./HighlightImage";
import HighlightWatchInfo from "./HighlightWatchInfo";
import SliderControlBar from "./SliderControlBar";

const HighlightWatches = () => {
    return (
        <div className='relative min-h-screen p-[64px_3%] lg:p-[64px_150px] bg-[#ECEBF0]'>
            <div className='absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4'>
                <HighlightImage />
            </div>

            <div className='h-max absolute left-0 right-0 top-2/4 -translate-y-2/4'>
                <HighlightWatchInfo />
            </div>

            <div className='absolute bottom-5 right-0 left-0'>
                <SliderControlBar />
            </div>

            <SectionTitle position='bottom-24 right-[3%]'>Welcome to Timex's world</SectionTitle>
        </div>
    );
};

export default HighlightWatches;