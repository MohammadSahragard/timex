'use client';

//* components
import { Button, toggle } from "@nextui-org/react";

//* animations
import { fadeOutTransition } from "@/animations/animate";


const ModalCloserButton = ({ closerClass, modalClass, otherClass }) => {

    // ---- functions
    const toggleModal = () => {
        const app = document.querySelector('.app');
        const modal = document.querySelector(modalClass);

        setTimeout(() => {
            modal.style.transform = 'translateX(100%)';
            app.classList.remove('popup-shown');
        }, 1000);

        fadeOutTransition(`.${closerClass}`);
        otherClass?.map(className => fadeOutTransition(className));
    };

    // close modal with keys
    window.addEventListener('keydown', e => {
        const app = document.querySelector('.app');

        e.key === 'Escape' && toggleModal();
    });



    return (
        <Button
            isIconOnly
            className={`${closerClass} bg-transparent text-primary text-2xl`}
            onClick={toggleModal}
        >
            <i className='fal fa-xmark-large'></i>
        </Button>
    );
};


export default ModalCloserButton;