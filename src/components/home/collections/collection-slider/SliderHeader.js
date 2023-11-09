//* components
import SectionsHeader from "@/components/shared/headers/SectionsHeader"



const SliderHeader = () => {
    return (
        <SectionsHeader 
            heading='The UFC Collection'
            headingProps={{customSize: 'text-2xl', rowDirection: true}}
            link={{
                name: 'browse',
                href: '/collection/ufc'
            }}
        >A sophisticated watch design with understated elegance.</SectionsHeader>
    );
};


export default SliderHeader;