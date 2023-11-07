'use client';

//* animations
import { fadeInTransition } from "@/animations/animate";



// slice name for product card and highlight
const stringSplitter = (text, from = 0, to = 2) => {
    return text?.split(' ').slice(from, to).join(' ');
};


// pagination for slider
const totalPage = (length, perPage) => Math.ceil(length / perPage);


// start product from ... (in pagination)
const startProduct = (currentPage, perPage) => currentPage === 1 ? 0 : (currentPage - 1) * perPage;


// find product if its is in cart
const isInCart = (product, cart) => cart.find(item => item.id === product.id);


// get the main color of products
const getProductMainColor = colors => colors.split('/')[0].split('-')[0];


// modal toggler function
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
    getProductMainColor,
    modalToggler
};