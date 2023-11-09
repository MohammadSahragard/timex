//* components
import SectionsHeader from "@/components/shared/headers/SectionsHeader";
import CollectionsButtons from "./CollectionsButtons";
import CollectionImage from "./CollectionImage";



const CollectionsHeader = () => {
    return (
        <div className='h-max space-y-4' data-aos='fade-left'>
            <SectionsHeader
                heading='New Collections'
                link={{
                    name: 'discover all collections',
                    href: '/collections'
                }}
            />

            <CollectionsButtons />

            <CollectionImage />
        </div>
    );
};


export default CollectionsHeader;