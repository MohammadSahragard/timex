'use client';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
gsap.registerPlugin(ScrollTrigger, TextPlugin);



//* highlights slider counter
const nextHighlightSlider = () => {
    gsap.fromTo('.slider-counter', { x: '-100%' }, { x: '100%', duration: 1 });
    gsap.fromTo('.highlight-image',
        { xPercent: -50, opacity: 0 },
        { xPercent: 0, opacity: 1, duration: 1 }
    );
    gsap.fromTo('.highlight-name', { xPercent: -50 }, { xPercent: 0, duration: 1 });
};

const prevHighlightSlider = () => {
    gsap.fromTo('.slider-counter', { x: '100%' }, { x: '-100%', duration: 1 });
    gsap.fromTo('.highlight-image',
        { xPercent: 50, opacity: 0 },
        { xPercent: 0, opacity: 1, duration: 1 }
    );
    gsap.fromTo('.highlight-name', { xPercent: 50 }, { xPercent: 0, duration: 1 });
};

const categoryChangerSlider = (category) => {
    gsap.to('.highlights-category', { text: category });
    gsap.fromTo('.highlight-image',
        { yPercent: -50, opacity: 0 },
        { yPercent: 0, opacity: 1 }
    );
    gsap.fromTo('.highlight-name', { xPercent: -50 }, { xPercent: 0, duration: 1 });
};


//* global animation
const fadeInTransition = (className, delay = 1) => gsap.fromTo(className, { opacity: 0 }, { opacity: 1, delay: delay });
const fadeOutTransition = (className) => gsap.fromTo(className, { opacity: 1 }, { opacity: 0 });



export {
    nextHighlightSlider,
    prevHighlightSlider,
    categoryChangerSlider,

    // global animation
    fadeInTransition,
    fadeOutTransition
};