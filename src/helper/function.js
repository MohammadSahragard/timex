'use client';

//* animations
import { fadeInTransition } from "@/animations/animate";



//! slice name for product card and highlight
const stringSplitter = (text, from = 0, to = 2) => text?.split(' ').slice(from, to).join(' ');


//! pagination for slider
const totalPage = (length, perPage) => Math.ceil(length / perPage);


//! start product from ... (in pagination)
const startProduct = (currentPage, perPage) => currentPage === 1 ? 0 : (currentPage - 1) * perPage;


//! find product if its is in cart
const isInCart = (productId, cart) => cart?.find(item => item.productId === productId);
//! calculate price and products count of basket
const calculateBasket = items => {
    const totalItems = items.reduce((total, product) => total + product.quantity, 0);
    const totalPrice = items.reduce((total, product) => total + (product.price * product.quantity), 0);

    return { totalItems, totalPrice };
};


//! get the main color of products
const getProductMainColor = colors => colors.split('/')[0].split('-')[0];


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



export {
    stringSplitter,
    totalPage,
    startProduct,
    isInCart,
    calculateBasket,
    getProductMainColor,
    modalToggler
};