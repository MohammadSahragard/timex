'use client';

// public
import { useSelector, useDispatch } from "react-redux";

//* components
import { ButtonGroup } from "@nextui-org/react";
import { Button } from "@nextui-org/react";

//* actions
import { changeSelectedCollection } from "@/redux/features/options/optionsSlice";


const CollectionsButtons = () => {

    const dispatch = useDispatch();
    const selectedCollections = useSelector(state => state.options.selectedCollection);

    const collections = [
        'UFC',
        'Easy Reader',
        'Expedition North',
        'Waterbury'
    ];


    return (
        <ButtonGroup fullWidth radius='none'>
            {
                collections.map((collection, index) =>
                    <Button
                        key={`m-${collection.length * (index + 1) + 'h4l3'}`}
                        variant='bordered'
                        color={collection === selectedCollections ? 'primary' : 'default'}
                        onClick={() => dispatch(changeSelectedCollection(collection))}
                    >
                        {collection}
                    </Button>
                )
            }
        </ButtonGroup>
    );
};


export default CollectionsButtons;