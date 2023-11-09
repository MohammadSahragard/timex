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
                collections.map(collection =>
                    <Button
                        key={collection.length}
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