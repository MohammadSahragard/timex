//* components
import SectionsHeader from "@/components/shared/headers/SectionsHeader";
import CollectionCard from "@/components/shared/cards/CollectionCard";
import SectionTitle from "@/components/ui/texts/SectionTitle";



const CategoryCollections = () => {

    const collections = [
        { src: '/collection-banner.png', title: 'fairfield', href: '/' },
        { src: '/easyReader-collection-banner.jpg', title: 'easy reader', href: '/' },
        { src: '/sale-category.webp', title: 'waterbury', href: '/' },
    ];



    return (
        <div className='relative'>
            <div className='max-w-[1536px] mx-auto min-h-screen flex flex-col justify-center gap-10 py-16 px-[3%] lg:px-[150px]'>
                <SectionsHeader
                    heading='Discover New Collections'
                    headingProps={{boldInline: true}}
                    link={{ name: 'all collections', href: '/' }}
                />

                <div className='grid grid-cols-[repeat(auto-fit,_minmax(250px,1fr))] gap-5'>
                    {
                        collections.map((category, index) =>
                            <div key={(index+1) * 34} data-aos='fade-left' data-aos-delay={index * 200}>
                                <CollectionCard
                                    imageSrc={category.src}
                                    titleName={category.title}
                                    href={category.href}
                                />
                            </div>
                        )
                    }
                </div>
            </div>

            <SectionTitle>Discover Collections</SectionTitle>
        </div>
    );
};


export default CategoryCollections;