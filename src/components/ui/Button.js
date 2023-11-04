//* components
import { Button as NextUiButton } from "@nextui-org/react";


const Button = ({ children, icon, isActive }) => {
    return (
        <NextUiButton
            radius='none'
            variant='bordered'
            color='primary'
            className={`${isActive ? '' : 'border-gray-900'} font-bold flex gap-8 hover:text-background hover:bg-primary hover:border-primary uppercase`}
            endContent={icon === 'plus' ? <i className='fa fa-plus'></i> : <i className='fa fa-minus'></i>}
        >
            {children}
        </NextUiButton>
    );
};


export default Button;