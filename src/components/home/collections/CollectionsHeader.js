//* components
import SectionsHeader from '@/components/shared/headers/SectionsHeader';
import CollectionsButtons from './CollectionsButtons';
import CollectionImage from './CollectionImage';
import SectionTitle from '@/components/ui/texts/SectionTitle';



const CollectionsHeader = () => {
    return (
        <div data-aos='fade-left'>
            <div className='!relative h-max space-y-10'>
                <SectionsHeader
                    heading='New Collections'
                    link={{
                        name: 'discover all collections',
                        href: '/collections'
                    }}
                />
    
                <CollectionsButtons />
    
                <CollectionImage />
    
                <SectionTitle position='-right-[8.5%] top-1/4'>The Selected collection</SectionTitle>
            </div>
        </div>
    );
};


export default CollectionsHeader;