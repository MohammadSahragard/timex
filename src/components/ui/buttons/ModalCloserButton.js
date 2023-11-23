'use client';

// public
import { useDispatch } from 'react-redux';

//* components
import { Button } from '@nextui-org/react';
import Tooltip from '../texts/Tooltip';

//* helper
import { closeModal } from '@/helper/function';

//* actions
import { setModalOpen } from '@/redux/features/options/optionsSlice';


const ModalCloserButton = ({ closerClass, modalClass, otherClass }) => {

    const dispatch = useDispatch();
    // ---- functions
    const modalCloser = () => {
        closeModal(closerClass, modalClass, otherClass);

        dispatch(setModalOpen(false));
    };

    // close modal with keys
    if (typeof window !== 'undefined') {
        window.addEventListener('keydown', e => {
            e.key === 'Escape' && modalCloser();
        });
    };



    return (
        <Tooltip content='Esc'>
            <Button
                isIconOnly
                className={`${closerClass.split('.')[1]} bg-transparent text-primary text-2xl`}
                onClick={modalCloser}
            >
                <i className='fal fa-xmark-large'></i>
            </Button>
        </Tooltip>
    );
};


export default ModalCloserButton;