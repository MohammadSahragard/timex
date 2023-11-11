//* components
import SliderHeader from "./SliderHeader";
import Slider from "@/components/shared/sliders/Slider";
import SectionTitle from "@/components/ui/texts/SectionTitle";


//* get data (selected collection watches)
const getData = async () => {
    const res = await fetch('https://watches-db.vercel.app/watches');

    if (!res.ok) {
        throw new Error('Failed to fetch');
    };

    return res.json();
};



const CollectionSlider = async () => {

    const data = await getData();


    return (
        <div className='relative h-max py-16 sm:py-0 sm:h-screen flex flex-col justify-center gap-16'>
            <SliderHeader />
            <Slider data={data} isCollection />

            <SectionTitle position='-right-[8.5%] top-2/4'>Collection watches</SectionTitle>
        </div>
    );
};


export default CollectionSlider;