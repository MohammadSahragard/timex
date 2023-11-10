import SectionTitle from "@/components/ui/texts/SectionTitle";
import HighlightImage from "./HighlightImage";
import HighlightWatchInfo from "./HighlightWatchInfo";
import SliderControlBar from "./SliderControlBar";



//* get data (4 watches with the highest price. (4 men and 4 women))
const getMenWatches = async () => {
    const res = await fetch('https://watches-db.vercel.app/watches?category=Men&_sort=price&_order=desc&_end=4');

    if (!res.ok) {
        throw new Error('Failed to fetch');
    };

    return res.json();
};
const getWomenWatches = async () => {
    const res = await fetch('https://watches-db.vercel.app/watches?category=Women&_sort=price&_order=desc&_end=4');

    if (!res.ok) {
        throw new Error('Failed to fetch');
    };

    return res.json();
};



const HighlightWatches = async () => {

    const menWatches = await getMenWatches();
    const womenWatches = await getWomenWatches();


    return (
        <div className='relative min-h-screen p-[64px_3%] lg:p-[64px_150px] bg-[#ECEBF0]'>
            <div className='absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4'>
                <HighlightImage data={{ menWatches, womenWatches }} />
            </div>

            <div className='h-max absolute left-0 right-0 top-2/4 -translate-y-2/4'>
                <HighlightWatchInfo data={{ menWatches, womenWatches }} />
            </div>

            <div className='absolute bottom-5 right-0 left-0'>
                <SliderControlBar />
            </div>

            <SectionTitle position='bottom-24 right-[3%]'>Welcome to Timex's world</SectionTitle>
        </div>
    );
};

export default HighlightWatches;