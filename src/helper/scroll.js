'use client';


const navbarBg = () => {
    const navbar = document.querySelector('.main-navbar');

    if (window.location.pathname.length > 1) {
        navbar.style.backgroundColor = '#ffffffd0';
    } else {
        const PopularWatchesSection = document.querySelector('.popular-watches');
        const PWSonViewport = PopularWatchesSection?.getBoundingClientRect()?.y;


        (window.scrollY > window.innerHeight && PWSonViewport >= 50) ?
            (navbar.style.backgroundColor = '#ffffffd0') :
            (navbar.style.backgroundColor = '#ECEBF0d0');
    };

    navbar.classList.add('backdrop-blur-lg');
}



window.onscroll = () => navbarBg();
window.onload = () => navbarBg();