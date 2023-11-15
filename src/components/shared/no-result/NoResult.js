//* components
import NoResultIcon from "./NoResultIcon";
import Subtitle from "../../ui/texts/Subtitle";



const NoResult = () => {
    return (
        <div className='w-full h-full flex flex-col items-center justify-center gap-4 select-none'>
            <NoResultIcon />
            <Subtitle>No results found</Subtitle>
        </div>
    );
};


export default NoResult;