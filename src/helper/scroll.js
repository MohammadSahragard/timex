'use client';


const navbarBg = window.onscroll = () => {
    const navbar = document.querySelector('.main-navbar');
    const PopularWatchesSection = document.querySelector('.popular-watches');
    const PWSonViewport = PopularWatchesSection?.getBoundingClientRect()?.y;

    navbar.classList.add('backdrop-blur-lg');

    (window.scrollY > window.innerHeight && PWSonViewport >= 50) ?
        (navbar.style.backgroundColor = '#ffffffd0') :
        (navbar.style.backgroundColor = '#ECEBF0d0');
};


export {
    navbarBg
};