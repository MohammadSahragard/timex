//* components
import Weekender from "./Weekender";
import Archive from "./Archive";


const WeekenderArchive = () => {
    return (
        <div className='h-screen grid grid-rows-2 py-16 pl-[3%] pr-[3%] lg:pl-[150px]'>
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