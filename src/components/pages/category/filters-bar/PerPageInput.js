'use client';

// public
import { useSelector, useDispatch } from "react-redux";

//* components
import { Input } from "@nextui-org/react";
import { setPagination } from "@/redux/features/filters/filtersSlice";


const PerPageInput = () => {

    const dispatch = useDispatch();
    const { perPage } = useSelector(state => state.filtersBar.activeFilters['category paginate']);


    // confirm value with 'ENTER' key
    const confirmValueEnter = ({ keyCode, target }) => {
        keyCode === 13 && dispatch(setPagination(target.value));
        !target.value && (target.value = perPage);
    };
    // confirm value with 'onBlur' event
    const confirmValueOnBlur = ({ target }) => {
        dispatch(setPagination(target.value));
        !target.value && (target.value = perPage);
    };



    return (
        <Input
            label='items on pages'
            labelPlacement='outside-left'
            radius='none'
            variant='bordered'
            type='number'
            classNames={{
                base: 'w-max',
                inputWrapper: 'min-h-max py-1 text-primary',
                input: 'font-bold'
            }}
            min={8}
            max={15}
            defaultValue={perPage}
            onBlur={confirmValueOnBlur}
            onKeyDown={confirmValueEnter}
        />
    );
};


export default PerPageInput;