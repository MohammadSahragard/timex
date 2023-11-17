//* components
import Heading from "@/components/ui/texts/Heading";
import { Divider } from "@nextui-org/react";
import CategoryFilters from "./filters-bar/CategoryFilters";
import FiltersBarToggler from "./filters-bar/FiltersBarToggler";
import CategorySortBar from "./CategorySortBar";
import SectionTitle from "@/components/ui/texts/SectionTitle";
import PerPageInput from "./filters-bar/PerPageInput";



const CategoryHeader = ({ category }) => {
    return (
        <header className='relative space-y-5'>
            <div className='flex justify-between items-end'>
                <Heading>{`${category ?? 'men'}'s watches`}</Heading>

                <div className='flex items-center gap-4'>
                    <PerPageInput />

                    <Divider orientation='vertical' className='h-5' />

                    <FiltersBarToggler />
                </div>
            </div>

            <CategoryFilters />

            <CategorySortBar />


            <SectionTitle position='-right-[8.5%] top-[10%]'>Filter Watches</SectionTitle>
        </header>
    );
};


export default CategoryHeader;