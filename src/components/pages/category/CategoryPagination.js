'use client';

// public
import { useSelector, useDispatch } from "react-redux";

//* components
import SlideCounter from "@/components/ui/value/SliderCounter";
import SliderButton from "@/components/ui/buttons/SliderButton";

//* actions
import { setPagination } from "@/redux/features/filters/filtersSlice";



const CategoryPagination = () => {

    const dispatch = useDispatch();
    const { pageNumber } = useSelector(state => state.filtersBar.activeFilters['category paginate']);

    // functions
    const prevPage = () => {
        dispatch(setPagination('PREV_PAGE'));
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const nextPage = () => {
        dispatch(setPagination('NEXT_PAGE'));
        window.scrollTo({ top: 0, behavior: 'smooth' })
    };

    return (
        <div className='h-20 border-b-2 flex justify-between items-center'>
            <SliderButton onClick={prevPage} />
            <SlideCounter current={pageNumber} max={2} />
            <SliderButton onClick={nextPage} orientation='right' />
        </div>
    );
};


export default CategoryPagination