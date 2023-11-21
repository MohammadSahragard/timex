'use client';

//* change background of navbar
export const navbarBg = () => {
    const navbar = document.querySelector('.main-navbar');

    if (window.location.pathname.length > 1) {
        navbar.style.backgroundColor = '#ffffffd0';


        const relatedWatchesSection = document.querySelector('.related-watches');

        if (relatedWatchesSection) {
            const RWSonViewport = relatedWatchesSection?.getBoundingClientRect()?.y;

            RWSonViewport >= 50 ?
                (navbar.style.backgroundColor = '#ffffffd0') :
                (navbar.style.backgroundColor = '#ECEBF0d0');
        };
    } else {
        const popularWatchesSection = document.querySelector('.popular-watches');
        const PWSonViewport = popularWatchesSection?.getBoundingClientRect()?.y;


        (window.scrollY > window.innerHeight && PWSonViewport >= 50) ?
            (navbar.style.backgroundColor = '#ffffffd0') :
            (navbar.style.backgroundColor = '#ECEBF0d0');
    };


    navbar.classList.add('backdrop-blur-lg');
    window.onscroll = () => navbarBg();
};


