//* components
import SectionsHeader from '@/components/shared/headers/SectionsHeader';
import CollectionCard from '@/components/shared/cards/CollectionCard';
import SectionTitle from '@/components/ui/texts/SectionTitle';



const Categories = () => {

    const categories = [
        { src: '/expedition-2.webp', title: 'for men', href: '/category/men' },
        { src: '/women-category.webp', title: 'for women', href: '/category/women' },
        { src: '/sale-category.webp', title: 'watches on sale', href: '/category/sale' },
    ];



    return (
        <div className='relative'>
            <div className='max-w-[1536px] mx-auto min-h-screen flex flex-col justify-center gap-10 py-16 px-[3%] lg:px-[150px]'>
                <SectionsHeader
                    heading='Explore Watches'
                    link={{ name: 'shop all', href: '/men' }}
                />

                <div className='grid grid-cols-[repeat(auto-fit,_minmax(250px,1fr))] gap-5'>
                    {
                        categories.map((category, index) =>
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

            <SectionTitle>Brows categories</SectionTitle>
        </div>
    );
};


export default Categories;