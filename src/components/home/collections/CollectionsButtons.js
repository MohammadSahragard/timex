//* components
import { ButtonGroup } from "@nextui-org/react";
import { Button } from "@nextui-org/react";


const CollectionsButtons = () => {

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
                        key={`m-${collection.length * (index+1) + 'h4l3'}`}
                        variant='bordered'
                        color={collection === 'UFC' ? 'primary' : 'default'}
                    >
                        {collection}
                    </Button>
                )
            }
        </ButtonGroup>
    );
};


export default CollectionsButtons;