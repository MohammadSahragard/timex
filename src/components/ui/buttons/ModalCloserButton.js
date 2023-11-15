'use client';

//* components
import { Button } from '@nextui-org/react';

//* animations
import { fadeOutTransition } from '@/animations/animate';
import Tooltip from '../texts/Tooltip';


const ModalCloserButton = ({ closerClass, modalClass, otherClass }) => {

    // ---- functions
    const toggleModal = () => {
        const app = document.querySelector('.app');
        const modal = document.querySelector(modalClass);

        setTimeout(() => {
            modal.style.transform = 'translateX(100%)';
            app.classList.remove('popup-shown');
        }, 500);

        fadeOutTransition(`.${closerClass}`);
        otherClass?.map(className => fadeOutTransition(className));
    };

    // close modal with keys
    if (typeof window !== 'undefined') {
        window.addEventListener('keydown', e => {
            const app = document.querySelector('.app');

            e.key === 'Escape' && toggleModal();
        });
    };



    return (
        <Tooltip content='Esc'>
            <Button
                isIconOnly
                className={`${closerClass} bg-transparent text-primary text-2xl`}
                onClick={toggleModal}
            >
                <i className='fal fa-xmark-large'></i>
            </Button>
        </Tooltip>
    );
};


export default ModalCloserButton;