//* components
import Weekender from "./Weekender";
import Archive from "./Archive";


const WeekenderArchive = () => {
    return (
        <div className='max-w-[1536px] mx-auto h-screen grid grid-rows-2 py-16 px-[3%] lg:px-[150px]'>
            <div data-aos='fade-up' className='grid'>
                <Weekender CTA />
            </div>
            <div data-aos='fade-up' className='grid'>
                <Archive CTA />
            </div>
        </div>
    );
};


export default WeekenderArchive;