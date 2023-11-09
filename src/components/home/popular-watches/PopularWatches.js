//* components
import SectionsHeader from "@/components/shared/headers/SectionsHeader";
import Slider from "@/components/shared/sliders/Slider";


const PopularWatches = () => {
    return (
        <div className='popular-watches'>
            <div className='max-w-[1536px] h-screen mx-auto flex flex-col justify-center gap-10 p-[64px_3%] lg:p-[0_3%_0_150px] bg-[#ECEBF0]'>
                <SectionsHeader heading="Popular Watches" link={{ name: 'shop all', href: '/collection/trending' }} />
                <Slider />
            </div>
        </div>
    );
};


export default PopularWatches;