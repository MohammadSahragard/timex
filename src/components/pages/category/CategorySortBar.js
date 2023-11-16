'use client';

// public
import { useSelector, useDispatch } from "react-redux";

//* components
import { ButtonGroup } from "@nextui-org/react";
import { Button } from "@nextui-org/react";

//* actions
import { changeSelectedSortingCategory } from "@/redux/features/options/optionsSlice";


const CategorySortBar = () => {

    const dispatch = useDispatch();
    const selectedSortingCategory = useSelector(state => state.options.selectedSortingCategory);

    const sorting = [
        'popular',
        'trending',
        'newest',
        'price'
    ];


    return (
        <ButtonGroup fullWidth radius='none'>
            {
                sorting.map((sort, index) =>
                    <Button
                        className='uppercase font-bold'
                        key={`m-${sort.length * (index + 1) + 'h4l3'}`}
                        variant='bordered'
                        color={sort === selectedSortingCategory ? 'primary' : 'default'}
                        onClick={() => dispatch(changeSelectedSortingCategory(sort))}
                    >
                        {sort}
                    </Button>
                )
            }
        </ButtonGroup>
    );
};


export default CategorySortBar; ``