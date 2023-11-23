'use client';

// public
import { useSelector } from "react-redux";

//* components
import SectionsHeader from "@/components/shared/headers/SectionsHeader"



const SliderHeader = () => {

    const selectedCollection = useSelector(state => state.options.selectedCollection);


    return (
        <SectionsHeader
            heading={`The ${selectedCollection} Collection`}
            headingProps={{ customSize: 'text-2xl', boldInline: true }}
            link={{
                name: 'browse',
                href: `/collection/${selectedCollection.split(' ').join('-')}`
            }}
        >A sophisticated watch design with understated elegance.</SectionsHeader>
    );
};


export default SliderHeader;