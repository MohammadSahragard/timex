//* components
import SectionsHeader from '@/components/shared/headers/SectionsHeader';
import CollectionCard from '@/components/shared/cards/CollectionCard';



const Categories = () => {

    const categories = [
        { src: '/expedition-2.webp', title: 'for men', href: '/collection/men' },
        { src: '/women-category.webp', title: 'for women', href: '/collection/women' },
        { src: '/sale-category.webp', title: 'watches on sale', href: '/collection/sale' },
    ];



    return (
        <div>
            <div className='max-w-[1536px] mx-auto min-h-screen flex flex-col justify-center gap-10 p-[64px_3%] lg:p-[0_3%_0_150px]'>
                <SectionsHeader
                    heading='Explore Watches'
                    link={{ name: 'shop all', href: '/men' }}
                />

                <div className='grid grid-cols-[repeat(auto-fit,_minmax(250px,1fr))] gap-5'>
                    {
                        categories.map((category, index) =>
                            <div key={index * 34} data-aos='fade-left' data-aos-delay={index * 200}>
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
        </div>
    );
};


export default Categories;