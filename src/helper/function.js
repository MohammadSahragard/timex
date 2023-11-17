'use client';

//* animations
import { fadeInTransition } from "@/animations/animate";



//! slice name for product card and highlight
const stringSplitter = (text, from = 0, to = 2) => text?.split(' ').slice(from, to).join(' ');


//! get pages count (for pagination route category)
const getPagesCount = (perPage, totalItems) => Math.ceil(totalItems / perPage);


//! find product if its is in cart
const isInCart = (productId, cart) => cart?.find(item => item.productId === productId);
//! calculate price and products count of basket
const calculateBasket = items => {
    const totalItems = items.reduce((total, product) => total + product.quantity, 0);
    const totalPrice = items.reduce((total, product) => total + (product.price * product.quantity), 0);

    return { totalItems, totalPrice };
};


//! modal toggler function
const modalToggler = (modalClass, otherClass) => {
    const app = document.querySelector('.app');
    const modal = document.querySelector(modalClass);

    modal.style.transform = 'translateX(0)';
    setTimeout(() => {
        app.classList.add('popup-shown');
    }, 1000);

    otherClass?.map(className => fadeInTransition(className.target, className?.delay ?? 1));
};


//! find filter option from filters box for active and inactive
const isActiveFilter = (filter, filters) => filters?.find(item => item === filter);



export {
    stringSplitter,
    getPagesCount,
    isInCart,
    calculateBasket,
    modalToggler,
    isActiveFilter
};