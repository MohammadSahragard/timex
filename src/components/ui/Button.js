//* components
import { Button as NextUiButton } from "@nextui-org/react";


const Button = ({ children, icon, isActive, isIconOnly, onClick }) => {
    return (
        <NextUiButton
            radius={isIconOnly ? 'full' : 'none'}
            size={isIconOnly ? 'sm' : ''}
            variant='bordered'
            color='primary'
            className={`${isActive ? '' : 'border-gray-900'} font-bold flex gap-8 hover:text-background hover:bg-primary hover:border-primary uppercase`}
            endContent={icon === 'plus' ? <i className='fa fa-plus'></i> : <i className='fa fa-minus'></i>}
            isIconOnly={isIconOnly ? true : false}
            onClick={onClick}
        >
            {children ?? null}
        </NextUiButton>
    );
};


export default Button;